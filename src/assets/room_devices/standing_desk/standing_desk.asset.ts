DefineRoomDeviceAsset({
	name: 'Standing Desk',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		desk: {
			name: 'Desk',
			default: '#965441',
		},
	},
	staticAttributes: ['Furniture'],
	preview: 'preview.png',
	slots: {
		character_slot_under: {
			name: 'Kneeling under the desk',
			asset: {
				name: 'Standing Desk',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_r: [[-65, 65]],
						leg_l: [[-65, 65]],
						character_rotation: [[-15, 15]],
					},
					legs: {
						pose: 'kneeling',
					},
				},
			},
		},
	},
	modules: {
		hole: {
			type: 'typed',
			name: 'Hole in desk back',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Covered',
				},
			],
		},
	},
	pivot: {
		x: 560,
		y: 1290,
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
				source: 'https://skfb.ly/oxyut',
				copyrightHolder: 'Nat',
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
