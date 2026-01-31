import { CreateRopeColor } from '../../../helpers/rope_base.ts';
const { colorization: baseColorization, modules: baseModules } = CreateRopeColor();

DefineAsset({
	name: 'Bamboo Stick',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		bamboo: {
			name: 'Bamboo',
			default: '#EFCA7B',
		},
		...baseColorization,
	},
	roomDeployment: {
		autoDeployRelativePosition: [150, -60, 0],
	},
	// size:350, y:455, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	poseLimits: {
		arms: {
			position: 'front',
		},
		armsOrder: {
			upper: 'left',
		},
	},
	modules: {
		...baseModules,
		horizontal_bamboo: {
			type: 'typed',
			name: 'Horizontal Bamboo',
			variants: [
				{
					id: 'short',
					name: 'Short',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
					properties: {
						stateFlags: {
							provides: [
								'medium_vertical_bamboo',
							],
						},
					},
				},
				{
					id: 'long',
					name: 'Long',
					properties: {
						stateFlags: {
							provides: [
								'medium_vertical_bamboo',
								'long_vertical_bamboo',
							],
						},
					},
				},
			],
		},
		hands: {
			type: 'typed',
			name: 'Hands',
			variants: [
				{
					id: 'free',
					name: 'Untied',
					default: true,
					properties: {
						poseLimits: {
							bones: {
								arm_r: 80,
								arm_l: 80,
								elbow_r: [[-30, 95]],
								elbow_l: [[-30, 95]],
							},
						},
					},
				},
				{
					id: 'tied_front',
					name: 'Cuffed',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 80,
								arm_l: 80,
								elbow_r: 27,
								elbow_l: 27,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'tied_thighs',
					name: 'Tied to Thighs',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 80,
								arm_l: 80,
								elbow_r: 27,
								elbow_l: 27,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'tied_bamboo_elbows',
					name: 'Tied to Bamboo',
					properties: {
						stateFlags: {
							requires: {
								medium_vertical_bamboo: 'Hands cannot be tied to a Short Horizontal Bamboo',
							},
						},
						poseLimits: {
							bones: {
								arm_r: 80,
								arm_l: 80,
								elbow_r: -80,
								elbow_l: -80,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'tied_bamboo_shoulders',
					name: 'Tied to Bamboo High',
					properties: {
						stateFlags: {
							requires: {
								long_vertical_bamboo: 'Hands cannot be tied to a Short nor Medium Horizontal Bamboo',
							},
						},
						poseLimits: {
							bones: {
								arm_r: 0,
								arm_l: 0,
								elbow_r: 0,
								elbow_l: 0,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
			],
		},
		vertical_bamboo: {
			type: 'typed',
			name: 'Vertical Bamboo',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'short',
					name: 'Short',
					properties: {
						attributes: {
							provides: [
								'Gag_anchor_point',
							],
							requires: [
								'Back_knot_anchor_point',
							],
						},
					},
				},
				{
					id: 'medium',
					name: 'Medium',
					properties: {
						attributes: {
							provides: [
								'Gag_anchor_point',
							],
							requires: [
								'Back_knot_anchor_point',
							],
						},
						poseLimits: {
							legs: {
								pose: ['kneeling', 'standing'],
							},
						},
					},
				},
				{
					id: 'long',
					name: 'Long',
					properties: {
						attributes: {
							provides: [
								'Gag_anchor_point',
							],
							requires: [
								'Back_knot_anchor_point',
							],
						},
						poseLimits: {
							legs: {
								pose: 'standing',
							},
						},
					},
				},
			],
		},
		room_placement: {
			type: 'typed',
			name: 'Room Placement',
			variants: [
				{
					id: 'floor',
					name: 'Floor',
					default: true,
				},
				{
					id: 'wall',
					name: 'Wall',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied ITEM_ASSET_NAME between TARGET_CHARACTER_DYNAMIC_POSSESSIVE body and arms.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
