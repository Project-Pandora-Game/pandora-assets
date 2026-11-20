DefineAsset({
	name: 'Syringe',
	size: 'small',
	graphics: 'graphics.json',
	// size:175, y:350, X:0
	preview: 'preview.png',
	colorization: {
		fluids: {
			name: 'Fluids',
			default: '#83E4FFC7',
			minAlpha: 0,
		},
	},
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
								fingers: 'spread',
								rotation: ['forward', 'backward'],
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
								fingers: 'spread',
								rotation: ['forward', 'backward'],
							},
						},
					},
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
