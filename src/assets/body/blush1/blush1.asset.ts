DefineBodypart({
	name: 'Blush 1',
	bodypart: 'blush',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		blush: {
			name: 'Blush',
			default: '#FFFFFF',
		},
	},
	preview: null,
	attributes: {
		provides: [
			'Blush',
			'Body_texture',
		],
	},
	modules: {
		blush: {
			type: 'typed',
			name: 'Blush Strength',
			expression: 'Blush',
			variants: [
				{
					id: 'noBlush',
					name: 'None',
					default: true,
				},
				{
					id: 'faint',
					name: 'Faint',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
				{
					id: 'full',
					name: 'Full',
				},
				{
					id: 'deep',
					name: 'Deeply',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
