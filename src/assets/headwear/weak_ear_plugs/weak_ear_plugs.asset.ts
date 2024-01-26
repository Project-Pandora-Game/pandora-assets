DefineAsset({
	name: 'Weak Ear Plugs',
	size: 'small',
	graphics: undefined,
	colorization: undefined,
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_ears',
			'Ear_item',
			'Ear_insert',
		],
		requires: [
			'!Ear_cover',
			'!Ear_insert',
		],
	},
	effects: {
		distortion: 6,
		frequencyLoss: 5,
		vowelLoss: 2,
		middleLoss: 2,

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
