import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Adaptable Necklace',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		pendant: {
			name: 'Pendant outer color',
			default: '#E2C394',
		},
		inner: {
			name: 'Pendant inner color',
			default: '#F73D3D',
		},
		chain: {
			name: 'Chain',
			default: '#CCBA7C',
		},
	},
	// size:190, y:374, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		pendantType: {
			type: 'typed',
			name: 'Pendant Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'heart',
					name: 'Heart Pendant',
					default: true,
				},
				{
					id: 'jewel',
					name: 'Jewel Pendant',
				},
				{
					id: 'triangle',
					name: 'Triangle Pendant',
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
				part: 'used 3D model - base',
				source: 'https://skfb.ly/6Tt9W',
				copyrightHolder: 'SimpleMan',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - heart',
				source: 'https://skfb.ly/o7DoV',
				copyrightHolder: 'Dinara Gabdullina',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - jewel',
				source: 'https://skfb.ly/oqsuV',
				copyrightHolder: 'Lizardsking',
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
