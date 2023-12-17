import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Cloth Collar',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		collar: {
			name: 'Collar',
			default: '#FFFFFF',
		},
	},
	// size:150, y:309, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
			'Collar',
		],
	},
	modules: {
		collarType: {
			type: 'typed',
			name: 'Collar Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal Collar',
					default: true,
				},
				{
					id: 'small',
					name: 'Small Collar',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed a Cloth Collar around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Cloth Collar from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
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
				license: 'Pandora-Use-Only',
			},
		],
	},
});
