DefineRoomDeviceAsset({
	name: 'White Chair',
	size: 'huge',
	colorization: {
		chair: {
			name: 'Chair',
			default: '#ffffff',
		},
	},
	staticAttributes: ['Furniture'],
	preview: 'chair_preview.png',
	slots: {
		character_slot_sitting: {
			name: 'Sitting on the chair',
			asset: {
				name: 'White Chair',
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
			},
		},
		character_slot_kneeling: {
			name: 'Kneeling before the chair',
			asset: {
				name: 'White Chair',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-60, 60]],
						leg_l: [[-60, 60]],
						character_rotation: [[-30, 30]],
					},
					legs: {
						pose: 'kneeling',
					},
				},
			},
		},
	},
	pivot: {
		x: 188,
		y: 750,
	},
	graphics: 'roomDeviceGraphics.json',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
