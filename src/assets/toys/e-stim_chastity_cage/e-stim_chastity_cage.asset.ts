DefineAsset({
	name: 'E-stim Chastity Cage',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		cage: {
			name: 'Cage',
			default: '#AE1313A8',
			minAlpha: 0.8,

		},
		ring: {
			name: 'Ring',
			default: '#000000',
		},
		nodes: {
			name: 'Nodes',
			default: '#161616a8',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-20, -60, 0],
	},
	// size:80, y:707, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
			'Restraint',
			'Chastity',
		],
		requires: ['Penis'],
	},
	modules: {
		nodes: {
			type: 'typed',
			name: 'Nodes',
			variants: [
				{
					id: 'no',
					name: 'No',
				},
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					properties: {
						attributes: {
							provides: ['Chastity_cage_estim_node'],
						},
					},
				},
			],
		},
		cage: {
			type: 'typed',
			name: 'Cage',
			variants: [
				{
					id: 'no',
					name: 'Ring',
					default: true,
				},
				{
					id: 'attached',
					name: 'Cage Attached',
					properties: {
						attributes: {
							requires: ['Penis_flaccid'],
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['nodes', 'cage'],
			},
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
