DefineAsset({
	name: 'Latex Body',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		body: {
			name: 'Body',
			default: '#020202FF',
			minAlpha: 0.15,
		},
		shine: {
			name: 'Reflection',
			default: '#FFFFFF',
			minAlpha: 0,
		},
	},
	// size:420, y:350, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Restraint',
			'Restraint_torso',
			'Anus_cover',
			'Vulva_cover',
		],
		hides: [
			'Penis',
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
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'body',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
