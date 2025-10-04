DefineRoomDeviceAsset({
	name: 'Door 1',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		door: {
			name: 'Door',
			default: '#82553D',
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
		x: 530,
		y: 1400,
	},
	graphics: 'roomDeviceGraphics.json',
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
				source: 'https://skfb.ly/oVRQx',
				copyrightHolder: 'Mehdi Shahsavan',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
