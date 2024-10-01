DefineAsset({
	name: 'Nurse Dress',
	size: 'medium',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		dress: {
			name: 'Dress',
			default: '#EEEEEE',
		},
		emblem: {
			name: null,
			default: '#000000',
			// We do not allow coloring this layer, as coloring it red can allow users to create symbol protected by the Geneva convention
			// (both the red cross and red crescent)
			// name: 'Emblem',
			// default: '#E60005',
		},
	},
	// size:450, y:380, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
		],
	},
	modules: {
		emblemType: {
			type: 'typed',
			name: 'Emblem type',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'cross',
					name: 'Cross',
				},
				{
					id: 'moon',
					name: 'Moon',
				},
			],
		},
		dressStateFront: {
			type: 'typed',
			name: 'Dress State Front',
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
		dressStateBack: {
			type: 'typed',
			name: 'Dress State Back',
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
				part: 'dress',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
