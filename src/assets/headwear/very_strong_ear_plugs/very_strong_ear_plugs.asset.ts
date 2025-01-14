DefineAsset({
	name: 'Very Strong Ear Plugs',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: undefined,
	colorization: undefined,
	assetPreferenceDefault: 'maybe',
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
		distortion: 10,
		frequencyLoss: 10,
		vowelLoss: 10,
		middleLoss: 10,
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
