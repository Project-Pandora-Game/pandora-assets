DefineAsset({
	name: 'Eyebrows 4',
	size: 'bodypart',
	bodypart: 'eyebrows',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		eyebrows: {
			name: 'Eyebrows',
			default: '#222222',
		},
	},
	// size:200, y:195, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Eyebrows',
		],
	},
	modules: {
		expression: {
			type: 'typed',
			name: 'Eyebrows expression',
			expression: 'Eyebrows expression',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'angry',
					name: 'Angry',
				},
				{
					id: 'doubting',
					name: 'Doubting',
				},
				{
					id: 'sad',
					name: 'Sad',
				},
				{
					id: 'surprised',
					name: 'Surprised',
				},
				{
					id: 'sus',
					name: 'Suspicious',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['paparebbe', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'paparebbe',
				editedBy: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
