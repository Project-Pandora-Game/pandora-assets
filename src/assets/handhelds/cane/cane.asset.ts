DefineAsset({
	name: 'Cane',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		cane: {
			name: 'Cane',
			default: '#FBEDDD',
		},
		handle: {
			name: 'Handle',
			default: '#534848',
		},
	},
	// size:400, y:217, X:0
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
		actionAdd: 'SOURCE_CHARACTER picked up the cane.',
		actionRemove: 'SOURCE_CHARACTER put down the cane.',
		actionAddCreate: 'SOURCE_CHARACTER took out a cane.',
		actionRemoveDelete: 'SOURCE_CHARACTER put the cane away.',
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
