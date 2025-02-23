import type { Logger } from 'pandora-common';

type MessageRequirementRule = {
	name: string;
	match: readonly string[];
};
const ASSET_MESSAGES_REQUIREMENTS: readonly MessageRequirementRule[] = [
	{
		name: 'Source character name',
		match: [
			'SOURCE_CHARACTER',
			'SOURCE_CHARACTER_POSSESSIVE',
			'SOURCE_CHARACTER_NAME',
		],
	},
	{
		name: 'Source character id',
		match: [
			'SOURCE_CHARACTER',
			'SOURCE_CHARACTER_POSSESSIVE',
			'SOURCE_CHARACTER_ID',
		],
	},
	{
		name: 'Target character name',
		match: [
			'TARGET_CHARACTER',
			'TARGET_CHARACTER_POSSESSIVE',
			'TARGET_CHARACTER_NAME',
			'TARGET_CHARACTER_DYNAMIC_SUBJECTIVE',
			'TARGET_CHARACTER_DYNAMIC_OBJECTIVE',
			'TARGET_CHARACTER_DYNAMIC_POSSESSIVE',
			'TARGET_CHARACTER_DYNAMIC_REFLEXIVE',
			'ITEM_CONTAINER_SIMPLE',
			'ITEM_CONTAINER_SIMPLE_DYNAMIC',
		],
	},
	{
		name: 'Target character id',
		match: [
			'TARGET_CHARACTER',
			'TARGET_CHARACTER_POSSESSIVE',
			'TARGET_CHARACTER_ID',
			'TARGET_CHARACTER_DYNAMIC_SUBJECTIVE',
			'TARGET_CHARACTER_DYNAMIC_OBJECTIVE',
			'TARGET_CHARACTER_DYNAMIC_POSSESSIVE',
			'TARGET_CHARACTER_DYNAMIC_REFLEXIVE',
			'ITEM_CONTAINER_SIMPLE',
			'ITEM_CONTAINER_SIMPLE_DYNAMIC',
		],
	},
	{
		name: 'Item name (with support for custom names)',
		match: [
			'ITEM_ASSET_NAME',
		],
	},
];

export function ValidateAssetChatMessages(
	logger: Logger,
	context: string,
	messages: Record<string, string | undefined> | undefined,
): void {
	for (const [key, message] of Object.entries(messages ?? {})) {
		if (!message) // Ignore purposefully empty messages and unset keys
			continue;

		for (const validation of ASSET_MESSAGES_REQUIREMENTS) {
			if (validation.match.some((m) => message.includes(m)))
				continue;

			logger.warning(
				`[Chat] ${context}.${key}:\n\tMessage does not contain ${validation.name}.\n` +
				`\tAdd one of the following substitution keys to support it:\n` +
				validation.match.map((m) => '\t  - ' + m).join('\n'),
			);
		}
	}
}
