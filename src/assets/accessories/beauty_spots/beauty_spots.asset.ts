DefineAsset({
	name: 'Beauty Spots',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		nails: {
			name: 'Spots',
			default: '#202020',
		},
	},
	// size:150, y:550, X:0
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		eyes: {
			type: 'typed',
			name: 'Eyes',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
					default: true,
				},
			],
		},
		lips: {
			type: 'typed',
			name: 'Lips',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
					default: true,
				},
			],
		},
		chin: {
			type: 'typed',
			name: 'Chin',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
					default: true,
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER applies ITEM_ASSET_NAME to TARGET_CHARACTER_DYNAMIC_POSSESSIVE.',
		actionRemove: 'SOURCE_CHARACTER wipes ITEM_ASSET_NAME away from TARGET_CHARACTER_DYNAMIC_POSSESSIVE.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'beauty_spots',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
