DefineAsset({
	name: 'Vibe Wand',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		wand: {
			name: 'Wand',
			default: '#F2EEEE',
		},
		handle: {
			name: 'Handle',
			default: '#FEFCFC',
		},
	},
	attributes: [
		'Handheld',
	],
	requirements: [
		'!Mittens',
	],
	modules: {
		handUsage_r: {
			type: 'typed',
			name: 'Held in right hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					poseLimits: {
						rightArm: {
							fingers: 'fist',
						},
						options: [
							{
								rightArm: {
									rotation: 'up',
								},
							},
							{
								rightArm: {
									rotation: 'down',
								},
							},
						],
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
					poseLimits: {
						leftArm: {
							fingers: 'fist',
						},
						options: [
							{
								leftArm: {
									rotation: 'up',
								},
							},
							{
								leftArm: {
									rotation: 'down',
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
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER picked up the vibe wand.',
		actionRemove: 'SOURCE_CHARACTER put down the vibe wand.',
		actionAddCreate: 'SOURCE_CHARACTER took out a vibe wand.',
		actionRemoveDelete: 'SOURCE_CHARACTER put the vibe wand away.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
