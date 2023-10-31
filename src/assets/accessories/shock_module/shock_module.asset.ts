DefineAsset({
	name: 'Shock Module',
	size: 'small',
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
	attributes: ['Accessory'],
	requirements: [
		'Collar',
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
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
				license: 'Pandora-Use-Only',
			},
		],
	},
});
