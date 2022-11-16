import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Boots',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Shoe',
			default: '#530F1E',
		},
		{
			name: 'Soles',
			default: '#393939',
		},
		{
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		{
			name: 'Strings',
			default: '#000000',
		},
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockRequirements: ['Lock'],
			occupiedEffects: {
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
					poseLimits: {
						forcePose: {
							tiptoeing: 30,
						},
					},
				},
				{
					id: 'high',
					name: 'High',
					poseLimits: {
						forcePose: {
							tiptoeing: 100,
						},
					},
				},
				{
					id: 'veryhigh',
					name: 'Very High',
					poseLimits: {
						forcePose: {
							tiptoeing: 160,
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
				license: 'Pandora-Use-Only',
			},
		],
	},
});
