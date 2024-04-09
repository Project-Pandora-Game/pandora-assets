DefineAsset({
	name: 'Base body',
	size: 'bodypart',
	bodypart: 'base',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		skin: {
			name: 'Skin',
			group: 'skin',
		},
		nipples: {
			name: 'Nipples',
			default: '#FED1CB',
		},
	},
	preview: null,
	poseLimits: {
		bones: {
			breasts: [[-180, -180], [-150, -150], [-70, -70], [0, 0], [100, 100], [180, 180]],
		},
	},
	attributes: {
		provides: [
			'Body_base',
		],
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Titania', 'Jomshir', 'ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'QueenTita',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
