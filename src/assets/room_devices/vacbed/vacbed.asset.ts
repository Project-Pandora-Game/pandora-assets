DefineRoomDeviceAsset({
	name: 'Vacbed',
	size: 'huge',
	preview: null,//'preview.png',
	colorization: {
		latex: {
			name: 'Latex (Transparency)',
			default: '#2F2F2F',
			minAlpha: 0.2,
		},
		latexOpaque: {
			name: 'Latex (Opaque)',
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
				poseLimits: [
					{
						options: [
							{
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: 0,
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],

									arm_l: [[21, 60]],
									elbow_l: [[-160, -125]]
								},
							},
							{
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: 0,
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],

									arm_l: [[0, 20]],
									elbow_l: [[-125, -100]]
								},
							},
							{
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: 0,
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],

									arm_l: [[-40, 0]],
									elbow_l: [[-95, -85]]
								},
							},
						],
					},
				],
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
			name: 'Latex Material',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'opaque',
					name: 'Opaque',
					default: true,
				},
				{
					id: 'transparent',
					name: 'Transparent',
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
