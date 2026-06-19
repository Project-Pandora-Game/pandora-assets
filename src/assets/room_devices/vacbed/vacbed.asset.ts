DefineRoomDeviceAsset({
	name: 'Vacbed',
	size: 'huge',
	preview: null,//'preview.png',
	colorization: {
		latex: {
			name: 'Latex',
			default: '#2F2F2F',
			minAlpha: 0.2,
		},
		frame: {
			name: 'Frame',
			default: '#a2a2a2'
		},
		shine: {
			name: 'Shine',
			default: '#FFFFFF87',
			minAlpha: 0.2,
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		inside: {
			name: 'Inside',
			asset: {
				name: 'Vacbed',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'standing',
					},
					bones: {
						character_rotation: 0,
					},
				},
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Character Position',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							inside: {
								poseLimits: {
									view: 'front',
								},
							},
						},
					},
				},
				{
					id: 'back',
					name: 'Back-facing',
					properties: {
						slotProperties: {
							inside: {
								poseLimits: {
									view: 'back',
								},
							},
						},
					},
				},
			],
		},
		mode: {
			type: 'typed',
			name: 'Character Position',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'opaque',
					name: 'Opaque',
					default: true,
				},
				{
					id: 'translucent',
					name: 'Translucent',
				},
			],
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
