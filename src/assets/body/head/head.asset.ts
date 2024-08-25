DefineAsset({
	name: 'Head',
	size: 'bodypart',
	bodypart: 'head',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skin: {
			name: null,
			group: 'skin',
		},
	},
	preview: null,
	attributes: {
		provides: [
			'Head_base',
		],
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Echo'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
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
