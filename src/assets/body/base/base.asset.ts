import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Base body',
	size: 'bodypart',
	bodypart: 'base',
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
			breasts: [[-180, -180], [-150, -150], [-70, -70], [0, 0], [100, 100], [180, 180]],
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
									legs: ['standing', 'kneeling'],
									bones: {
										leg_l: [[-100, 80]],
										leg_r: [[-100, 80]],
									},
								},
								{
									legs: ['sitting'],
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
		reusePolicy: 'Ask first',
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
