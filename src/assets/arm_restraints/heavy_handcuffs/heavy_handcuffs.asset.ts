import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Heavy Handcuffs',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		cuffs: {
			name: 'Cuff',
			default: '#B7B0AB',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [0, -100, 0],
	},
	// size:212, y:640, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Wrist_cuffs',
		],
	},
	effects: {
		blockHands: true,
	},
	posePresets: [
		{
			name: 'Down 1',
			bones: {
				arm_r: 88,
				arm_l: 88,
				elbow_r: 20,
				elbow_l: 20,
			},
		},
		{
			name: 'Down 2',
			bones: {
				arm_r: 100,
				arm_l: 100,
				elbow_r: -4,
				elbow_l: -4,
			},
		},
		{
			name: 'Overhead',
			bones: {
				arm_r: -84,
				arm_l: -84,
				elbow_r: -30,
				elbow_l: -30,
			},
			optional: { arms: { position: 'front' } },
		},
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['cuffState'],
			},
		},
		cuffState: {
			type: 'typed',
			name: 'Cuff states',
			variants: [
				{
					id: 'front',
					name: 'Cuffed in front',
					default: true,
					properties: {
						poseLimits: {
							armsOrder: { upper: 'right' },
							options: [
								{
									bones: {
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									bones: {
										arm_r: -84,
										arm_l: -84,
										elbow_r: -30,
										elbow_l: -30,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{ // Supporting thumb cuffs
									bones: {
										arm_r: 100,
										arm_l: 100,
										elbow_r: -4,
										elbow_l: -4,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
							],
						},
					},
				},
				{
					id: 'back',
					name: 'Cuffed behind',
					properties: {
						poseLimits: {
							armsOrder: { upper: 'right' },
							options: [
								{
									bones: {
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
								{ // Down - supporting thumb cuffs
									bones: {
										arm_r: 100,
										arm_l: 100,
										elbow_r: -4,
										elbow_l: -4,
									},
									options: [
										{ arms: { position: 'back_below_hair' } },
										{ arms: { position: 'back' } },
									],
								},
							],
						},
					},
				},
			],
		},
		type: {
			type: 'typed',
			name: 'Link Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'chain',
					name: 'Chain',
					default: true,
				},
				{
					id: 'bar',
					name: 'Bar',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
		actionRemove: 'SOURCE_CHARACTER opened and slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
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
