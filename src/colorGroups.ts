import { HexColorString, HexColorStringSchema } from 'pandora-common';

export const COLOR_GROUP_DEFINITION = {
	skin: '#FFECDF',
	hair: '#555555',
	hairShine: '#888888',
} as const satisfies Readonly<Record<string, HexColorString>>;

if (Object.values(COLOR_GROUP_DEFINITION).some((color) => !HexColorStringSchema.safeParse(color).success)) {
	throw new Error('Invalid color group definition');
}

export type ColorGroupNames = keyof typeof COLOR_GROUP_DEFINITION;
