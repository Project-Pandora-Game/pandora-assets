DefineAsset({
	name: 'Classic Corset',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		corset: {
			name: 'Corset',
			default: '#3E56AF',
		},
		buckles: {
			name: 'Buckles',
			default: '#919191',
		},
	},
	// size:300, y:459, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Restraint',
			'Restraint_torso',
			'Underwear',
			'Underwear_corset',
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
				source: 'https://skfb.ly/6TWpR',
				copyrightHolder: 'MarbleBallStudio',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
