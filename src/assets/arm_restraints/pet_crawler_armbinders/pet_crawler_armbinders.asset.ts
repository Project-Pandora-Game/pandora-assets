DefineAsset({
	name: 'Pet Crawler Armbinders',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		binders: {
			name: 'Binders',
			default: '#1D1C20ff',
			minAlpha: 0,
		},
		shine: {
			name: 'Shine',
			default: '#ccccccdd',
			minAlpha: 0,
		},
		belts: {
			name: 'Belts',
			default: '#030303',
		},
		rings: {
			name: 'Metallic parts',
			default: '#cccccc',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
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
			position: 'back',
		},
		bones: {
			elbow_r: -160,
			elbow_l: -160,
		},
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER slipped a pet crawler armbinder over each of TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms and tightened them into pet leg position.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off the pet crawler armbinders from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
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
