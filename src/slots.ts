import type { AssetSlotDefinition, Satisfies } from 'pandora-common';

export const ASSET_SLOTS = {

};

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
type __satisfies__ASSET_SLOTS = Satisfies<typeof ASSET_SLOTS, Record<string, AssetSlotDefinition>>;

export type AssetSlotNames = keyof typeof ASSET_SLOTS;
