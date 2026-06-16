DefineAsset({
	name: 'Anal Beads',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		toy: {
			name: 'Anal Beads',
			default: '#272727',
		},
		shine: {
			name: 'Shine',
			default: '#ffffff',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [50, -60, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
			'Anus_item',
			'Anus_insert',
			'Anus_insert_deep',
			'Anus_protruding',
		],
		requires: ['!Anus_cover'],
	},
	modules: {
		beads_count: {
			type: 'typed',
			name: 'Beads Count',
			variants: [
				{
					id: 'c4',
					name: '4',
					default: true,
				},
				{
					id: 'c6',
					name: '6',
					properties: {
						stateFlags: {
							provides: ['beads6'],
						},
					},
				},
				{
					id: 'c8',
					name: '8',
					properties: {
						stateFlags: {
							provides: ['beads6', 'beads8'],
						},
					},
				},
			],
		},
		beads_inserted: {
			type: 'typed',
			name: 'Beads Inserted',
			variants: [
				{
					id: 'i0',
					name: 'None',
					default: true,
				},
				{
					id: 'i1',
					name: '1',
				},
				{
					id: 'i2',
					name: '2',
				},
				{
					id: 'i3',
					name: '3',
				},
				{
					id: 'i4',
					name: '4',
				},
				{
					id: 'i5',
					name: '5',
					properties: {
						stateFlags: {
							requires: {
								beads6: 'Not enough beads',
							},
						},
					},
				},
				{
					id: 'i6',
					name: '6',
					properties: {
						stateFlags: {
							requires: {
								beads6: 'Not enough beads',
							},
						},
					},
				},
				{
					id: 'i7',
					name: '7',
					properties: {
						stateFlags: {
							requires: {
								beads8: 'Not enough beads',
							},
						},
					},
				},
				{
					id: 'i8',
					name: '8',
					properties: {
						stateFlags: {
							requires: {
								beads8: 'Not enough beads',
							},
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
