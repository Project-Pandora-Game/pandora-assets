DefineAsset({
	name: 'Head-mounted Display',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#FFFFFF',
		},
		front: {
			name: 'Front',
			default: '#768FC3',
		},
		headband: {
			name: 'Headband',
			default: '#FFFFFF',
		},
	},
	// size:210, y:176, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
			'Restraint',
		],
	},
	modules: {
		sight: {
			type: 'typed',
			name: 'Camera pass-through',
			variants: [
				{
					id: 'full',
					name: 'Full - see environment clearly',
					default: true,
				},
				{
					id: 'partial',
					name: 'Partial - see environment blurry',
					properties: {
						effects: {
							blind: 5,
							blurVision: 12,
						},
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
					},
				},
				{
					id: 'off',
					name: 'Off - environment hidden',
					properties: {
						effects: {
							blind: 10,
						},
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Headband lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		config: {
			type: 'lockSlot',
			name: 'Digital lock: Pass-through',
			lockedProperties: {
				blockModules: ['sight'],
			},
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oZ7VP',
				copyrightHolder: 'Blue31234',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
