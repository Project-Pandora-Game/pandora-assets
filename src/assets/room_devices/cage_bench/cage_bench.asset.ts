DefineRoomDeviceAsset({
	name: 'Cage Bench',
	size: 'huge',
	colorization: {
		cage: {
			name: 'Cage Bench',
			default: '#C9CBCA',
		},
		cushion: {
			name: 'Bench cushion',
			default: '#800020',
		},
	},
	slots: {
		character_slot_inside: {
			name: 'Lying inside',
			asset: {
				name: 'Cage Bench',
				size: 'huge',
				poseLimits: {
					bones: {
						arm_l: [[74, 82]],
						arm_r: [[74, 82]],
						elbow_l: [[22, 109]],
						elbow_r: [[22, 109]],
						leg_r: [[-10, 30]],
						leg_l: [[-10, 30]],
						character_rotation: 90,
					},
					legs: 'kneeling',
				},
			},
		},
	},
	modules: {
		door: {
			type: 'typed',
			name: 'Door',
			variants: [
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						blockSlotsEnterLeave: ['character_slot_inside'],
					},
				},
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Door lock',
			lockedProperties: {
				blockModules: ['door'],
			},
		},
		storage: {
			type: 'storage',
			name: `Cage's floor`,
			maxAcceptedSize: 'large',
			maxCount: 2,
		},
	},
	pivot: {
		x: 529,
		y: 680,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'bench_open.png',
			colorizationKey: 'cage',
		},
		{
			type: 'sprite',
			image: 'bench_closed.png',
			imageOverrides: [
				{
					image: '',
					condition: [
						[
							{
								module: 'door',
								operator: '=',
								value: 'open',
							},
						],
					],
				},
			],
			colorizationKey: 'cage',
		},
		{
			type: 'slot',
			slot: 'character_slot_inside',
			characterPosition: {
				offsetX: 0,
				offsetY: -140,
				disablePoseOffset: true,
				pivot: {
					x: 129,
					y: 960,
				},
			},
		},
		{
			type: 'sprite',
			image: 'bench_overlay.png',
			colorizationKey: 'cage',
		},
		{
			type: 'sprite',
			image: 'bench_cushion.png',
			colorizationKey: 'cushion',
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
				source: 'https://skfb.ly/oLr8J',
				copyrightHolder: 'Samuel Francis Johnson (Oneironauticus)',
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
