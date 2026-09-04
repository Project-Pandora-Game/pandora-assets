import { CreateLeatherColor } from '../../../helpers/leather_base.ts';
const { colorization: baseColorization, modules: baseModules } = CreateLeatherColor();

DefineAsset({
	name: 'Arm Leather Belts',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		...baseColorization,
	},
	roomDeployment: {
		autoDeployRelativePosition: [150, -60, 0],
	},
	// size:360, y:450, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	modules: {
		...baseModules,
		shoulders: {
			type: 'typed',
			name: 'Shoulders',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						stateFlags: {
							provides: ['belted_arms'],
						},
					},
				},
			],
		},
		elbows: {
			type: 'typed',
			name: 'Elbows',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						stateFlags: {
							provides: ['belted_arms'],
						},
						attributes: {
							provides: ['Elbow_belt'],
						},
					},
				},
			],
		},
		forearms: {
			type: 'typed',
			name: 'Forearms',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						stateFlags: {
							provides: ['belted_forearms'],
						},
					},
				},
			],
		},
		wrists: {
			type: 'typed',
			name: 'Wrists',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						stateFlags: {
							provides: ['belted_forearms'],
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['colorGroupLeather', 'shoulders', 'elbows', 'forearms', 'wrists'],
			},
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['belted_arms'],
			properties: {
				poseLimits: {
					arms: {
						position: 'back',
						rotation: 'forward',
					},
					bones: {
						arm_r: 110,
						arm_l: 110,
						elbow_r: [[-60, 40]],
						elbow_l: [[-60, 40]],
					},
					armsOrder: {
						upper: 'right',
					},
				},
			},
		},
		{
			requiredFlags: ['belted_forearms'],
			properties: {
				effects: {
					blockHands: true,
				},
				poseLimits: {
					arms: {
						position: 'back',
						rotation: 'forward',
					},
					bones: {
						arm_r: 110,
						arm_l: 110,
						elbow_r: -15,
						elbow_l: -15,
					},
					armsOrder: {
						upper: 'right',
					},
				},
			},
		},
	],
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
