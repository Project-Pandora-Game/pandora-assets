DefineRoomDeviceAsset({
	name: 'Ishidaki Board',
	size: 'large',
	preview: 'preview.png',
	colorization: {
		soroban: {
			name: 'Board',
			default: '#AC784E',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		over_board: {
			name: 'Kneeling over board',
			asset: {
				name: 'Ishidaki Board',
				size: 'large',
				poseLimits: {
					legs: {
						pose: 'kneeling',
					},
					bones: {
						leg_l: [[-12, 5]],
						leg_r: [[-12, 5]],
						character_rotation: 0,
					},
				},
			},
		},
	},
	graphics: 'roomDeviceGraphics.json',
	pivot: {
		x: 0,
		y: 0,
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
