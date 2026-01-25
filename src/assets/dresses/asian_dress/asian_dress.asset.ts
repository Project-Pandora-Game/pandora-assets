DefineAsset({
	name: 'Asian Dress',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		dress: {
			name: 'Dress',
			default: '#E54D99',
		},
		pattern: {
			name: 'Pattern',
			default: '#EEEEEE',
		},
	},
	modules: {
		pattern:
		{
			type: 'typed',
			name: 'Pattern',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'dragon',
					name: 'Dragon',
				},
				{
					id: 'lotus',
					name: 'Lotus',
				},
			],
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-160, -140, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
		],
	},
	poseLimits: {
		bones: {
			leg_l: [[-30, 20]],
			leg_r: [[-30, 20]],
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
			{
				part: 'Dragon-Pattern',
				copyrightHolder: 'Image by https://freesvg.org',
				source: 'https://freesvg.org/japanese-dragon-vector-image',
				license: 'CC0',
				editedBy: 'Sandrine',
			},
			{
				part: 'Lotus-Pattern',
				copyrightHolder: 'Image by https://freesvg.org',
				source: 'https://freesvg.org/lotus-silhouette',
				license: 'CC0',
				editedBy: 'Sandrine',
			},
		],
	},
});
