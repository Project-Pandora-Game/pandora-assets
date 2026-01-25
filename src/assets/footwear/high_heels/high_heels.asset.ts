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
			default: '#686868',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [330, -150, 0],
	},
	// size:240, y:1143, centered
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
				blockModules: ['heelType'],
				stateFlags: {
					requires: {
						strap: 'Locking requires a strap to lock.',
					},
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
						stateFlags: {
							provides: ['strap'],
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
