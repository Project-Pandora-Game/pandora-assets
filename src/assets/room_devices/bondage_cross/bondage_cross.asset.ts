DefineRoomDeviceAsset({
	name: 'Bondage Cross',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#482814',
		},
		cross: {
			name: 'Cross',
			default: '#701A1A',
		},
		chains: {
			name: 'Chains',
			default: '#DDDDDD',
		},
		nails: {
			name: 'Nails',
			default: '#1E1E1D',
		},
	},
	slots: {
		character_tied: {
			name: 'Chained to bondage cross',
			asset: {
				name: 'Chained to bondage cross',
				size: 'huge',
				poseLimits: {
					bones: {
						arm_l: -44,
						arm_r: -44,
						elbow_l: -21,
						elbow_r: -21,
						leg_r: -29.8,
						leg_l: -29.6,
					},
					legs: 'standing',
				},
				requirements: [
					'Wrist_cuffs',
					'Ankle_cuffs',
				],
				effects: {
					blockHands: true,
				},
			},
		},
	},
	pivot: {
		x: 442,
		y: 1178,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'frame.png',
			colorizationKey: 'frame',
		},
		{
			type: 'sprite',
			image: 'cross.png',
			colorizationKey: 'cross',
		},
		{
			type: 'sprite',
			image: 'nails.png',
			colorizationKey: 'nails',
		},
		{
			type: 'sprite',
			image: 'chains.png',
			colorizationKey: 'chains',
		},
		{
			type: 'slot',
			slot: 'character_tied',
			characterPosition: {
				offsetX: 1,
				offsetY: 75,
				disablePoseOffset: true,
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
				source: 'https://skfb.ly/69UTM',
				copyrightHolder: '4lepy',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'wood texture',
				source: 'https://www.freepik.com/free-photo/white-wooden-texture-flooring-background_3475742.htm',
				copyrightHolder: 'rawpixel.com on Freepik',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-Reserved',
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
