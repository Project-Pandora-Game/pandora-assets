import { HexRGBAColorString, HexRGBAColorStringSchema } from 'pandora-common';

export const COLOR_GROUP_DEFINITION = {
	skin: '#FFECDF',
	hair: '#444444',
	hairShine: '#FFFFFF55',
} as const satisfies Readonly<Record<string, HexRGBAColorString>>;

if (Object.values(COLOR_GROUP_DEFINITION).some((color) => !HexRGBAColorStringSchema.safeParse(color).success)) {
	throw new Error('Invalid color group definition');
}

export type ColorGroupNames = keyof typeof COLOR_GROUP_DEFINITION;
