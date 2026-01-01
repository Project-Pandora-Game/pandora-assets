import { ItemInteractionType } from 'pandora-common';

DefineBodypart({
	name: 'Base Body',
	bodypart: 'base',
	useForTesting: true,
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skin: {
			name: 'Skin',
			group: 'skin',
		},
		nipples: {
			name: 'Nipples',
			default: '#FED1CB',
		},
	},
	preview: null,
	poseLimits: {
		bones: {
			breasts: [[-180, -180], [-70, -70], [0, 0], [100, 100], [180, 180]],
			tiptoeing: [[0, 180]],
		},
	},
	attributes: {
		provides: [
			'Body_base',
		],
	},
	modules: {
		muscleType: {
			type: 'typed',
			name: 'Stomach muscles',
			interactionType: ItemInteractionType.STYLING,
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
				},
				{
					id: 'muscular',
					name: 'Muscular',
				},
			],
		},
		poseLimitingArms: {
			type: 'typed',
			name: 'Body posing limits: Arms',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'default',
					name: 'Default',
					default: true,
					properties: {
						poseLimits: [
							{
								options: [
									{
										leftArm: {
											rotation: 'backward',
										},
										bones: {
											elbow_l: [[-180, 5], [120, 180]],
										},
									},
									{
										leftArm: {
											rotation: 'up',
										},
										bones: {
											elbow_l: [[-180, 5]],
										},
									},
									{
										leftArm: {
											rotation: 'forward',
										},
										bones: {
											elbow_l: [[-170, 170]],
										},
									},
									{
										leftArm: {
											rotation: 'down',
										},
										bones: {
											elbow_l: [[-180, -120], [-5, 180]],
										},
									},
								],
							},
							{
								options: [
									{
										rightArm: {
											rotation: 'backward',
										},
										bones: {
											elbow_r: [[-180, 5], [120, 180]],
										},
									},
									{
										rightArm: {
											rotation: 'up',
										},
										bones: {
											elbow_r: [[-180, 5]],
										},
									},
									{
										rightArm: {
											rotation: 'forward',
										},
										bones: {
											elbow_r: [[-170, 170]],
										},
									},
									{
										rightArm: {
											rotation: 'down',
										},
										bones: {
											elbow_r: [[-180, -120], [-5, 180]],
										},
									},
								],
							},
						],
					},
				},
				{
					id: 'unlimited',
					name: 'Not limited',
				},
			],
		},
		poseLimitingLegs: {
			type: 'typed',
			name: 'Body posing limits: Legs',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'default',
					name: 'Default',
					default: true,
					properties: {
						poseLimits: {
							options: [
								{
									legs: {
										pose: ['standing', 'kneeling'],
									},
									bones: {
										leg_l: [[-100, 80]],
										leg_r: [[-100, 80]],
									},
								},
								{
									legs: {
										pose: 'sitting',
									},
									bones: {
										leg_l: [[-50, 50]],
										leg_r: [[-50, 50]],
									},
								},
							],
						},
					},
				},
				{
					id: 'unlimited',
					name: 'Not limited',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Echo', 'Jomshir', 'ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'Echo',
				editedBy: 'Jomshir',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
