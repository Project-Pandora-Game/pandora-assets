DefineRoomDeviceAsset({
	name: 'Small cage',
	size: 'huge',
	colorization: {
		cage: {
			name: 'Cage',
			default: '#ffffff',
		},
		cage_door: {
			name: 'Cage door',
			default: '#ffffff',
			minAlpha: 0,
		},
	},
	slots: {
		character_slot: {
			name: 'Cage',
			asset: {
				name: 'Small cage',
				size: 'huge',
				poseLimits: {
					bones: {
						sitting: 0,
						kneeling: 180,
						leg_r: [[-30, 0]],
						leg_l: [[-30, 0]],
					},
				},
			},
		},
	},
	pivot: {
		x: 950,
		y: 1400,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'small_cage.png',
			colorizationKey: 'cage',
		},
		{
			type: 'slot',
			slot: 'character_slot',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 1,
			},
		},
		{
			type: 'sprite',
			image: 'small_cage_door.png',
			colorizationKey: 'cage_door',
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
				source: 'https://skfb.ly/o7vwW',
				copyrightHolder: 'Thunder',
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
