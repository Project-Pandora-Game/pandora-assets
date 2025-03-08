import { diffString } from 'json-diff';
import { isEqual } from 'lodash-es';
import {
	Assert,
	AssetIdSchema,
	CHARACTER_MODIFIER_TYPE_DEFINITION,
	CharacterModifierNameSchema,
	GetLogger,
	KnownObject,
	type CharacterModifierInbuiltTemplates,
	type CharacterModifierParametrizedConditionChain,
	type CharacterModifierSpecificTemplate,
	type CharacterModifierType,
	type Satisfies,
} from 'pandora-common';
import { AssetDatabase } from './tools/assetDatabase.js';

//#region Character modifier template definitions

const CHARACTER_MODIFIER_TEMPLATES: AssetSpecificCharacterModifierInbuiltTemplates = {
	effect_blind: [
		{
			type: 'effect_blind',
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
			type: 'effect_blind',
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
			type: 'effect_blur_vision',
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
			type: 'effect_block_room_movement',
			name: 'Block room movement while leashed',
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
			type: 'effect_hearing',
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
			type: 'speech_faltering_voice',
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

export type AssetSpecificCharacterModifierInbuiltTemplates = Satisfies<{
	[Type in CharacterModifierType]?: (Extract<CharacterModifierSpecificTemplate, { type: Type; }> & {
		conditions: CharacterModifierParametrizedConditionChain<AssetRepoExtraArgs>;
	})[];
}, CharacterModifierInbuiltTemplates>;

export function LoadCharacterModifierTemplates(): AssetSpecificCharacterModifierInbuiltTemplates {
	const logger = GetLogger('CharacterModifierTemplates');

	for (const [k, v] of KnownObject.entries(CHARACTER_MODIFIER_TEMPLATES)) {
		if (v == null)
			continue;

		const names = v.map((t) => t.name);
		if (new Set(names).size !== names.length) {
			logger.warning(`Templates for modifier type '${k}' do not have unique names`);
		}

		const modifierDefinition = CHARACTER_MODIFIER_TYPE_DEFINITION[k];
		for (const template of v) {
			const parsedName = CharacterModifierNameSchema.safeParse(template.name);
			if (!parsedName.success) {
				logger.warning(`Template '${template.name}' for modifier type ${k} has invalid name:\n`, parsedName.error.toString());
			} else {
				Assert(parsedName.data === template.name);
			}

			// Parse should always work here
			const parsedConfig = modifierDefinition.configSchema.parse(template.config);
			if (!isEqual(template.config, parsedConfig)) {
				const diff = diffString(template.config, parsedConfig, { color: false });
				logger.warning(`Template '${template.name}' for modifier type ${k} has invalid configuration.\n\tFollowing changes would happen at creation:\n`, diff);
			}

			if (template.conditions.length > 0) {
				if (template.conditions[0].logic !== 'or') {
					logger.warning(`Template '${template.name}' for modifier type ${k}:\n\tFirst condition should always specify logic as 'or'.`);
				}
			}

			for (const { condition } of template.conditions) {
				if (condition.type === 'hasItemOfAsset') {
					const parsedId = AssetIdSchema.safeParse(condition.assetId);
					if (!parsedId.success) {
						logger.warning(`Template '${template.name}' for modifier type ${k}:\n\t'${condition.assetId}' is not a valid asset id:\n`, parsedId.error.toString());
					} else {
						const asset = AssetDatabase.assets.get(parsedId.data);
						if (asset == null) {
							logger.warning(`Template '${template.name}' for modifier type ${k}:\n\tUnknown asset '${condition.assetId}'`);
						}
					}
				}
			}
		}
	}

	return CHARACTER_MODIFIER_TEMPLATES;
}
