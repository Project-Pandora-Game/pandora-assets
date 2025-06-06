DefineAsset({
	name: 'Laptop',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		laptop: {
			name: 'Laptop',
			default: '#FFFFFF',
		},
		logo: {
			name: 'Logo',
			default: '#5D5D5D',
		},
	},
	// size:300, y:550, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	poseLimits: {
		legs: {
			pose: 'sitting',
		},
	},
	modules: {
		logoType: {
			type: 'typed',
			name: 'Logo Type',
			variants: [
				{
					id: 'no',
					name: 'No Logo',
					default: true,
				},
				{
					id: 'bdsm',
					name: 'BDSM',
				},
				{
					id: 'towel',
					name: 'T&T',
				},
				{
					id: 'cuffs',
					name: 'Cuffs',
				},
				{
					id: 'gag',
					name: 'Ball-gag',
				},
				{
					id: 'whip',
					name: 'Whips',
				},
				{
					id: 'heart',
					name: 'Heart',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
