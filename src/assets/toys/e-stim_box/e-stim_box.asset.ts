DefineAsset({
	name: 'E-stim Box',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		belt: {
			name: 'Belt',
			default: '#444444',
			minAlpha: 0,
		},
		box_base: {
			name: 'Box',
			default: '#000000',
		},
		box_details: {
			name: 'Box Details',
			default: '#c4c100',
		},
		box_leds: {
			name: 'Leds',
			default: '#2FD300',
		},
		wires: {
			name: 'Wires',
			default: '#ffffff',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-20, -60, 0],
	},
	// size:100, y:597, x: 497
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
		],
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Power Box Position',
			variants: [
				{
					id: 'right',
					name: 'Right Side',
				},
				{
					id: 'left',
					name: 'Left Side',
					default: true,
				},
			],
		},
		power: {
			type: 'typed',
			name: 'Power Led Indicator',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'power_a',
					name: 'Output A',
				},
				{
					id: 'power_b',
					name: 'Output B',
				},
				{
					id: 'power_ab',
					name: 'Output A+B',
				},
			],
		},
		power_level: {
			type: 'typed',
			name: 'Power Level',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'low',
					name: 'Low',
				},
				{
					id: 'mid',
					name: 'Medium',
				},
				{
					id: 'high',
					name: 'High',
				},
			],
		},
		output_a: {
			type: 'typed',
			name: 'Wires Output A',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
					properties: {
						stateFlags: {
							provides: ['none_a'],
						},
					},
				},
				{
					id: 'cage',
					name: 'Cage',
					properties: {
						attributes: {
							requires: ['Chastity_cage_estim_node'],
						},
						stateFlags: {
							provides: ['cage_a'],
						},
					},
				},
				{
					id: 'nipple_clamps',
					name: 'Nipple Clamps',
					properties: {
						attributes: {
							requires: ['Nipple_clamps_estim_node'],
						},
						stateFlags: {
							provides: ['nipple_clamps_a'],
						},
					},
				},
				{
					id: 'breast_pad_left',
					name: 'Left Breast Pad',
					properties: {
						attributes: {
							requires: ['Left_breast_pad_estim_node'],
						},
						stateFlags: {
							provides: ['left_breast_pad_a'],
						},
					},
				},
				{
					id: 'breast_pad_right',
					name: 'Right Breast Pad',
					properties: {
						attributes: {
							requires: ['Right_breast_pad_estim_node'],
						},
						stateFlags: {
							provides: ['right_breast_pad_a'],
						},
					},
				},
				{
					id: 'crotch',
					name: 'Crotch Pad',
					properties: {
						attributes: {
							requires: ['Crotch_pad_estim_node'],
						},
						stateFlags: {
							provides: ['crotch_pad_a'],
						},
					},
				},
			],
		},
		output_b: {
			type: 'typed',
			name: 'Wires Output B',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
					properties: {
						stateFlags: {
							provides: ['none_b'],
						},
					},
				},
				{
					id: 'cage',
					name: 'Cage',
					properties: {
						attributes: {
							requires: ['Chastity_cage_estim_node'],
						},
						stateFlags: {
							provides: ['cage_b'],
						},
					},
				},
				{
					id: 'nipple_clamps',
					name: 'Nipple Clamps',
					properties: {
						attributes: {
							requires: ['Nipple_clamps_estim_node'],
						},
						stateFlags: {
							provides: ['nipple_clamps_b'],
						},
					},
				},
				{
					id: 'breast_pad_left',
					name: 'Left Breast Pad',
					properties: {
						attributes: {
							requires: ['Left_breast_pad_estim_node'],
						},
						stateFlags: {
							provides: ['left_breast_pad_b'],
						},
					},
				},
				{
					id: 'breast_pad_right',
					name: 'Right Breast Pad',
					properties: {
						attributes: {
							requires: ['Right_breast_pad_estim_node'],
						},
						stateFlags: {
							provides: ['right_breast_pad_b'],
						},
					},
				},
				{
					id: 'crotch',
					name: 'Crotch Pad',
					properties: {
						attributes: {
							requires: ['Crotch_pad_estim_node'],
						},
						stateFlags: {
							provides: ['crotch_pad_b'],
						},
					},
				},
			],
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['cage_a', 'cage_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Cage already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['nipple_clamps_a', 'nipple_clamps_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Nipple Clamps already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['left_breast_pad_a', 'left_breast_pad_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Left Breast Pad already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['right_breast_pad_a', 'right_breast_pad_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Right Breast Pad already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['nipple_clamps_a', 'left_breast_pad_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Nipples already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['nipple_clamps_a', 'right_breast_pad_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Nipples already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['nipple_clamps_b', 'left_breast_pad_a'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Nipples already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['nipple_clamps_b', 'right_breast_pad_a'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Nipples already attached to power box',
					},
				},
			},
		},
		{
			requiredFlags: ['crotch_pad_a', 'crotch_pad_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Crotch Pad already attached to power box',
					},
				},
			},
		},
	],
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
