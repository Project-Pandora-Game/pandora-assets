import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Modern Glasses',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#402F2F',
		},
		glass: {
			name: 'Glass',
			default: '#E1EEEF4D',
			minAlpha: '1%',
		},
	},
	// size:210, y:190, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Facewear',
			'Facewear_glasses',
		],
	},
	modules: {
		style: {
			type: 'typed',
			name: 'Wearing style',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'lowered',
					name: 'Lowered',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oyp9A',
				copyrightHolder: 'AlbertVictory',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
