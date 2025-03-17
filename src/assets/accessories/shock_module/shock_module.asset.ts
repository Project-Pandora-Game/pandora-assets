DefineAsset({
	name: 'Shock Module',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		module: {
			name: 'Module',
			default: '#666666',
		},
		buttons: {
			name: 'Buttons',
			default: '#AAAAAA',
		},
	},
	// size:120, y:336, centered
	preview: 'preview.png',
	attributes: {
		provides: ['Accessory'],
		requires: [
			'Collar',
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
