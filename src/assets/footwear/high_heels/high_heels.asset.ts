import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'High Heels',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		shoe: {
			name: 'Shoe',
			default: '#D20000',
		},
		soles: {
			name: 'Soles',
			default: '#393939',
		},
	},
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
			occupiedProperties: {
				blockAddRemove: true,
				attributes: {
					requires: ['Shoe_top_strap'], // TODO: Use flags
				},
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
							bones: { tiptoeing: 30 },
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
		heelType: {
			type: 'typed',
			name: 'Heel Type',
			variants: [
				{
					id: 'noStrap',
					name: 'No Strap',
					default: true,
				},
				{
					id: 'strap',
					name: 'With Strap',
					properties: {
						attributes: {
							provides: [
								'Shoe_top_strap',
							],
						},
					},
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
