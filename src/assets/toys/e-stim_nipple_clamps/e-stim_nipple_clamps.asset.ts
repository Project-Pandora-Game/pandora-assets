DefineAsset({
	name: 'E-stim Nipple Clamps',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		clamps: {
			name: 'Clamps',
			default: '#FFFFFF',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [50, -60, 0],
	},
	// size:220, y:376, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
			'Nipple_clamps_estim_node',
		],
	},

	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
