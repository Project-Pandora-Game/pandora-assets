DefineAsset({
	name: 'Chain Leash',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		chains: {
			name: 'Chain',
			default: '#FFFFFF',
		},
	},
	preview: 'chain_preview.png',
	attributes: {
		provides: [
			'Restraint',
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
		collarConfig: {
			type: 'typed',
			name: 'Chain Configuration',
			variants: [
				{
					id: 'hanging',
					name: 'Chain Leash Hanging',
					default: true,
				},
				{
					id: 'left',
					name: 'Chain Leash Held Left',
				},
				{
					id: 'right',
					name: 'Chain Leash Held Right',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER hooked and closed a Chain Leash onto TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck ring.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Chain Leash from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck ring.',
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
