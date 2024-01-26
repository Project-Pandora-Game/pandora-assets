DefineAsset({
	name: 'Strong Ear Plugs',
	size: 'small',
	graphics: undefined,
	colorization: undefined,
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_ears',
		],
	},
	effects: {
		distortion: 8,
		frequencyLoss: 8,
		vowelLoss: 7,
		middleLoss: 6,

	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'preview',
				source: 'https://flic.kr/p/by2VHL',
				copyrightHolder: 'Paul Hudson',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
