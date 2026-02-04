import { CreateRopeColor } from '../../../helpers/rope_base.ts';
const { colorization, modules: baseModules } = CreateRopeColor();

DefineAsset({
	name: 'Leg Jute Ropes',
	size: 'small',
	graphics: 'graphics.json',
	colorization,
	roomDeployment: {
		autoDeployRelativePosition: [-150, -60, 0],
	},
	// size:420, y:940, centered
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
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'single',
					name: 'Single',
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
										leg_r: 2,
										leg_l: 2,
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
						attributes: {
							provides: [
								'Rope_above_knees_anchor_point',
							],
						},
					},
				},
				{
					id: 'double',
					name: 'Double',
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
										leg_r: 2,
										leg_l: 2,
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
						attributes: {
							provides: [
								'Rope_above_knees_anchor_point',
								'Rope_thighs_anchor_point',
							],
						},
					},
				},
				{
					id: 'full',
					name: 'Full',
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
										leg_r: 2,
										leg_l: 2,
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
						attributes: {
							provides: [
								'Rope_above_knees_anchor_point',
								'Rope_thighs_anchor_point',
							],
						},
					},
				},
			],
		},
		legs: {
			type: 'typed',
			name: 'Legs',
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'single',
					name: 'Single',
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
										leg_r: 2,
										leg_l: 2,
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
						attributes: {
							provides: [
								'Rope_ankles_anchor_point',
							],
						},
					},
					default: true,
				},
				{
					id: 'double',
					name: 'Double',
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
										leg_r: 2,
										leg_l: 2,
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
						attributes: {
							provides: [
								'Rope_ankles_anchor_point',
							],
						},
					},
				},
				{
					id: 'complex',
					name: 'Complex',
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
										leg_r: 2,
										leg_l: 2,
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
						attributes: {
							provides: [
								'Rope_ankles_anchor_point',
							],
						},
					},
				},
				{
					id: 'full',
					name: 'Full',
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
										leg_r: 2,
										leg_l: 2,
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
						attributes: {
							provides: [
								'Rope_ankles_anchor_point',
							],
						},
					},
				},
			],
		},
		link: {
			type: 'typed',
			name: 'Link',
			variants: [
				{
					id: 'cinched',
					name: 'Cinched',
					default: true,
				},
				{
					id: 'linked',
					name: 'Linked',
				},
			],
		},
		frogtie: {
			type: 'typed',
			name: 'Frogtie',
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
						poseLimits: {
							legs: {
								pose: 'kneeling',
							},
						},
						attributes: {
							provides: [
								'Frogtie',
							],
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
					id: 'coiled',
					name: 'Coiled',
				},
				{
					id: 'tangled',
					name: 'Tangled',
					default: true,
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
