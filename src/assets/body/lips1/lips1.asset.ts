DefineAsset({
	name: 'Lips 1',
	size: 'bodypart',
	bodypart: 'lips',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Lips',
			default: '#FCB6B4',
		},
	],
	attributes: [
		'Mouth',
	],
	modules: {
		mouth: {
			type: 'typed',
			name: 'Mouth expressions',
			expression: 'Mouth',
			variants: [
				{
					id: 'neutral',
					name: 'Neutral',
					default: true,
				},
				{
					id: 'serious',
					name: 'Serious',
				},
				{
					id: 'smile',
					name: 'Faint Smile',
				},
				{
					id: 'big',
					name: 'Big Smile',
				},
				{
					id: 'grin',
					name: 'Grinning',
				},
				{
					id: 'happy',
					name: 'Happy',
				},
				{
					id: 'laugh',
					name: 'Open',
					attributes: [
						'Mouth_open_wide',
						'Mouth_open_teeth',
					],
				},
				{
					id: 'open',
					name: 'Open Wide',
					attributes: ['Mouth_open_wide'],
				},
				{
					id: 'tongue',
					name: 'Tongue Out',
					attributes: [
						'Mouth_tongue_out',
						'Mouth_open_wide',
					],
				},
				{
					id: 'tongueLong',
					name: 'Tongue Out Fully',
					attributes: [
						'Mouth_tongue_out',
						'Mouth_open_wide',
					],
				},
				{
					id: 'pout',
					name: 'Pouting',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
