DefineAsset({
	name: 'Dildo (handheld)',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		tip: {
			name: 'Tip',
			default: '#FFC1EB',
		},
		grip: {
			name: 'Grip',
			default: '#3F3A44',
		},
	},
	// size:220, y:503, X:116
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
		credits: ['Jomshir', 'ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Jomshir98',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
