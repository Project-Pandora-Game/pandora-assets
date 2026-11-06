DefineAsset({
	name: 'Hairbrush',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		brush: {
			name: 'Brush',
			default: '#DBB68F',
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
		handUsage: {
			type: 'typed',
			name: 'Held in hand',
			variants: [
				{
					id: 'held_r',
					name: 'Right',
					default: true,
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
		variant: {
			type: 'typed',
			name: 'Brush variant',
			variants: [
				{
					id: 'front',
					name: 'Front',
					default: true,
				},
				{
					id: 'back',
					name: 'Back',
				},
				{
					id: 'inwards',
					name: 'Inwards',
				},
				{
					id: 'outwards',
					name: 'Outwards',
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
				part: 'brush',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
