import { diffString } from 'json-diff';
import { isEqual } from 'lodash-es';
import {
	Assert,
	AssetIdSchema,
	CHARACTER_MODIFIER_TYPE_DEFINITION,
	CharacterModifierNameSchema,
	CloneDeepMutable,
	GetLogger,
	KnownObject,
	type CharacterModifierInbuiltTemplates,
	type CharacterModifierParametrizedConditionChain,
	type CharacterModifierSpecificTemplate,
	type CharacterModifierTemplate,
	type CharacterModifierType,
	type Logger,
} from 'pandora-common';
import * as z from 'zod';
import { BUILD_FOR_TEST } from './config.ts';
import { AssetDatabase } from './tools/assetDatabase.ts';

//#region Character modifier template definitions

const CHARACTER_MODIFIER_TEMPLATES: AssetSpecificCharacterModifierInbuiltTemplates = {
	block_changing_following_state: [
		{
			name: 'Unable to stop following while wearing a leash',
			config: {
				blockStarting: false,
			},
			conditions: [
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Leash',
					},
				},
			],
		},
	],
	block_managing_room_map: [
		{
			name: 'Prevent managing room while helpless',
			config: {},
			conditions: [
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemWithEffect',
						effect: 'blind',
						minStrength: 1,
					},
				},
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemWithEffect',
						effect: 'blockHands',
					},
				},
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemWithEffect',
						effect: 'blockRoomMovement',
					},
				},
			],
		},
	],
	effect_blind: [
		{
			name: 'Fully blind while wearing any blindfolding items',
			config: {
				intensity: 10,
				intensityMax: 10,
			},
			conditions: [
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemWithEffect',
						effect: 'blind',
						minStrength: 1,
					},
				},
			],
		},
		{
			name: 'Fully blind while both eyes are closed',
			config: {
				intensity: 10,
				intensityMax: 10,
			},
			conditions: [
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Eyes_left_closed',
					},
				},
				{
					logic: 'and',
					invert: false,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Eyes_right_closed',
					},
				},
			],
		},
	],
	effect_blur_vision: [
		{
			name: 'Blurred vision while not wearing glasses',
			config: {
				intensity: 4,
				intensityMax: 16,
			},
			conditions: [
				{
					logic: 'or',
					invert: true,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Facewear_glasses',
					},
				},
			],
		},
	],
	effect_block_room_movement: [
		{
			name: 'Block room movement while wearing a leash',
			config: {},
			conditions: [
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Leash',
					},
				},
			],
		},
	],
	effect_hearing: [
		{
			name: 'Impact hearing while wearing a hood',
			config: {
				intensity: 2,
				intensityMax: 10,
			},
			conditions: [
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemOfAsset',
						assetId: 'a/blindfolds/steel_sphere',
					},
				},
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemOfAsset',
						assetId: 'a/blindfolds/full_hood',
					},
				},
				{
					logic: 'or',
					invert: false,
					condition: {
						type: 'hasItemOfAsset',
						assetId: 'a/blindfolds/half_hood',
					},
				},
			],
		},
	],
	speech_faltering_voice: [
		{
			name: 'Stuttering while fully naked',
			config: {
				addFillerSounds: false,
			},
			conditions: [
				{
					logic: 'or',
					invert: true,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Clothing_upper',
					},
				},
				{
					logic: 'and',
					invert: true,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Clothing_lower',
					},
				},
				{
					logic: 'and',
					invert: true,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Clothing_large',
					},
				},
				{
					logic: 'and',
					invert: true,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Clothing_outer',
					},
				},
				{
					logic: 'and',
					invert: true,
					condition: {
						type: 'hasItemWithAttribute',
						attribute: 'Underwear',
					},
				},
			],
		},
	],
};

//#endregion Character modifier template definitions

type AssetSpecificCharacterModifierInbuiltTemplateForType<Type extends CharacterModifierType> = (Omit<Extract<CharacterModifierSpecificTemplate, { type: Type; }>, 'type'> & {
	conditions: CharacterModifierParametrizedConditionChain<AssetRepoExtraArgs>;
	/**
	 * If set, then this asset is being used for automated testing.
	 * That means, that it is included in the "test bundle" and care should be taken when changing it, as doing so might require regenerating the bundle and affect existing automated tests.
	 */
	useForTesting?: boolean;
});

export type AssetSpecificCharacterModifierInbuiltTemplates = {
	[Type in CharacterModifierType]?: AssetSpecificCharacterModifierInbuiltTemplateForType<Type>[];
};

function LoadCharacterModifierTemplatesForType<const Type extends CharacterModifierType>(
	type: Type,
	modifiers: readonly AssetSpecificCharacterModifierInbuiltTemplateForType<Type>[],
	result: CharacterModifierInbuiltTemplates,
	logger: Logger,
) {
	const modifierDefinition = CHARACTER_MODIFIER_TYPE_DEFINITION[type];

	for (const { name, config, conditions, useForTesting } of modifiers) {
		if (BUILD_FOR_TEST && useForTesting !== true) {
			// Do not use this template when building for test
			continue;
		}

		const parsedName = CharacterModifierNameSchema.safeParse(name);
		if (!parsedName.success) {
			logger.warning(`Template '${name}' for modifier type ${type} has invalid name:\n`, z.prettifyError(parsedName.error));
		} else {
			Assert(parsedName.data === name);
		}

		// Parse should always work here
		const parsedConfig = modifierDefinition.configSchema.parse(config);
		if (!isEqual(config, parsedConfig)) {
			const diff = diffString(config, parsedConfig, { color: false });
			logger.warning(`Template '${name}' for modifier type ${type} has invalid configuration.\n\tFollowing changes would happen at creation:\n`, diff);
		}

		if (conditions.length > 0) {
			if (conditions[0].logic !== 'or') {
				logger.warning(`Template '${name}' for modifier type ${type}:\n\tFirst condition should always specify logic as 'or'.`);
			}
		}

		for (const { condition } of conditions) {
			if (condition.type === 'hasItemOfAsset') {
				const parsedId = AssetIdSchema.safeParse(condition.assetId);
				if (!parsedId.success) {
					logger.warning(`Template '${name}' for modifier type ${type}:\n\t'${condition.assetId}' is not a valid asset id:\n`, z.prettifyError(parsedId.error));
				} else {
					const asset = AssetDatabase.assets.get(parsedId.data);
					if (asset == null) {
						logger.warning(`Template '${name}' for modifier type ${type}:\n\tUnknown asset '${condition.assetId}'`);
					}
				}
			}
		}

		const template: CharacterModifierTemplate = {
			type,
			name,
			config: CloneDeepMutable(config),
			conditions: CloneDeepMutable(conditions),
		};

		result[type] ??= [];
		result[type].push(template as Extract<CharacterModifierSpecificTemplate, { type: Type; }>);
	}
}

export function LoadCharacterModifierTemplates(): CharacterModifierInbuiltTemplates {
	const logger = GetLogger('CharacterModifierTemplates');

	const result: CharacterModifierInbuiltTemplates = {};

	for (const [k, v] of KnownObject.entries(CHARACTER_MODIFIER_TEMPLATES)) {
		if (v == null)
			continue;

		const names = v.map((t) => t.name);
		if (new Set(names).size !== names.length) {
			logger.warning(`Templates for modifier type '${k}' do not have unique names`);
		}

		LoadCharacterModifierTemplatesForType<typeof k>(k, v, result, logger);
	}

	return result;
}
