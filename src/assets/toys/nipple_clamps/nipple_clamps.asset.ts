DefineAsset({
	name: 'Nipple Clamps',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		clamps: {
			name: 'Clamps',
			default: '#FFFFFF',
		},
		chainWeights: {
			name: 'Chain/Weights',
			default: '#FFFFFF',
		},
	},
	preview: 'clamps_n_preview.png',
	attributes: {
		provides: [
			'Toy',
			'Breast_item',
			'Breast_nipple',
		],
	},
	modules: {
		clampAddons: {
			type: 'typed',
			name: 'Clamp Addons',
			variants: [
				{
					id: 'none',
					name: 'No Addon',
					default: true,
				},
				{
					id: 'ring',
					name: 'Attached Ring',
				},
				{
					id: 'chain',
					name: 'Connecting Chain',
				},
				{
					id: 'weights1',
					name: 'One Weight',
				},
				{
					id: 'weights2',
					name: 'Two Weights',
				},
				{
					id: 'weights3',
					name: 'Three Weights',
				},
				{
					id: 'weights4',
					name: 'Four Weights',
				},
				{
					id: 'weights5',
					name: 'Five Weights',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER attached ITEM_ASSET_NAME to both of TARGET_CHARACTER_DYNAMIC_POSSESSIVE nipples.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE nipples.',
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
