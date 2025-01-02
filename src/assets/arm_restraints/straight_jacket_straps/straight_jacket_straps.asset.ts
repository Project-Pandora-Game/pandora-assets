DefineAsset({
	name: 'Straitjacket Straps',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		straps: {
			name: 'Straps',
			default: '#DDA07E',
		},
		buckle: {
			name: 'Buckle',
			default: '#EDDCDC',
		},
	},
	// size:310, y:368, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	poseLimits: {
		arms: {
			position: 'front',
			rotation: 'down',
		},
		bones: {
			arm_r: 80,
			arm_l: 80,
			elbow_r: 109,
			elbow_l: 109,
		},
		armsOrder: {
			upper: 'right',
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
