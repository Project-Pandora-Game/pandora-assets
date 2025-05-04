import { DefineTileTexture } from '../tools/tileTextureDefinition.ts';

const TILE_TEXTURES: IntermediateTileTextureDefinition[] = [
	{
		id: 'black_white_marble_tiles_01',
		name: 'Diamond alternating marble tiles',
		image: 'black_white_marble_tiles_01.png',
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://opengameart.org/content/200-tile-floor-textures?page=1',
					copyrightHolder: 'Screaming Brain Studios',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'brick_01',
		name: 'Brown brick wall',
		image: 'brick_01.png',
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://opengameart.org/content/horror-texture-pack',
					copyrightHolder: 'Screaming Brain Studios',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'wood_01',
		name: 'Dark wood pattern',
		image: 'wood_01.png',
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://opengameart.org/content/5-wood-textures',
					copyrightHolder: 'Luke.RUSTLTD',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'wood_02',
		name: 'Natural wood pattern',
		image: 'wood_02.png',
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://opengameart.org/content/5-wood-textures',
					copyrightHolder: 'Luke.RUSTLTD',
					license: 'Public Domain',
				},
			],
		},
	},
	{
		id: 'wood_03',
		name: 'Light wood pattern',
		image: 'wood_03.png',
		ownership: {
			responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
			licensing: [
				{
					source: 'https://opengameart.org/content/5-wood-textures',
					copyrightHolder: 'Luke.RUSTLTD',
					license: 'Public Domain',
				},
			],
		},
	},
];

export function LoadTileTextures() {
	for (const texture of TILE_TEXTURES) {
		DefineTileTexture(texture);
	}
}
