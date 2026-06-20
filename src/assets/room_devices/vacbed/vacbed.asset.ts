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
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[21, 60]],
									elbow_l: [[-155, -125]],
									arm_r: [[21, 60]],
									elbow_r: [[-155, -125]]
								},
							},
							{
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[0, 20]],
									elbow_l: [[-125, -100]],
									arm_r: [[0, 20]],
									elbow_r: [[-125, -100]]
								},
							},
							{
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[-40, 0]],
									elbow_l: [[-95, -85]],
									arm_r: [[-40, 0]],
									elbow_r: [[-95, -85]]
								},
							},
							{
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[21, 40]],
									elbow_l: [[65, 160]],
									arm_r: [[21, 40]],
									elbow_r: [[65, 160]]
								},
							},
							{
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[41, 60]],
									elbow_l: [[45, 160]],
									arm_r: [[41, 60]],
									elbow_r: [[45, 160]]
								},
							},
							{
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[61, 80]],
									elbow_l: [[0, 160]],
									arm_r: [[61, 80]],
									elbow_r: [[0, 160]]
								},
							},
							{
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[81, 100]],
									elbow_l: [[-155, -135]],
									arm_r: [[81, 100]],
									elbow_r: [[-155, -135]]
								},
							},
							{
								arms: {
									position: 'back',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],
									arm_l: [[101, 145]],
									elbow_l: [[-155, 160]],
									arm_r: [[101, 145]],
									elbow_r: [[-155, 160]]
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
