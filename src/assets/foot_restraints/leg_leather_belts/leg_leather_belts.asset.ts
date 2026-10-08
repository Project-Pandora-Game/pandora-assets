import { CreateLeatherColor } from '../../../helpers/leather_base.ts';
const { colorization: baseColorization, modules: baseModules } = CreateLeatherColor();

DefineAsset({
	name: 'Leg Leather Belts',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		...baseColorization,
	},
	roomDeployment: {
		autoDeployRelativePosition: [150, -60, 0],
	},
	// size:360, y:900, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
		],
	},
	modules: {
		...baseModules,
		thighs: {
			type: 'typed',
			name: 'Thighs',
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
							provides: ['belted_legs'],
						},
					},
				},
			],
		},
		knees: {
			type: 'typed',
			name: 'Knees',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'above',
					name: 'Above',
					properties: {
						stateFlags: {
							provides: ['belted_legs'],
						},
					},
				},
				{
					id: 'below',
					name: 'Below',
					properties: {
						stateFlags: {
							provides: ['belted_legs'],
						},
					},
				},
				{
					id: 'both',
					name: 'Both',
					properties: {
						stateFlags: {
							provides: ['belted_legs'],
						},
					},
				},
			],
		},
		shins: {
			type: 'typed',
			name: 'Shins',
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
							provides: ['belted_legs'],
						},
					},
				},
			],
		},
		ankles: {
			type: 'typed',
			name: 'Ankles',
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
							provides: ['belted_legs'],
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
				blockModules: ['colorGroupLeather', 'thighs', 'knees', 'shins', 'ankles'],
			},
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['belted_legs'],
			properties: {
				poseLimits: {
					options: [
						{
							legs: {
								pose: 'standing',
							},
							bones: {
								leg_r: 2,
								leg_l: 2,
							},
						},
						{
							legs: {
								pose: 'sitting',
							},
							bones: {
								leg_r: 4,
								leg_l: 4,
							},
						},
						{
							legs: {
								pose: 'kneeling',
							},
							bones: {
								leg_r: 5,
								leg_l: 5,
							},
						},
					],
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
