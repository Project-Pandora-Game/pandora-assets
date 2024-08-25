DefineAsset({
	name: 'Lips 2',
	size: 'bodypart',
	bodypart: 'lips',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		lips: {
			name: 'Lips',
			default: '#FCB6B4',
		},
	},
	// size:200, y:195, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Mouth',
		],
	},
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
					properties: {
						attributes: {
							provides: [
								'Mouth_open_wide',
								'Mouth_open_teeth',
							],
						},
					},
				},
				{
					id: 'open',
					name: 'Open Wide',
					properties: {
						attributes: {
							provides: ['Mouth_open_wide'],
						},
					},
				},
				{
					id: 'tongue',
					name: 'Tongue Out',
					properties: {
						attributes: {
							provides: [
								'Mouth_tongue_out',
								'Mouth_open_wide',
							],
						},
					},
				},
				{
					id: 'tongueLong',
					name: 'Tongue Out Fully',
					properties: {
						attributes: {
							provides: [
								'Mouth_tongue_out',
								'Mouth_open_wide',
							],
						},
					},
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
		credits: ['Echo'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Echo',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
