DefineAsset({
	name: 'Ears',
	size: 'bodypart',
	bodypart: 'ears',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skin: {
			name: 'Skin',
			group: 'skin',
		},
	},
	preview: null,
	attributes: {
		provides: [
			'Ears',
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
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Echo'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'Echo',
				editedBy: 'Jomshir',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
