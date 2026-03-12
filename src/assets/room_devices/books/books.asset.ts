DefineRoomDeviceAsset({
	name: 'Books',
	size: 'medium',
	requireFreeHandsToUseDefault: false,
	graphics: 'roomDeviceGraphics.json',
	colorization: {
		BookOne: {
			name: 'Book one',
			default: '#A41F1F',
		},
		StripesOne: {
			name: 'Stripes book one',
			default: '#FFF02D',
		},
		BookTwo: {
			name: 'Book two',
			default: '#42BC46',
		},
		StripesTwo: {
			name: 'Stripes book two',
			default: '#FFF02D',
		},
		BookThree: {
			name: 'Book three',
			default: '#4B6CC3',
		},
		StripesThree: {
			name: 'Stripes book three',
			default: '#FFF02D',
		},
		BookFour: {
			name: 'Book four',
			default: '#D99D74',
		},
		StripesFour: {
			name: 'Stripes book four',
			default: '#FFF02D',
		},
	},
	staticAttributes: ['Room_device'],
	slots: {},
	modules: {
		numbers: {
			type: 'typed',
			name: 'Number of Books',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'two',
					name: 'Two',
				},
				{
					id: 'three',
					name: 'Three',
				},
				{
					id: 'four',
					name: 'Four',
					default: true,
				},
			],
		},
	},
	pivot: {
		x: 250,
		y: 500,
	},
	preview: 'books_preview.png',
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'books',
				source: 'Self-Made',
				copyrightHolder: 'SandrinePDR',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
