DefineAsset({
	name: 'Locking Butt Plug',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		plug: {
			name: 'Butt Plug',
			default: '#B2B6B6',
		},
	},
	// size:225, y:675, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Anus_item',
			'Toy',
		],
	},
	modules: {
		insertion: {
			type: 'typed',
			name: 'Insertion',
			variants: [
				{
					id: 'out',
					name: 'Outside',
					default: true,
					properties: {
						attributes: {
							provides: ['Anus_protruding'],
							requires: [],
						},
						stateFlags: {
							provides: ['inOrOut'],
						},
					},
				},
				{
					id: 'touch',
					name: 'Touching',
					properties: {
						attributes: {
							provides: ['Anus_protruding', 'Anus_insert'],
							requires: ['!Anus_cover'],
						},
					},
				},
				{
					id: 'half',
					name: 'Half Inside',
					properties: {
						attributes: {
							provides: ['Anus_protruding', 'Anus_insert', 'Anus_insert_deep'],
							requires: ['!Anus_cover'],
						},
					},
				},
				{
					id: 'in',
					name: 'Deep Inside',
					properties: {
						attributes: {
							provides: ['Anus_insert', 'Anus_insert_deep'],
							requires: ['!Anus_cover'],
						},
						stateFlags: {
							provides: ['inOrOut', 'in'],
						},
					},
				},
			],
		},
		state: {
			type: 'typed',
			name: 'State',
			variants: [
				{
					id: 'closed',
					name: 'Collapsed',
					default: true,
				},
				{
					id: 'open',
					name: 'Expanded',
					properties: {
						blockModules: ['insertion'],
						stateFlags: {
							provides: ['expanded'],
							requires: {
								inOrOut: 'The item must be fully outside or fully inserted to be expanded',
							},
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockModules: ['state'],
				stateFlags: {
					requires: {
						expanded: 'The item can only be locked while expanded',
					},
				},
			},
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['in', 'expanded'],
			properties: {
				blockAddRemove: true,
			},
		},
	],
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
