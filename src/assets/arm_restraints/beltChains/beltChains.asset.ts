DefineAsset({
	name: 'Belt chains',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		Chains: {
			name: 'Chains',
			default: '#DDDDDD',
		},
	},
	// size:400, y:550, centered
	preview: 'preview.png',
	poseLimits: {
		bones: {
			arm_l: 40,
			elbow_l: 75,
			arm_r: 40,
			elbow_r: 75,
		},
	},
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
		requires: [
			'Wrist_cuffs_chainable',
			'Belt_chainable',
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
		actionAdd: 'SOURCE_CHARACTER connects the cuffs to TARGET_CHARACTER_DYNAMIC_POSSESSIVE belt with short chains.',
		actionRemove: 'SOURCE_CHARACTER detaches the cuffs from TARGET_CHARACTER_DYNAMIC_POSSESSIVE belt.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
