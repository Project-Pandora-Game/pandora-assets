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
			'!Hand_restricting_cover',
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
								rotation: ['up', 'down'],
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
								rotation: ['up', 'down'],
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
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME into TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
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
