DefineAsset({
	name: 'E-stim Pads',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		breast_pads: {
			name: 'Pads',
			default: '#FF5EE3',
		},
		crotch_pads: {
			name: 'Pads',
			default: '#f9f7f7',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-20, -60, 0],
	},
	// size:350, y:423, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
		],
	},
	modules: {
		breast_pads: {
			type: 'typed',
			name: 'Breasts',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'left',
					name: 'Left',
					properties: {
						attributes: {
							provides: ['Left_breast_pad_estim_node'],
						},
					},
				},
				{
					id: 'right',
					name: 'Right',
					properties: {
						attributes: {
							provides: ['Right_breast_pad_estim_node'],
						},
					},
				},
				{
					id: 'both',
					name: 'Both',
					properties: {
						attributes: {
							provides: ['Left_breast_pad_estim_node', 'Right_breast_pad_estim_node'],
						},
					},
				},
			],
		},
		crotch_pads: {
			type: 'typed',
			name: 'Crotch',
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
						attributes: {
							provides: ['Crotch_pad_estim_node'],
						},
					},
				},
			],
		},
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
