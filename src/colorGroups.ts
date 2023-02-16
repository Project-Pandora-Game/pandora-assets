import { HexColorString, HexColorStringSchema } from 'pandora-common';

export const COLOR_GROUP_DEFINITION = {
	skin: '#FFECDF',
} as const satisfies Readonly<Record<string, HexColorString>>;

if (Object.values(COLOR_GROUP_DEFINITION).some((color) => !HexColorStringSchema.safeParse(color).success)) {
	throw new Error('Invalid color group definition');
}

export type ColorGroupNames = keyof typeof COLOR_GROUP_DEFINITION;
