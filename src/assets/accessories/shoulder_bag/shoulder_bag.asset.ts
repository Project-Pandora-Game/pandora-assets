DefineAsset({
	name: 'Shoulder Bag',
	size: 'medium',
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
			maxAcceptedSize: 'small',
		},
		lock: {
			type: 'lockSlot',
			name: 'Bag zipper lock',
			lockedProperties: {
				blockModules: ['content'],
			},
		},
	},
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
				license: 'Pandora-Use-Only',
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