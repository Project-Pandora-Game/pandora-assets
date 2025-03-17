import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'AFK Necklace',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		pendant: {
			name: 'Pendant',
			default: '#E2C666',
		},
		chain: {
			name: 'Chain',
			default: '#CCBA7C',
		},
	},
	// size:200, y:349, centered
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
					id: 'afk',
					name: 'AFK Pendant',
					default: true,
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
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
