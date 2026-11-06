DefineAsset({
	name: 'Breast Pump (handheld)',
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
		handUsage: {
			type: 'typed',
			name: 'Held in hand',
			variants: [
				{
					id: 'hand_r',
					name: 'Right',
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
					id: 'hand_l',
					name: 'Left',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'down',
							},
						},
					},
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
