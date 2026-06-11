DefineAsset({
	name: 'Anal beads',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		toy: {
			name: 'Toy',
			default: '#000000',
		},
		shine: {
			name: 'Shine',
			default: '#ffffff',
		},
	},
	/*roomDeployment: {
		autoDeployRelativePosition: [-200, -60, 0],
	},*/
	// size:180, y:418, centered
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Toy',
			'Anus_item',
		],
	},
	modules: {
		beads_count: {
			type: 'typed',
			name: 'Beads Count',
			variants: [
				{
					id: 'c4',
					name: '4',
					default: true,
				},
				{
					id: 'c6',
					name: '6',
				},
				{
					id: 'c8',
					name: '8',
					default: true,
				},
			],
		},
		beads_inserted: {
			type: 'typed',
			name: 'Beads nserted',
			variants: [
				{
					id: 'i1',
					name: '1',
					default: true,
				},
				{
					id: 'i2',
					name: '2',
				},
				{
					id: 'i3',
					name: '3',
				},
				{
					id: 'i4',
					name: '4',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER inserted ITEM_ASSET_NAME into TARGET_CHARACTER_DYNAMIC_POSSESSIVE ass.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE ass.',
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
