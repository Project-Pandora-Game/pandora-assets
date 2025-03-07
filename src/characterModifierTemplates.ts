import { diffString } from 'json-diff';
import { isEqual } from 'lodash-es';
import {
	Assert,
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
				logger.warning(`Template '${template.name}' for modifier type ${k} has invalid configuration. Following changes would happen at creation:\n`, diff);
			}

			if (template.conditions.length > 0) {
				if (template.conditions[0].logic !== 'or') {
					logger.warning(`Template '${template.name}' for modifier type ${k}: First condition should always specify logic as 'or'.`);
				}
			}
		}
	}

	return CHARACTER_MODIFIER_TEMPLATES;
}
