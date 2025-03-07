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
			name: 'Fully blind when wearing blindfold items',
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
