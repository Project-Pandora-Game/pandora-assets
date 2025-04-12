DefineAsset({
	name: 'Boy Briefs',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		panties: {
			name: 'Panties',
			default: '#BBBBBB',
		},
	},
	// size:240, y:570, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Underwear',
			'Underwear_pants',
		],
	},
	modules: {
		pantiesState: {
			type: 'typed',
			name: 'Panties State',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					properties: {
						attributes: {
							provides: ['Vulva_cover'],
							hides: ['Penis'],
						},
					},
				},
				{
					id: 'knees',
					name: 'Pulled Around Knees',
					properties: {
						poseLimits: {
							bones: {
								leg_r: [[-3, 2]],
								leg_l: [[-3, 2]],
							},
						},
					},
				},
				{
					id: 'fully',
					name: 'Pulled Down Fully',
					properties: {
						poseLimits: {
							bones: {
								leg_r: [[-3, 2]],
								leg_l: [[-3, 2]],
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
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
