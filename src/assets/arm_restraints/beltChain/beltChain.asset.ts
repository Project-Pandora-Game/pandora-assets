DefineAsset({
	name: 'Belt chain',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		Chains: {
			name: 'Chains',
			default: '#DDDDDD',
		},
	},
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
	// Info about who owns the asset(s)
	ownership: {
		// Same as the author of git commits present in PR, has responsibility for this asset
		responsibleContributor: 'SandrinePDR <g118102950+SandrinePDR@users.noreply.github.com',
		credits: ['Sandrine'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
