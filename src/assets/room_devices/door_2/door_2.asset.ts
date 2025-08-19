DefineRoomDeviceAsset({
	name: 'Door 2',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		door: {
			name: 'Door',
			default: '#D9B88E',
		},
		knob: {
			name: 'Knob',
			default: '#999999',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'preview.png',
	slots: {},
	modules: {},
	pivot: {
		x: 390,
		y: 1358,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'door_2.png',
			colorizationKey: 'door',
		},
		{
			type: 'sprite',
			image: 'door_2_knob.png',
			colorizationKey: 'knob',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/6VKAQ',
				copyrightHolder: 'witnessk',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
