import type { HexColorString } from 'pandora-common';

const COLOR_GROUP_DEFINITION = {
} as const satisfies Readonly<Record<string, HexColorString>>;

export type ColorGroupNames = keyof typeof COLOR_GROUP_DEFINITION;
