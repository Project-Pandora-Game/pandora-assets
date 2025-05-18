DefineAsset({
	name: 'Books',
	size: 'medium',
	graphics: 'graphics.json',
	// size:250, y:600, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
			'Handheld',
		],
	},
	modules: {
		read: {
			type: 'typed',
			name: 'Reading',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						poseLimits: [
							{
								legs: {
									pose: 'sitting',
								},
							},
						],
					},
				},
				{
					id: 'no',
					name: 'No',
					default: true,
				},
			],
		},
		balance: {
			type: 'typed',
			name: 'Head balancing',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
				},
				{
					id: 'no',
					name: 'No',
					default: true,
				},
			],
		},
		handUsage_r: {
			type: 'typed',
			name: 'Holding in right hand',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'spread',
								rotation: 'backward',
							},
						},
					},
				},
				{
					id: 'two',
					name: 'Two',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'spread',
								rotation: 'backward',
							},
						},
					},
				},
				{
					id: 'three',
					name: 'Three',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'spread',
								rotation: 'backward',
							},
						},
					},
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Holding in left hand',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'spread',
								rotation: 'backward',
							},
						},
					},
				},
				{
					id: 'two',
					name: 'Two',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'spread',
								rotation: 'backward',
							},
						},
					},
				},
				{
					id: 'three',
					name: 'Three',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'spread',
								rotation: 'backward',
							},
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
