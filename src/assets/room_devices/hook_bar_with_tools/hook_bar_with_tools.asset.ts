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
		content: {
			type: 'storage',
			name: 'Items on the hooks',
			staticConfig: { slotName: null },
			maxCount: 5,
			maxAcceptedSize: 'medium',
		},
		crop: {
			type: 'typed',
			name: 'Long Crop',
			staticConfig: { slotName: null },
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
			staticConfig: { slotName: null },
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
			staticConfig: { slotName: null },
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
			staticConfig: { slotName: null },
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
			staticConfig: { slotName: null },
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
	storageModule: 'content',
	pivot: {
		x: 420,
		y: 1040,
	},
	graphics: 'roomDeviceGraphics.json',
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
