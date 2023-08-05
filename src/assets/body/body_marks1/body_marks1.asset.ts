DefineAsset({
	name: 'Body Marks',
	size: 'bodypart',
	bodypart: 'bodymarks',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		blush: {
			name: 'Color',
			default: '#FFFFFF',
		},
	},
	attributes: ['Body_texture'],
	modules: {
		buttColor_l: {
			type: 'typed',
			name: 'Left Butt Cheek Color',
			expression: 'Left Butt Cheek Color',
			variants: [
				{
					id: 'noColor',
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
					id: 'extreme',
					name: 'Extreme',
				},
			],
		},
		buttColor_r: {
			type: 'typed',
			name: 'Right Butt Cheek Color',
			expression: 'Right Butt Cheek Color',
			variants: [
				{
					id: 'noColor',
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
					id: 'extreme',
					name: 'Extreme',
				},
			],
		},
		breastColor_l: {
			type: 'typed',
			name: 'Left Breast Color',
			expression: 'Left Breast Color',
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Colored',
				}
			],
		},
		breastColor_r: {
			type: 'typed',
			name: 'Right Breast Color',
			expression: 'Right Breast Color',
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Colored',
				}
			],
		},
		sexColor: {
			type: 'typed',
			name: 'Sex Color',
			expression: 'Sex Color',
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Colored',
				}
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
