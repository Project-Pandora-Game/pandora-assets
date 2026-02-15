DefineBodypart({
	name: 'Tramp stamp',
	bodypart: 'bodymarks',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		tattoo: {
			name: 'Tattoo',
			default: '#404040',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Body_tattoo',
			'Body_texture',
		],
	},
	modules: {
		tattooType: {
			type: 'typed',
			name: 'Tattoo Type',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'ts_band',
					name: 'Band',
				},
				{
					id: 'ts_butterfly',
					name: 'Butterfly',
				},
				{
					id: 'ts_wide',
					name: 'Ornament',
				},
				{
					id: 'ts_wings',
					name: 'Wings',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
