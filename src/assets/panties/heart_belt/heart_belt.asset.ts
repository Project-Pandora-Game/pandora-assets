DefineAsset({
	name: 'Heart Belt',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Belt',
			default: '#CDCDCD',
		},
		{
			name: 'Heart Plate',
			default: '#ECECEC',
		},
		{
			name: 'Crotch Plate',
			default: '#CDCDCD',
		},
		{
			name: 'Lock',
			default: '#D5D5D5',
		},
	],
	attributes: [
		'Restraint',
		'Chastity',
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockAddRemove: true,
			},
		},
		lockPlate: {
			type: 'lockSlot',
			name: 'Lock for crotch plate',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockModules: ['crotchPlate'],
			},
		},
		crotchPlate: {
			type: 'typed',
			name: 'Crotch Plate',
			variants: [
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
					blockSlots: ['vagina'],
					occupies: ['outsideVaginaArea_1'],
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Nythaleath <54818651+Nythaleath@users.noreply.github.com>',
		credits: ['Nythaleath'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Nythaleath',
				editedBy: 'Nythaleath',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
