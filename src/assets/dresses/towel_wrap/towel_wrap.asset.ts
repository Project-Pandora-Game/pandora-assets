DefineAsset({
	name: 'Towel Wrap',
	size: 'medium',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		towel: {
			name: 'Towel',
			default: '#222222',
		},
	},
	// size:370, y:556, centered
	// preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
		],
	},
	modules: {
		towelStateFront: {
			type: 'typed',
			name: 'Towel State Front',
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
		towelStateBack: {
			type: 'typed',
			name: 'Towel State Back',
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
				part: 'towel',
				source: 'Self-Made',
				copyrightHolder: 'Tajo',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
