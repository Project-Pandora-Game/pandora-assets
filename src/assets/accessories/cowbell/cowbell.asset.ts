DefineAsset({
	name: 'Cowbell',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		metal: {
			name: 'Metal',
			default: '#F6D778',
		},
	},
	// size:150, y:350, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
		requires: [
			'Collar_front_ring',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER attached a cowbell onto TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck ring.',
		actionRemove: 'SOURCE_CHARACTER removed the cowbell from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck ring.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'bell base image',
				source: 'https://creazilla.com/media/emoji/48691/bell',
				copyrightHolder: 'JoyPixels',
				editedBy: 'Sandrine',
				license: 'CC BY',
			},
		],
	},
});
