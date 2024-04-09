DefineRoomDeviceAsset({
	name: 'Hook Bar With Tools',
	size: 'large',
	colorization: {
		bar: {
			name: 'Bar',
			default: '#D7A67E',
		},
		hooks: {
			name: 'Hooks',
			default: '#EEEEEE',
		},
		paddle: {
			name: 'Paddle',
			default: '#D7A67E',
		},
		flogger: {
			name: 'Flogger',
			default: '#856192',
		},
		heart: {
			name: 'Heart Crop',
			default: '#4A4A4A',
		},
		cane: {
			name: 'Cane',
			default: '#FBEDDD',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'hookbar_preview.png',
	slots: {},
	modules: {
		crop: {
			type: 'typed',
			name: 'Long Crop',
			variants: [
				{
					id: 'on',
					name: 'Hanging on the hook',
					default: true,
				},
				{
					id: 'off',
					name: 'Not present',
				},
			],
		},
		paddle: {
			type: 'typed',
			name: 'Paddle',
			variants: [
				{
					id: 'on',
					name: 'Hanging on the hook',
					default: true,
				},
				{
					id: 'off',
					name: 'Not present',
				},
			],
		},
		flogger: {
			type: 'typed',
			name: 'Flogger',
			variants: [
				{
					id: 'on',
					name: 'Hanging on the hook',
					default: true,
				},
				{
					id: 'off',
					name: 'Not present',
				},
			],
		},
		heart: {
			type: 'typed',
			name: 'Heart Crop',
			variants: [
				{
					id: 'on',
					name: 'Hanging on the hook',
					default: true,
				},
				{
					id: 'off',
					name: 'Not present',
				},
			],
		},
		cane: {
			type: 'typed',
			name: 'Cane',
			variants: [
				{
					id: 'on',
					name: 'Hanging on the hook',
					default: true,
				},
				{
					id: 'off',
					name: 'Not present',
				},
			],
		},
	},
	pivot: {
		x: 420,
		y: 1040,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'hookbar_bar.png',
			imageOverrides: [],
			colorizationKey: 'bar',
		},
		{
			type: 'sprite',
			image: 'hookbar_hooks.png',
			imageOverrides: [],
			colorizationKey: 'hooks',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot1.png',
					condition: [
						[
							{
								module: 'crop',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: undefined,
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot2a.png',
					condition: [
						[
							{
								module: 'paddle',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: undefined,
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot2b.png',
					condition: [
						[
							{
								module: 'paddle',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: 'paddle',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot3a.png',
					condition: [
						[
							{
								module: 'flogger',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: undefined,
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot3b.png',
					condition: [
						[
							{
								module: 'flogger',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: 'flogger',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot4a.png',
					condition: [
						[
							{
								module: 'heart',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: undefined,
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot4b.png',
					condition: [
						[
							{
								module: 'heart',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: 'heart',
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot5a.png',
					condition: [
						[
							{
								module: 'cane',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: undefined,
		},
		{
			type: 'sprite',
			image: '',
			imageOverrides: [
				{
					image: 'hookbar_slot5b.png',
					condition: [
						[
							{
								module: 'cane',
								operator: '=',
								value: 'on',
							},
						],
					],
				},
			],
			colorizationKey: 'cane',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'pictures',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
