DefineRoomDeviceAsset({
	name: 'Wooden Double Bed',
	size: 'huge',
	colorization: {
		bed_frame: {
			name: 'Bed frame',
			default: '#FFE8E9',
		},
		mattress: {
			name: 'Mattress',
			default: '#ffffff',
		},
		pillows: {
			name: 'Pillows',
			default: '#ffffff',
		},
		ropes_left: {
			name: 'Left ropes',
			default: '#666666',
		},
		ropes_right: {
			name: 'Right ropes',
			default: '#ffffff',
		},
	},
	slots: {
		character_slot_left: {
			name: 'Bed - left side',
			asset: {
				name: 'Wooden Double Bed left side',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 0,
					},
				},
			},
		},
		character_slot_middle: {
			name: 'Bed - center',
			asset: {
				name: 'Wooden Double Bed center',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 0,
					},
				},
			},
		},
		character_slot_right: {
			name: 'Bed - right side',
			asset: {
				name: 'Wooden Double Bed right side',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 0,
					},
				},
			},
		},
		character_slot_left_tied: {
			name: 'Tied to bed - left side',
			asset: {
				name: 'Tied to bed left side',
				size: 'huge',
				poseLimits: {
					bones: {
						arm_l: -25,
						arm_r: -27,
						elbow_l: -60,
						elbow_r: -58,
						sitting: 0,
						kneeling: 0,
						leg_r: -18,
						leg_l: -18,
					},
				},
				effects: {
					blockHands: true,
					// blockRoomLeave: true,
				},
				graphics: 'ropes_left.json',
			},
		},
		character_slot_right_tied: {
			name: 'Tied to bed - right side',
			asset: {
				name: 'Tied to bed right side',
				size: 'huge',
				poseLimits: {
					bones: {
						arm_l: -25,
						arm_r: -25,
						elbow_l: -60,
						elbow_r: -60,
						sitting: 0,
						kneeling: 0,
						leg_r: -18,
						leg_l: -18,
					},
				},
				effects: {
					blockHands: true,
					// blockRoomLeave: true,
				},
				graphics: 'ropes_right.json',
			},
		},
	},
	pivot: {
		x: 920,
		y: 1750,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'wooden_double_bed_base.png',
			colorizationKey: 'bed_frame',
		},
		{
			type: 'sprite',
			image: 'wooden_double_bed_mattress.png',
			colorizationKey: 'mattress',
		},
		{
			type: 'sprite',
			image: 'wooden_double_bed_pillows.png',
			colorizationKey: 'pillows',
		},
		{
			type: 'slot',
			slot: 'character_slot_left_tied',
			characterPosition: {
				offsetX: -288,
				offsetY: 10,
				disablePoseOffset: true,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_right_tied',
			characterPosition: {
				offsetX: 288,
				offsetY: 10,
				disablePoseOffset: true,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_left',
			characterPosition: {
				offsetX: -284,
				offsetY: 30,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_middle',
			characterPosition: {
				offsetX: 0,
				offsetY: 30,
			},
		},
		{
			type: 'slot',
			slot: 'character_slot_right',
			characterPosition: {
				offsetX: 284,
				offsetY: 30,
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
				part: 'used 3D model - base',
				source: 'https://skfb.ly/69vZE',
				copyrightHolder: 'Francesco Coldesina',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - mattress',
				source: 'https://skfb.ly/6RO9F',
				copyrightHolder: 'mspurlock1',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - pillow',
				source: 'https://skfb.ly/6ZJuI',
				copyrightHolder: 'Susidko Studio',
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
