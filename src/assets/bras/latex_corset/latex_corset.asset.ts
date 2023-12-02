import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Latex Corset',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		bra: {
			name: 'Corset',
			default: '#AAAAAA',
		},
		laces: {
			name: 'Laces',
			default: '#AB0606',
		},
	},
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
				license: 'Pandora-Use-Only',
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
