DefineAsset({
	name: 'Heart Belt',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		belt: {
			name: 'Belt',
			default: '#CDCDCD',
		},
		heartPlate: {
			name: 'Heart Plate',
			default: '#ECECEC',
		},
		crotchPlate: {
			name: 'Crotch Plate',
			default: '#CDCDCD',
		},
		lock: {
			name: 'Lock',
			default: '#D5D5D5',
		},
	},
	// size:240, y:569, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Chastity',
			'Belt_chainable',
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
		lockPlate: {
			type: 'lockSlot',
			name: 'Lock for crotch plate',
			lockedProperties: {
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
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
							],
							covers: [
								'Vulva_item',
							],
							requires: [
								'!Crotch_protruding',
							],
							hides: [
								'Penis',
								'Toy_clamps_genital',
							],
						},
					},
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
