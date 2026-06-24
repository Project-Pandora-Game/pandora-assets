DefineAsset({
	name: 'Breast Pump',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		handle: {
			name: 'Handle',
			default: '#C191D6',
		},
		junction: {
			name: 'Junction',
			default: '#C191D6',
		},
		topLid: {
			name: 'Top Lid',
			default: '#C191D6',
		},
		glass: {
			name: 'Glass',
			default: '#1BB6FF00',
			minAlpha: 0.8,
		},
		bottomLid: {
			name: 'Bottom Lid',
			default: '#C191D6',
		},
		suctionCup: {
			name: 'Suction Cup',
			default: '#FFB570',
			minAlpha: 0.2,
		},
		fluid: {
			name: 'Fluid',
			default: '#FFE599',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [350, -50, 0],
	},
	// size:175, y:400, X:655
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
		],
	},
	modules: {
		attached: {
			type: 'typed',
			name: 'Attached to right breast',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'breast_r',
					name: 'Right',
					properties: {
						attributes: {
							provides: ['Breast_cover'],
							requires: ['!Breast_cover'],
						},
					},
				},
				{
					id: 'breast_l',
					name: 'Left',
					properties: {
						attributes: {
							provides: ['Breast_cover'],
							requires: ['!Breast_cover'],
						},
					},
				},
			],
		},
		fillLevel: {
			type: 'typed',
			name: 'Current right pump`s fill level',
			variants: [
				{
					id: 'empty',
					name: 'Empty',
					default: true,
				},
				{
					id: 'slightly',
					name: 'Slightly',
				},
				{
					id: 'almost',
					name: 'Almost full',
				},
				{
					id: 'full',
					name: 'Filled',
				},
			],
		},
		fillLevel_l: {
			type: 'typed',
			name: 'Current left pump`s fill level',
			variants: [
				{
					id: 'empty',
					name: 'Empty',
					default: true,
				},
				{
					id: 'slightly',
					name: 'Slightly',
				},
				{
					id: 'almost',
					name: 'Almost full',
				},
				{
					id: 'full',
					name: 'Filled',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER attached ITEM_ASSET_NAME on TARGET_CHARACTER_POSESSIVE breast.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_POSESSIVE breast.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'pump',
				source: 'Self-Made',
				copyrightHolder: 'Tom',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-NoModify-v1-or-later',
			},
		],
	},
});
