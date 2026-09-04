import { CreateLeatherColor } from '../../../helpers/leather_base.ts';
const { colorization: baseColorization, modules: baseModules } = CreateLeatherColor();

DefineAsset({
	name: 'Leather Harness',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		...baseColorization,
		bolts: {
			name: 'Bolts',
			default: '#DADADA',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [150, -60, 0],
	},
	// size:450, y:377, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_torso',
			'Restraint_arms',
		],
	},
	modules: {
		...baseModules,
		chest: {
			type: 'typed',
			name: 'Chest',
			variants: [
				{
					id: 'no',
					name: 'No',
				},
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
			],
		},
		waist: {
			type: 'typed',
			name: 'Waist Extension',
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
							provides: ['waist_ring'],
						},
					},
				},
			],
		},
		hips: {
			type: 'typed',
			name: 'Hips',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'basic',
					name: 'Basic',
					properties: {
						stateFlags: {
							provides: ['hip_rings'],
						},
					},
				},
				{
					id: 'center_ring',
					name: 'Center Ring',
					properties: {
						stateFlags: {
							provides: ['hip_rings'],
							requires: {
								waist_ring: 'Hips center ring requires waist ring',
							},
						},
					},
				},
			],
		},
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
				},
			],
		},
		lock_harness: {
			type: 'lockSlot',
			name: 'Lock Harness',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['colorGroupLeather', 'chest', 'waist', 'hips', 'thighs'],
			},
		},
		wrists_cuffs: {
			type: 'typed',
			name: 'Clip cuffs to hips at back',
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
						effects: {
							blockHands: true,
						},
						stateFlags: {
							requires: {
								hip_rings: 'Clipping cuffs requires enabling hips module',
							},
						},
						attributes: {
							requires: ['Elbow_belt', 'Wrist_cuffs_chainable'],
						},
						poseLimits: {
							bones: {
								elbow_l: [[-60, -50]],
								elbow_r: [[-60, -50]],
							},
						},
					},
				},
			],
		},
		lock_cuffs: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['wrists_cuffs'],
			},
		},
	},
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
