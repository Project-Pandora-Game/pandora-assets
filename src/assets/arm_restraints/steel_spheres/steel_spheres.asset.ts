DefineAsset({
	name: 'Steel Mittens',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		spheres: {
			name: 'Spheres',
			default: '#FFFFFF',
		},
		cuffs: {
			name: 'Cuffs',
			default: '#FFFFFF',
		},
	},
	// size:320, y:583, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Hand_item',
			'Hand_cover',
			'Gloves',
			'Mittens',
		],
		covers: [
			'Hand_item',
		],
		hides: [
			'Mittens',
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
	poseLimits: {
		arms: {
			fingers: 'fist',
		},
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER encases TARGET_CHARACTER_DYNAMIC_POSSESSIVE hands with shiny steel spheres.',
		actionRemove: 'SOURCE_CHARACTER unscrews and then removes the spheres from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hands.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
