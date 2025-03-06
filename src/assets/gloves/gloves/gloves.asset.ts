DefineAsset({
	name: 'Gloves',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		gloves: {
			name: 'Gloves',
			default: '#FFFFFF',
			minAlpha: 0.3,
		},
		shine: {
			name: 'Shine',
			default: '#FFFFFF00',
			minAlpha: 0,
		},
		pattern: {
			name: 'Pattern',
			default: '#202020',
		},
	},
	// size: 300, y: 380, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Gloves',
			'Hand_cover',
		],
		covers: [
			'Hand_item',
			'Hand_cover',
		],
	},
	modules: {
		length: {
			type: 'typed',
			name: 'Glove length',
			variants: [
				{
					id: 'long',
					name: 'Opera gloves',
					default: true,
				},
				{
					id: 'medium',
					name: 'Regular gloves',
				},
				{
					id: 'short',
					name: 'Short gloves',
				},
			],
		},
		pattern: {
			type: 'typed',
			name: 'Pattern',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'cow',
					name: 'Cow print',
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
				part: 'gloves',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
