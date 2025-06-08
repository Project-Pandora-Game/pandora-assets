DefineAsset({
	name: 'Game Controller',
	size: 'small',
	graphics: 'graphics.json',
	// size:180, y:630, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
		requires: [
			'!Hand_restricting_cover',
		],
	},
	poseLimits: {
		arms: {
			position: 'front',
			rotation: 'forward',
			fingers: 'spread',
		},
		bones: {
			arm_l: 66,
			arm_r: 66,
			elbow_l: 50,
			elbow_r: 50,
		},
		armsOrder: {
			upper: 'left',
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'image',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/otrXQ',
				copyrightHolder: 'Tidominer',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
