import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Latex Corset',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		bra: {
			name: 'Corset',
			default: '#CCCCCC',
		},
		laces: {
			name: 'Laces',
			default: '#AB0606',
		},
	},
	// size:310, y:459, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Underwear',
			'Underwear_corset',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		lacing: {
			type: 'typed',
			name: 'Lacing',
			variants: [
				{
					id: 'laced',
					name: 'Laced with strings',
					default: true,
				},
				{
					id: 'unlaced',
					name: 'No laces',
				},
			],
		},
		bust: {
			type: 'typed',
			name: 'Bust Type',
			variants: [
				{
					id: 'covered',
					name: 'Covered bust',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Underwear_bra',
							],
						},
					},
				},
				{
					id: 'underbust',
					name: 'Underbust corset',
				},
			],
		},
		corsetConfig: {
			type: 'typed',
			name: 'Corset Length',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Covering crotch',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Underwear_pants',
							],
							hides: ['Penis'],
						},
					},
				},
				{
					id: 'short',
					name: 'Short corset',
				},
			],
		},
		color: {
			type: 'typed',
			name: 'Corset Base Color',
			interactionType: ItemInteractionType.STYLING,
			variants: [
				{
					id: 'black',
					name: 'Black Corset',
					default: true,
				},
				{
					id: 'white',
					name: 'White Corset',
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
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oJGqQ',
				copyrightHolder: 'Ahmed.Saadi',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
