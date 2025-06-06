DefineRoomDeviceAsset({
	name: 'Heart Throne',
	size: 'huge',
	colorization: {
		cushion: {
			name: 'Cushion',
			default: '#E34F4F',
		},
		gem: {
			name: 'Gem',
			default: '#C42626',
		},
	},
	staticAttributes: ['Furniture'],
	preview: 'throne_preview.png',
	slots: {
		character_slot_sitting: {
			name: 'Sitting on the throne',
			asset: {
				name: 'Heart Throne',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-30, 30]],
					},
					legs: {
						pose: 'sitting',
					},
					view: 'front',
				},
				posePresets: [
					{
						name: 'Armrests, spread fingers',
						bones: {
							arm_r: 70,
							arm_l: 70,
							elbow_r: -32,
							elbow_l: -32,
						},
						optional: {
							arms: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
					{
						name: 'Armrests, fists',
						bones: {
							arm_r: 70,
							arm_l: 70,
							elbow_r: -32,
							elbow_l: -32,
						},
						optional: {
							arms: {
								position: 'front',
								rotation: 'forward',
								fingers: 'fist',
							},
						},
					},
				],
			},
		},
		character_slot_kneeling: {
			name: 'Kneeling before the throne',
			asset: {
				name: 'Heart Throne',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-30, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 0,
					},
					legs: {
						pose: 'kneeling',
					},
				},
			},
		},
	},
	pivot: {
		x: 357,
		y: 1100,
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
			type: 'sprite',
			image: 'queen_throne_gem.png',
			colorizationKey: 'gem',
		},
		{
			type: 'slot',
			slot: 'character_slot_sitting',
			characterPosition: {
				offsetX: 0,
				offsetY: 25,
				relativeScale: 1.1,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_kneeling',
			characterPosition: {
				offsetX: 0,
				offsetY: 240,
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
