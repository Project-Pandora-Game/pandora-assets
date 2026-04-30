DefineBodypart({
	name: 'Elf Ears',
	bodypart: 'ears',
	graphics: 'graphics.json',
	colorization: {
		skin: {
			name: 'Skin',
			group: 'skin',
		},
	},
	// size:250, y:176, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Fantasy',
			'Ears',
			'Fantasy_ears',
		],
	},
	modules: {
		colorGroupHair: {
			type: 'typed',
			name: 'Same skin color as base body',
			variants: [
				{
					id: 'no',
					name: 'No',
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						overrideColorKey: ['skin'],
					},
					default: true,
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['Alyx'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Alyx',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
