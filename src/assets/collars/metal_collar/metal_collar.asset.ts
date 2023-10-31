import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Metal Collar',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		collar: {
			name: 'Collar',
			default: '#FFFFFF',
		},
		ring: {
			name: 'Ring',
			default: '#FFFFFF',
		},
	},
	attributes: [
		'Restraint',
		'Collar',
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		collarConfig: {
			type: 'typed',
			name: 'Collar Configuration',
			variants: [
				{
					id: 'collar',
					name: 'Collar Only',
					default: true,
				},
				{
					id: 'ring',
					name: 'Collar + Ring',
					properties: {
						attributes: [
							'Collar_front_ring',
						],
					},
				},
			],
		},
		collarType: {
			type: 'typed',
			name: 'Collar Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal Collar',
					default: true,
				},
				{
					id: 'thick',
					name: 'Thick Collar',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed a Metal Collar around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Metal Collar from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
