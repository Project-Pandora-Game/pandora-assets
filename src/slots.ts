import type { AssetDefinitionExtraArgs, AssetSlotDefinition, Satisfies } from 'pandora-common';

export const ASSET_SLOTS = {
	mouth: {
		name: 'mouth',
		description: 'Mouth',
		capacity: 10,
	},
} as const;

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
type __satisfies__ASSET_SLOTS = Satisfies<typeof ASSET_SLOTS, Record<string, AssetSlotDefinition<Omit<AssetDefinitionExtraArgs, 'slots'> & { slots: AssetSlotNames; }>>>;

export type AssetSlotNames = keyof typeof ASSET_SLOTS & string;
