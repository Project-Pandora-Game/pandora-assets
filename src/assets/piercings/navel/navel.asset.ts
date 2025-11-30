import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Navel Piercing',
	size: 'small',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		piercing: {
			name: 'Piercing',
			default: '#BBBBBB',
		},
	},
	// size:150, y:550, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Piercing',
		],
		requires: [
			'!Underwear_corset',
		],
	},
	modules: {
		piercingType: {
			type: 'typed',
			name: 'Piercing Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'vertical',
					name: 'Vertical Bar',
				},
				{
					id: 'horizontal',
					name: 'Horizontal Bar',
				},
				{
					id: 'both',
					name: 'Both',
				},
				{
					id: 'ring',
					name: 'Navel Ring',
					properties: {
						attributes: {
							provides: [
								'Piercing_chainable',
							],
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Opening mechanism block',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'body',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
