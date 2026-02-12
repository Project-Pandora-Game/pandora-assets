import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Nech Chain',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		chain: {
			name: 'Chain',
			default: '#FFFFFF',
		},
		lock_body: {
			name: 'Lock Body',
			default: '#FFED83',
		},
		lock_shackle: {
			name: 'Lock Shackle',
			default: '#DDDDDD',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Collar',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		chainTightness: {
			type: 'typed',
			name: 'Tightness',
			variants: [
				{
					id: 'tn_normal',
					name: 'Normal',
					properties: {
						attributes: {
							provides: [
								'Collar_front_ring',
							],
						},
					},
					default: true,
				},
				{
					id: 'tn_tight',
					name: 'Tight',
					properties: {
						attributes: {
							provides: [
								'Collar_front_ring',
							],
						},
					},
				},
			],
		},
		chainVertical: {
			type: 'typed',
			name: 'Hanging End',
			variants: [
				{
					id: 'vert_yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'vert_no',
					name: 'No',
				},
			],
		},
	},
	ownership: {
		// Note: Chain of "chain leash" re-used with permission from ClaudiaMia.
		responsibleContributor: 'ObliqueBC <obliquebc@hotmail.com>',
		credits: ['Oblique'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Oblique ',
				editedBy: 'Oblique',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
