DefineAsset({
	name: 'Metal Chastity Cage',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cage: {
			name: 'Cage',
			default: '#FFFFFF',
		},
	},
	attributes: [
		'Restraint',
		'Chastity',
	],
	requirements: ['Penis'],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedEffects: {
				blockAddRemove: true,
				blockModules: ['cage'],
			},
		},
		cage: {
			type: 'typed',
			name: 'Cage',
			variants: [
				{
					id: 'ring',
					name: 'Ring',
					default: true,
				},
				{
					id: 'matte',
					name: 'Matte Cage',
					requirements: ['Penis_flaccid'],
				},
				{
					id: 'chrome',
					name: 'Chrome Cage',
					requirements: ['Penis_flaccid'],
				},
			],
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
