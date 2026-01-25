DefineAsset({
	name: 'Tank Top',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		tank_top: {
			name: 'Tank Top',
			default: '#6E8991',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-90, -125, 0],
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
		type: {
			type: 'typed',
			name: 'Tank Top Type',
			variants: [
				{
					id: 'regular',
					name: 'Regular',
					default: true,
				},
				{
					id: 'cropped',
					name: 'Cropped',
				},
				{
					id: 'cropped_more',
					name: 'Cropped More',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Freyja <247626786+freyja-veritas@users.noreply.github.com>',
		credits: ['Freyja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'tank top',
				source: 'Self-Made',
				copyrightHolder: 'Freyja',
				editedBy: 'Freyja',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

