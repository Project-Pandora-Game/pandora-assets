DefineRoomDeviceAsset({
	name: 'Folding Screen',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#965441',
		},
		paper: {
			name: 'Wallpaper',
			default: '#ffffffE3',
			minAlpha: 0,
		},
		overlay: {
			name: 'Dominant wallpaper color',
			default: '#204a6b80',
			minAlpha: 0,
		},
	},
	staticAttributes: ['Floor', 'Wall'],
	preview: 'screen_preview.png',
	slots: {},
	pivot: {
		x: 720,
		y: 1230,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'screen_frame.png',
			colorizationKey: 'frame',
		},
		{
			type: 'sprite',
			image: 'screen_paper.png',
			colorizationKey: 'paper',
		},
		{
			type: 'sprite',
			image: 'screen_paper_overlay.png',
			colorizationKey: 'overlay',
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
				source: 'https://skfb.ly/oBAJK',
				copyrightHolder: 'batata',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
