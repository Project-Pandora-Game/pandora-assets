DefineRoomDeviceAsset({
	name: 'Pet Bowl',
	size: 'medium',
	colorization: {
		bowl: {
			name: 'Pet Bowl',
			default: '#FFFFFF',
		},
		interior: {
			name: 'Pet Bowl Interior',
			default: '#FEF9F3',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'pet_bowl_preview.png',
	slots: {},
	modules: {
		size: {
			type: 'typed',
			name: 'Bowl size',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'large',
					name: 'Large',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
			],
		},
	},
	pivot: {
		x: 125,
		y: 50,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'pet_bowl.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],

					],
				},
				{
					image: 'pet_bowl.png@187x72',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 40, y: 30 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'bowl',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'pet_bowl_interior.png',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'large',
							},
						],

					],
				},
				{
					image: 'pet_bowl_interior.png@187x72',
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],

					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: 40, y: 30 },
					condition: [
						[
							{
								module: 'size',
								operator: '=',
								value: 'small',
							},
						],
					],
				},
			],
			colorizationKey: 'interior',
		},
	],
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Bowl',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
