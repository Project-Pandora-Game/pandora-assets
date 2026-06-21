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
		mouth: {
			name: 'Mouth Breather',
			default: '#424242'
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
						view: 'front',
						options: [
							{
								arms: {
									position: 'back',
									//rotation: 'up',
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
									//rotation: 'up',
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
									//rotation: 'up',
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
									//rotation: 'up',
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
									//rotation: 'up',
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
									//rotation: 'up',
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
									//rotation: 'down',
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
									//rotation: 'down',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],

									arm_l: [[81, 100]],
									elbow_l: [[0, 160]],
									arm_r: [[81, 100]],
									elbow_r: [[0, 160]],
								},
							},
							{
								arms: {
									position: 'back',
									//rotation: 'down',
								},
								legs: {
									pose: 'standing',
								},
								bones: {
									character_rotation: [[0, 0], [180, 180]],
									leg_l: [[-18, 22]],
									leg_r: [[-18, 22]],

									arm_l: [[101, 120]],
									elbow_l: [[-15, 160]],
									arm_r: [[101, 120]],
									elbow_r: [[-15, 160]],
								},
							},
						],
					},
				],
			},
		},
	},
	modules: {
		status: {
			type: 'typed',
			name: 'Character Position',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'vaccum',
					name: 'Vaccum',
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
					properties: {
						stateFlags: {
							provides: ['opaque_material'],
						},
					},
				},
				{
					id: 'transparent',
					name: 'Transparent',
					properties: {
						stateFlags: {
							provides: ['transparent_material'],
						},
					}
				},
			],
		},
		head: {
			type: 'typed',
			name: 'Latex Material',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'encased',
					name: 'Encased',
					properties: {
						slotProperties: {
							inside: {
								attributes: {
									provides: [
										'Restraint',
										'Restraint_mouth',
										'Mouth_item',
										'Mouth_insert',
									],
									requires: [
										'Mouth_open_wide',
										'!Mouth_cover',
									],
								},
								effects: {
									lipsTouch: 9,
									jawMove: 4,
									tongueRoof: 0,
									mouthBreath: 0,
									throatBreath: 0,
									coherency: 0,
									stimulus: 2,
								},
							},
						},
						stateFlags: {
							provides: ['encased_head'],
						},
					},
				},
			],
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['encased_head', 'transparent_material'],
			properties: {
				slotProperties: {
					inside: {
						effects: {
							blurVision: 4,
						},
					},
				},
			},
		},
		{
			requiredFlags: ['encased_head', 'opaque_material'],
			properties: {
				slotProperties: {
					inside: {
						effects: {
							blind: 10,
						},
					},
				},
			},
		},
	],
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
