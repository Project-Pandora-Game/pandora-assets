DefineAsset({
	name: 'Crop',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		cane: {
			name: 'Crop',
			default: '#4A4A4A',
		},
		handle: {
			name: 'Handle',
			default: '#3D293B',
		},
	},
	// size:410, y:248, X:0
	preview: 'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
		requires: [
			'!Mittens',
		],
	},
	modules: {
		type: {
			type: 'typed',
			name: 'Crop Tip Type',
			variants: [
				{
					id: 'wide',
					name: 'Wide',
					default: true,
				},
				{
					id: 'long',
					name: 'Long',
				},
				{
					id: 'heart',
					name: 'Heart-shaped',
				},
			],
		},
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
		actionAdd: 'SOURCE_CHARACTER picked up the crop.',
		actionRemove: 'SOURCE_CHARACTER put down the crop.',
		actionAddCreate: 'SOURCE_CHARACTER took out a crop.',
		actionRemoveDelete: 'SOURCE_CHARACTER put the crop away.',
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
