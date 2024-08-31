import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Connecting Chains',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		Chains: {
			name: 'Chains',
			default: '#DDDDDD',
		},
	},
	// size:400, y:550, centered
	preview: 'preview.png',
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		chains: {
			type: 'typed',
			name: 'Connecting Chains',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'none',
					name: 'No Chain',
					default: true,
				},
				{
					id: 'beltChain',
					name: 'Belt Chains',
					switchMessage: 'SOURCE_CHARACTER connects the cuffs to TARGET_CHARACTER_DYNAMIC_POSSESSIVE belt with short chains.',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
							},
							bones: {
								arm_l: 70,
								elbow_l: 20,
								arm_r: 70,
								elbow_r: 20,
							},
						},
						attributes: {
							provides: [
								'Restraint',
								'Restraint_arms',
							],
							requires: [
								'Wrist_cuffs_chainable',
								'Belt_chainable',
							],
						},
					},
				},
				{
					id: 'armbinderChain',
					name: 'Kneeling Chains',
					switchMessage: 'SOURCE_CHARACTER connects the cuffs to TARGET_CHARACTER_DYNAMIC_POSSESSIVE armbinder with short chains.',
					properties: {
						poseLimits: {
							legs: 'kneeling',
							bones:
								{
									leg_l: [[-27, 5]],
									leg_r: [[-27, 5]],
								},
						},
						attributes: {
							provides: [
								'Restraint',
								'Restraint_legs',
							],
							requires: [
								'Ankle_cuffs_chainable',
								'Armbinder_chainable',
							],
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
