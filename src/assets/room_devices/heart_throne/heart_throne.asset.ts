DefineRoomDeviceAsset({
	name: 'Heart Throne',
	size: 'huge',
	colorization: {
		cushion: {
			name: 'Cushion',
			default: '#E34F4F',
		},
	},
	slots: {
		character_slot_sitting: {
			name: 'Sitting on the throne',
			asset: {
				name: 'Heart Throne',
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
			name: 'Kneeling before the throne',
			asset: {
				name: 'Heart Throne',
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
		x: 357,
		y: 1220,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'queen_throne.png',
		},
		{
			type: 'sprite',
			image: 'queen_throne_cushion.png',
			colorizationKey: 'cushion',
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting',
			characterPosition: {
				offsetX: 0,
				offsetY: 180,
				relativeScale: 1.2,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_kneeling',
			characterPosition: {
				offsetX: 0,
				offsetY: 460,
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
				source: 'https://skfb.ly/onA7I',
				copyrightHolder: 'smian',
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
