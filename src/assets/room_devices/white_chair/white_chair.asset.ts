DefineRoomDeviceAsset({
	name: 'White Chair',
	size: 'huge',
	colorization: {
		chair: {
			name: 'Chair',
			default: '#ffffff',
		},
	},
	slots: {
		character_slot_sitting: {
			name: 'Sitting on the chair',
			asset: {
				name: 'White Chair',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 0,
					},
					legs: 'sitting',
					view: 'front',
				},
			},
		},
		character_slot_kneeling: {
			name: 'Kneeling before the chair',
			asset: {
				name: 'White Chair',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 0,
					},
					legs: 'kneeling',
				},
			},
		},
	},
	pivot: {
		x: 188,
		y: 750,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'white_chair.png',
			colorizationKey: 'chair',
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting',
			characterPosition: {
				offsetX: 0,
				offsetY: 35,
				relativeScale: 1.1,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_kneeling',
			characterPosition: {
				offsetX: 0,
				offsetY: 255,
				relativeScale: 1.16,
			},
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/ooXKL',
				copyrightHolder: 'Kuutti Siitonen',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
