DefineRoomDeviceAsset({
	name: 'Sign Board',
	size: 'medium',
	colorization: {
		sign: {
			name: 'Sign',
			default: '#FFC591',
		},
		post: {
			name: 'Post',
			default: '#FFC591',
			migrateFrom: ['sign'],
		},
		text: {
			name: 'Text',
			default: '#222222',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'preview.png',
	slots: {},
	modules: {
		signType: {
			type: 'typed',
			name: 'Mount type',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'post',
					name: 'With Post',
					default: true,
				},
				{
					id: 'wall',
					name: 'Wall mounted',
				},
			],
		},
		text: {
			type: 'text',
			name: 'Text',
			staticConfig: {
				slotName: null,
			},
		},
	},
	pivot: {
		x: 185,
		y: 400,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia, Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/6Vzo6',
				copyrightHolder: 'Carlos',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
