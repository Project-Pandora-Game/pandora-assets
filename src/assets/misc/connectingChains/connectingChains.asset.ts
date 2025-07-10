import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Connecting Chains',
	size: 'small',
	requireFreeHandsToUseDefault: true,
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
			lockedProperties: {
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
					id: 'chained_collar',
					name: 'Wrists chained to a collar',
					properties: {
						attributes: {
							requires: [
								'Collar_front_ring',
								'Wrist_cuffs_chainable',
							],
						},
						poseLimits: {
							arms: {
								position: 'front',
								rotation: 'down',
								fingers: 'fist',
							},
							bones: {
								arm_r: 95,
								arm_l: 95,
								elbow_r: 128,
								elbow_l: 128,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'reverse_prayer',
					name: 'Reverse prayer',
					properties: {
						attributes: {
							requires: [
								'Collar_front_ring',
								'Wrist_cuffs_chainable',
							],
						},
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
								fingers: 'fist',
							},
							bones: {
								arm_l: 100,
								arm_r: 100,
								elbow_l: 150,
								elbow_r: 151,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'beltChain',
					name: 'Belt Chains',
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
					properties: {
						poseLimits: {
							legs: {
								pose: 'kneeling',
							},
							bones: {
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
				{
					id: 'wristToAnkles',
					name: 'Wrists chained to ankles',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
							},
							legs: {
								pose: 'kneeling',
							},
							bones: {
								arm_l: 90,
								arm_r: 90,
								elbow_l: 0,
								elbow_r: 0,
								leg_l: [[-25, 5]],
								leg_r: [[-25, 5]],
							},
						},
						attributes: {
							provides: [
								'Restraint',
								'Restraint_arms',
								'Restraint_legs',
							],
							requires: [
								'Wrist_cuffs_chainable',
								'Ankle_cuffs_chainable',
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
