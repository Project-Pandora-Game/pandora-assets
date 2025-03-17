DefineAsset({
	name: 'Half Hood',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		hood: {
			name: 'Hood',
			default: '#4E4462',
		},
		zipper: {
			name: 'Zipper',
			default: '#333333',
		},
	},
	// size:200, y:195, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Headgear',
			'Headgear_hood',
			'Restraint_eyes',
			'Ear_item',
			'Ear_cover',
		],
		hides: [
			'Hair',
			'Wig',
			'Ears',
			'Fantasy_ears',
		],
		covers: [
			'Ear_item',
		],
	},
	effects: {
		blind: 9.9,
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pulled ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the head.',
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
