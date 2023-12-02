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
	attributes: {
		provides: [
			'Restraint',
			'Headgear',
			'Headgear_hood',
			'Restraint_eyes',
		],
		hides: [
			'Hair',
			'Ears',
		],
	},
	effects: {
		blind: 9.9,
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
		actionAdd: 'SOURCE_CHARACTER pulled a Half Hood over TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the head.',
		actionRemove: 'SOURCE_CHARACTER removed the Half Hood from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
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
