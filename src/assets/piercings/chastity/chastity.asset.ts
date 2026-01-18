DefineAsset({
	name: 'Chastity Piercings',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		LabiaPiercings: {
			name: 'Labia Piercings',
			default: '#959595',
		},
		ChastityShield: {
			name: 'Vulva Cover Shield',
			default: '#989898',

		},
	},
	attributes: {
		provides: [
			'Restraint',
			'Chastity',
			'Piercing',
			'Vulva_cover',
		],
		requires: [
			'!Penis',
			'Vulva',
			'!Vulva_spread',
			'!Crotch_protruding',
		],
		covers: [
			'Vulva_item',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock for Labia Piercings',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		lockShield: {
			type: 'lockSlot',
			name: 'Lock for Vulva Cover Shield',
			lockedProperties: {
				blockModules: ['vulvaShield'],
			},
		},
		vulvaShield: {
			type: 'typed',
			name: 'Vulva Cover Shield',
			variants: [
				{
					id: 'open',
					name: 'No',
					default: true,
				},
				{
					id: 'covered',
					name: 'Yes',
				},
			],
		},
	},
	preview: 'preview.png',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
