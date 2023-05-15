DefineRoomDeviceAsset({
	name: 'White chair',
	size: 'huge',
	colorization: {
		chair: {
			name: 'chair',
			default: '#ffffff',
		},
	},
	slots: {
		character_slot_sitting: {
			name: 'Sitting on the chair',
			asset: {
				name: 'White chair',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 180,
						kneeling: 0,
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
					},
				},
			},
		},
		character_slot_kneeling: {
			name: 'Kneeling before the chair',
			asset: {
				name: 'White chair',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 0,
						kneeling: 180,
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
					},
				},
			},
		},
	},
	pivot: {
		x: 188,
		y: 775,
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
				offsetY: 280,
				relativeScale: 1.2,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_kneeling',
			characterPosition: {
				offsetX: 0,
				offsetY: 560,
				relativeScale: 1.22,
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
