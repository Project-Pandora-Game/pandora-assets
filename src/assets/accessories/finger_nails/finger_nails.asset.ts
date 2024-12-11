DefineAsset({
	name: 'Artificial finger nails',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		nails: {
			name: 'Nails',
			default: '#AC0909',
		},
	},
	// size:150, y:550, X:0
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
			'Hand_item',
		],
		requires: [
			'!Hand_cover',
		],
	},
	modules: {
		/** Add various types as modules later */
		type: {
			type: 'typed',
			name: 'Nail design',
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER attaches ITEM_ASSET_NAME to TARGET_CHARACTER_DYNAMIC_POSSESSIVE.',
		actionRemove: 'SOURCE_CHARACTER carefully removes ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'nails',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
