DefineAsset({
	name: 'Steel Toe Cuffs',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		cuffs: {
			name: 'Cuffs',
			default: '#7B8E94',
		},
	},
	// size:160, y:1200, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
		],
		requires: [
			'!Footwear',
		],
	},
	poseLimits: {
		options: [
			{
				legs: { pose: ['standing', 'sitting'] },
				bones: {
					leg_l: 2,
					leg_r: 2,
					tiptoeing: 0,
				},
			},
			{
				legs: { pose: 'kneeling' },
				bones: {
					leg_l: 3,
					leg_r: 3,
					tiptoeing: 0,
				},
			},
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
