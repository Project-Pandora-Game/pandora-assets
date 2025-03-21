import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Padded Blindfold',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		blindfold: {
			name: 'Blindfold',
			default: '#404040',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	// size:200, y:197, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_eyes',
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
		blinding: {
			type: 'typed',
			name: 'Blinding Strictness',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'light',
					name: 'Thin Padding',
					default: true,
					properties: {
						effects: {
							blind: 9.4,
						},
					},
				},
				{
					id: 'full',
					name: 'Thick Padding',
					properties: {
						effects: {
							blind: 10,
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER strapped ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the eyes.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
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
