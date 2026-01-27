DefineAsset({
	name: 'Dildo',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		tip: {
			name: 'Tip',
			default: '#FFC1EB',
		},
		cap: {
			name: 'Cap',
			default: '#3F3A44',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [0, -1, 0],
	},
	// size:250, y:650, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Vulva_item',
			'Toy',
		],
	},
	modules: {
		insertion: {
			type: 'typed',
			name: 'Penetration Depth',
			variants: [
				{
					id: 'out',
					name: 'Outside',
					default: true,
					properties: {
						attributes: {
							provides: ['Crotch_protruding'],
							requires: [],
						},
					},
				},
				{
					id: 'touch',
					name: 'Touching',
					properties: {
						attributes: {
							provides: ['Crotch_protruding', 'Vulva_insert'],
							requires: ['!Vulva_cover', 'Vulva_spread'],
						},
					},
				},
				{
					id: 'half',
					name: 'Half Inside',
					properties: {
						attributes: {
							provides: ['Crotch_protruding', 'Vulva_insert', 'Vulva_insert_deep'],
							requires: ['!Vulva_cover', 'Vulva_spread'],
						},
					},
				},
				{
					id: 'in',
					name: 'Deep Inside',
					properties: {
						attributes: {
							provides: ['Vulva_insert', 'Vulva_insert_deep'],
							requires: ['!Vulva_cover', 'Vulva_spread'],
						},
					},
				},
			],
		},
		tip: {
			type: 'typed',
			name: 'Tip type',
			variants: [
				{
					id: 'smooth',
					name: 'Smooth',
				},
				{
					id: 'tipped',
					name: 'Dildo',
					default: true,
				},
				{
					id: 'rabbit',
					name: 'Rabbit',
				},
				{
					id: 'beaded',
					name: 'Beads',
				},
			],
		},
		tip_material: {
			type: 'typed',
			name: 'Tip material',
			variants: [
				{
					id: 'rubber',
					name: 'Rubber',
					default: true,
				},
				{
					id: 'metal',
					name: 'Metal',
				},
			],
		},
		cap: {
			type: 'typed',
			name: 'Cap type',
			variants: [
				{
					id: 'small',
					name: 'Small',
					default: true,
				},
				{
					id: 'housing',
					name: 'Batteries housing',
					properties: {
						attributes: {
							provides: ['Crotch_protruding'],
						},
					},
				},
				{
					id: 'grip',
					name: 'Grip',
					properties: {
						attributes: {
							provides: ['Crotch_protruding'],
						},
					},
				},
			],
		},
		room_view: {
			type: 'typed',
			name: 'Room orientation',
			variants: [
				{
					id: 'front',
					name: 'Front side',
					default: true,
				},
				{
					id: 'back',
					name: 'Back side',
				},
			],
		},
	},
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
