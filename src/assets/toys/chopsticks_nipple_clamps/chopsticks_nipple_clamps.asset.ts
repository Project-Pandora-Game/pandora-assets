DefineAsset({
	name: 'Chopsticks Nipple Clamps',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		chopsticks: {
			name: 'Chopsticks',
			default: '#EFCA7B',
		},
		strings: {
			name: 'Strings',
			default: '#8B5E00',
		},
	},
	// size:180, y:418, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
			'Breast_item',
			'Breast_nipple',
		],
	},
	modules: {
		attach: {
			type: 'typed',
			name: 'Attach on',
			variants: [
				{
					id: 'both',
					name: 'Both Nipples',
					default: true,
				},
				{
					id: 'left',
					name: 'Left Nipple',
				},
				{
					id: 'right',
					name: 'Right Nipple',
				},
			],
		},
		position: {
			type: 'typed',
			name: 'Position',
			variants: [
				{
					id: 'vertical',
					name: 'Vertical',
					default: true,
				},
				{
					id: 'horizontal',
					name: 'Horizontal',
				},
				{
					id: 'diagonal',
					name: 'Diagonal',
				},
				{
					id: 'reverse_diagonal',
					name: 'Reverse Diagonal',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER attached ITEM_ASSET_NAME to both of TARGET_CHARACTER_DYNAMIC_POSSESSIVE nipples.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE nipples.',
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
