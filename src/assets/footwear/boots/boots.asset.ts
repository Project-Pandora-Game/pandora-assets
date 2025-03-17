import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Boots',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		shoe: {
			name: 'Shoe',
			default: '#530F1E',
		},
		soles: {
			name: 'Soles',
			default: '#686868',
		},
		smallRings: {
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		strings: {
			name: 'Strings',
			default: '#000000',
		},
	},
	// size:400, y:990, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Footwear',
			'Restraint',
			'Restraint_legs',
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
		heelLength: {
			type: 'typed',
			name: 'Heel Length',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					properties: {
						poseLimits: {
							bones: {
								tiptoeing: 30,
							},
						},
					},
				},
				{
					id: 'high',
					name: 'High',
					properties: {
						poseLimits: {
							bones: {
								tiptoeing: 100,
							},
						},
					},
				},
				{
					id: 'veryhigh',
					name: 'Very High',
					properties: {
						poseLimits: {
							bones: {
								tiptoeing: 160,
							},
						},
					},
				},
			],
		},
		bootType: {
			type: 'typed',
			name: 'Boot Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'knee',
					name: 'Knee High',
					default: true,
				},
				{
					id: 'thigh',
					name: 'Thigh High',
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
