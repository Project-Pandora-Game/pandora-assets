DefineRoomDeviceAsset({
	name: 'Pet Hut',
	size: 'huge',
	colorization: {
		outside: {
			name: 'Hut (outside)',
			default: '#EFBFA5',
		},
		inside: {
			name: 'Hut (inside)',
			default: '#D19E84',
		},
		cushion: {
			name: 'Cushion',
			default: '#89BEF0',
		},

	},
	staticAttributes: ['Furniture'],
	preview: 'preview.png',
	slots: {
		character_slot_inside: {
			name: 'Lying inside',
			asset: {
				name: 'Pet Hut',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 10]],
						leg_l: [[-30, 10]],
						character_rotation: 76,
					},
					legs: {
						pose: 'kneeling',
					},
					view: 'front',
				},
			},
		},
		character_slot_kneeling: {
			name: 'Kneeling inside',
			asset: {
				name: 'Pet Hut',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-15, 15]],
					},
					legs: {
						pose: 'kneeling',
					},
					view: 'front',
				},
			},
		},
	},
	modules: {
		ears: {
			type: 'typed',
			name: 'Hut Ears',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		storage: {
			type: 'storage',
			name: `Hut's floor`,
			staticConfig: { slotName: null },
			maxAcceptedSize: 'large',
			maxCount: 4,
		},
	},
	storageModule: 'storage',
	pivot: {
		x: 580,
		y: 1010,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'hut_back.png',
			colorizationKey: 'inside',
		},
		{
			type: 'sprite',
			image: 'hut_cushion.png',
			colorizationKey: 'cushion',
		},
		{
			type: 'slot',
			slot: 'character_slot_inside',
			characterPosition: {
				offsetX: 0,
				offsetY: -100,
				disablePoseOffset: true,
				relativeScale: 0.95,
				pivotOffset: {
					x: 120,
					y: -720,
				},
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_kneeling',
			characterPosition: {
				offsetX: 0,
				offsetY: 10,
				relativeScale: 0.98,
			},
		},
		{
			type: 'sprite',
			image: 'hut_front_ears.png',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'ears',
								operator: '=',
								value: 'no',
							},
						],
					],
				},
			],
			colorizationKey: 'outside',
		},
		{
			type: 'sprite',
			image: 'hut_front.png',
			colorizationKey: 'outside',
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
				source: 'https://skfb.ly/oH7N7',
				copyrightHolder: 'newmag2207',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
