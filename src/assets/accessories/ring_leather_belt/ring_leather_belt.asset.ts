DefineAsset({
	name: 'Ring Leather Belt',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		belt: {
			name: 'Belt',
			default: '#FFFFFF',
		},
		ring: {
			name: 'Ring',
			default: '#FFE79F',
		},
		rivets: {
			name: 'Belt rivets',
			default: '#DDA947',
		},
	},
	// size:250, y:575, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oAyPo',
				copyrightHolder: 'MalahovaVladislava',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
