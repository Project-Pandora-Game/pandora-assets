DefineAsset({
	name: 'Ruler',
	size: 'small',
	graphics: 'graphics.json',
	// size:400, y:280, X:0
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
					id: 'held_r',
					name: 'Right',
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
					id: 'held_l',
					name: 'Left',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: ['up', 'down'],
							},
						},
					},
				},
			],
		},
		rulerType: {
			type: 'typed',
			name: 'Ruler Type',
			variants: [
				{
					id: 'metal',
					name: 'Metal',
				},
				{
					id: 'acryl',
					name: 'Acryl',
				},
				{
					id: 'wood',
					name: 'Wood',
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
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'ruler',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
