DefineRoomDeviceAsset({
	name: 'Sign Post',
	size: 'medium',
	colorization: {
		sign: {
			name: 'Sign Post',
			default: '#FFC591',
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
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'sign_post.png',
			colorizationKey: 'sign',
		},
		{
			type: 'text',
			dataModule: 'text',
			colorizationKey: 'text',
			fontSize: 48,
			offset: { x: 20, y: 70 },
			size: { width: 333, height: 150 },
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
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
