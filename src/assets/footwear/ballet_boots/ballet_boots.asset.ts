DefineAsset({
	name: 'Ballet Boots',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		outer: {
			name: 'Outer',
			default: '#111111',
		},
		inner: {
			name: 'Inner',
			default: '#111111',
		},
		laces: {
			name: 'Laces',
			default: '#FFFFFF',
		},
		support: {
			name: 'Support',
			default: '#303030',
		},
		sole: {
			name: 'Sole',
			default: '#1A1A1A',
		},
		heel: {
			name: 'Heel',
			default: '#333333',
		},
		belt: {
			name: 'Belt',
			default: '#070707',
		},
		buckle: {
			name: 'Buckle',
			default: '#FFFFFF',
		},
		shine: {
			name: 'Shine',
			default: '#FFFFFF6F',
			minAlpha: 1,
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [250, -1, 0],
	},
	// size:240, y:1143, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Footwear',
			'Restraint',
			'Restraint_legs',
		],
	},
	poseLimits: {
		bones: {
			tiptoeing: 180,
		},
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		heel: {
			type: 'typed',
			name: 'Heel',
			variants: [
				{
					id: 'false',
					name: 'No',
				},
				{
					id: 'true',
					name: 'Yes',
					default: true,
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Livie53 <itsalive53.cr1mson@gmail.com>',
		credits: ['Livie53'],
		modificationPolicy: 'Free to change',
		reusePolicy: 'Free to use',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Livie53',
				editedBy: 'Livie53',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
