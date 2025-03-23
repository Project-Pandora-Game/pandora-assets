DefineAsset({
	name: 'Eye Patch',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		patch: {
			name: 'Eye Patch',
			default: '#202020',
		},
	},
	// size:150, y:550, X:0
	preview: null, // 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	effects: {
		blind: 4,
	},
	modules: {
		direction: {
			type: 'typed',
			name: 'Direction',
			variants: [
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER places ITEM_ASSET_NAME on TARGET_CHARACTER_DYNAMIC_POSSESSIVE.',
		actionRemove: 'SOURCE_CHARACTER removes ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'eye patch',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
