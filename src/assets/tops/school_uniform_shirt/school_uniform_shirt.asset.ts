DefineAsset({
	name: 'School Uniform Shirt',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		shirt: {
			name: 'Shirt',
			default: '#FFFFFF',
		},
		sweater: {
			name: 'Sweater',
			default: '#AAAAAA',
		},
		cuffs: {
			name: 'Cuffs',
			default: '#072C81',
		},
		tie: {
			name: 'Tie',
			default: '#202020',
		},
		bow: {
			name: 'Ribbon',
			default: '#FF0000',
		},
		sailor: {
			name: 'Sailor Collar',
			default: '#072C81',
		},
	},
	// size:350, y:380, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
		],
	},
	modules: {
		sleeves: {
			type: 'typed',
			name: 'Sleeves Length',
			variants: [
				{
					id: 'long',
					name: 'Long',
					default: true,
				},
				{
					id: 'short',
					name: 'Short',
				},
			],
		},
		collar: {
			type: 'typed',
			name: 'Collar Type',
			variants: [
				{
					id: 'classic',
					name: 'Classic',
					default: true,
					properties: {
						stateFlags: {
							provides: [
								'classic_collar',
							],
						},
					},
				},
				{
					id: 'sailor',
					name: 'Sailor Style',
				},
			],
		},
		sweater: {
			type: 'typed',
			name: 'With Sweater',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						stateFlags: {
							requires: {
								classic_collar: 'The sweater must only be worn with a classic collar.',
							},
						},
					},
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
