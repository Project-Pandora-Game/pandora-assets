import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Fluffy Shoes',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		shoes: {
			name: 'Shoes',
			default: '#ED6DF8',
		},
		belts: {
			name: 'Straps',
			default: '#F39EFA',
		},
	},
	// size:240, y:1143, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Footwear',
			'Restraint',
			'Restraint_legs',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},

		},
		inlays: {
			type: 'typed',
			name: 'Uncomfortable inlay soles put inside the shoe',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'none',
					name: 'No inlays',
					default: true,
				},
				{
					id: 'light',
					name: 'Insoles preventing standing',
					properties: {
						poseLimits: {
							options: [
								{
									legs: {
										pose: ['sitting', 'kneeling'],
									},
								},
								{
									bones: {
										character_rotation: [[-180, -55], [55, 180]],
									},
								},
							],
						},
					},
				},
				{
					id: 'strict',
					name: 'Stricter insoles preventing standing and sitting',
					properties: {
						poseLimits: {
							options: [
								{
									legs: {
										pose: 'kneeling',
									},
								},
								{
									bones: {
										character_rotation: [[-180, -55], [55, 180]],
									},
								},
							],
						},
					},
				},
			],
		},
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
			{
				part: 'texture',
				source: 'https://www.flickr.com/photos/littledebbie11/4208552830/',
				copyrightHolder: 'Debs (ò‿ó)♪',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
