import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Nythacorp Chastity Belt',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		Lining: {
			name: 'Lining',
			default: '#25511d',
		},
		Metal: {
			name: 'Metal',
			default: '#616161',
		},
		Clasp: {
			name: 'Locking Clasp',
			default: '#616161',
		},
		Crotchplate: {
			name: 'Crotch Plate',
			default: '#747476',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Chastity',
			'Belt_chainable',
		],
		requires: [
			'!Penis',
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
		lockPlate: {
			type: 'lockSlot',
			name: 'Lock for crotch plate',
			lockedProperties: {
				blockModules: ['crotchPlate'],
			},
		},
		beltType: {
			type: 'typed',
			name: 'Belt Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
				},
				{
					id: 'wire',
					name: 'Wire',
				},
			],
		},
		crotchPlate: {
			type: 'typed',
			name: 'Crotch Plate',
			variants: [
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
				{
					id: 'covered',
					name: 'Covered',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
							],
							covers: [
								'Vulva_item',
							],
							requires: [
								'!Crotch_protruding',
							],
							hides: [
								'Toy_clamps_genital',
							],
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Nythaleath <54818651+Nythaleath@users.noreply.github.com>',
		credits: ['Nythaleath'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Nythaleath',
				editedBy: 'Nythaleath',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
