import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Key Necklace',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		chain: {
			name: 'Chain',
			default: '#CCBA7C',
		},
		ring: {
			name: 'Ring',
			default: '#E2C666',
		},
		key: {
			name: 'Key',
			default: '#E2C666',
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
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		pendantType: {
			type: 'typed',
			name: 'Pendant Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'key_m',
					name: 'Key Modern',
					default: true,
				},
				{
					id: 'key_o',
					name: 'Key Old',
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
				part: 'used 3D model - modern key',
				source: 'https://skfb.ly/o6URG',
				copyrightHolder: 'Diego G.',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - modern old',
				source: 'https://skfb.ly/6UHxs',
				copyrightHolder: 'JeremyW',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
