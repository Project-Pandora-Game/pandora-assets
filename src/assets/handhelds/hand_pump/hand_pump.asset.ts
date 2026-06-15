DefineAsset({
	name: 'Hand Pump',
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
			'Handheld',
		],
		requires: [
			'!Hand_restricting_cover',
		],
	},
	modules: {
		handUsage_r: {
			type: 'typed',
			name: 'Held in right hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'down',
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Held in left hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'down',
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
					default: true,

				},
			],
		},
		breats_r: {
			type: 'typed',
			name: 'Attached to right breast',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		breats_l: {
			type: 'typed',
			name: 'Attached to left breast',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		fillLevel: {
			type: 'typed',
			name: 'Current fill level',
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
		actionAdd: 'SOURCE_CHARACTER used ITEM_ASSET_NAME on TARGET_CHARACTER.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'lotion',
				source: 'Self-Made',
				copyrightHolder: 'Tom',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-NoModify-v1-or-later',
			},
		],
	},
});
