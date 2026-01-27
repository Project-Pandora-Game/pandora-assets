DefineAsset({
	name: 'Shoulder Bag',
	size: 'large',
	graphics: 'graphics.json',
	colorization: {
		handbag: {
			name: 'Shoulder bag',
			default: '#FFD1D6',
		},
		straps: {
			name: 'Straps',
			default: '#FFD1D6',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-125, -100, 0],
	},
	// size:450, y:358, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		content: {
			type: 'storage',
			name: 'Bag contents',
			maxCount: 10,
			maxAcceptedSize: 'medium',
		},
		lock: {
			type: 'lockSlot',
			name: 'Bag zipper lock',
			lockedProperties: {
				blockModules: ['content'],
			},
		},
	},
	storageModule: 'content',
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
				source: 'https://skfb.ly/oM6rP',
				copyrightHolder: 'kane_sk06',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
