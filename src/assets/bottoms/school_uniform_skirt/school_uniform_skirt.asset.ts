DefineAsset({
	name: 'School Uniform Skirt',
	size: 'medium',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		skirt: {
			name: 'Skirt',
			default: '#072C81',
		},
		application: {
			name: 'Application',
			default: '#FFFFFF',
		},
		tartan: {
			name: 'Tartan',
			default: '#FFFFFF00',
			minAlpha: 0.6,
		},
	},
	// size:260, y:630, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
	},
	modules: {
		pattern: {
			type: 'typed',
			name: 'Pattern',
			variants: [
				{
					id: 'plain',
					name: 'Plain',
					default: true,
				},
				{
					id: 'tartan_1',
					name: 'Tartan 1',
				},
				{
					id: 'tartan_2',
					name: 'Tartan 2',
				},
				{
					id: 'tartan_3',
					name: 'Tartan 3',
				},
			],
		},
		skirtStateFront: {
			type: 'typed',
			name: 'Skirt State Front',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'up',
					name: 'Pulled Up',
				},
			],
		},
		skirtStateBack: {
			type: 'typed',
			name: 'Skirt State Back',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'up',
					name: 'Pulled up',
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
				part: 'skirt',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
