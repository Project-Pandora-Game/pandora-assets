DefineRoomDeviceAsset({
	name: 'Spanking machine',
	size: 'large',
	colorization: {
		stand: {
			name: 'Stand',
			default: '#34393A',
		},
		pole: {
			name: 'Stand inner pole',
			default: '#CECCCA',
		},
		connector: {
			name: 'Stand-body joint',
			default: '#222222',
		},
		body: {
			name: 'Main body',
			default: '#961345ff',
		},
		arm: {
			name: 'Arm',
			default: '#B2BFBD',
		},
		tool: {
			name: 'Arm implement',
			default: '#333333',
		},
	},
	staticAttributes: ['Play_furniture'],
	preview: 'preview.png',
	slots: {},
	modules: {
		state: {
			type: 'typed',
			name: 'State',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'ready',
					name: 'Ready',
					default: true,
				},
				{
					id: 'swing',
					name: 'Mid-swing',
				},
				{
					id: 'swing_rest',
					name: 'After swing',
				},
			],
		},
		height: {
			type: 'typed',
			name: 'Height',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'default',
					name: 'Collapsed',
					default: true,
				},
				{
					id: 'butt',
					name: 'Butt',
				},
				{
					id: 'breasts',
					name: 'Breasts / Back',
				},
			],
		},
		orientation: {
			type: 'typed',
			name: 'Orientation',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'front',
					name: 'Normal',
					default: true,
				},
				{
					id: 'back',
					name: 'Reverse',
				},
			],
		},
		tool: {
			type: 'typed',
			name: 'Tool',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'slapper',
					name: 'Slapper',
					default: true,
				},
				{
					id: 'whip',
					name: 'Whip',
				},
			],
		},
	},
	pivot: { x: 0, y: 0 },
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
