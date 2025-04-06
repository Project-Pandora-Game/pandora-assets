DefineAsset({
	name: 'Bunny Collar',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		collar: {
			name: 'Collar',
			default: '#FFFFFF',
		},
		tie: {
			name: 'Bow Tie',
			default: '#202020',
		},
	},
	// size:150, y:350, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		tieType: {
			type: 'typed',
			name: 'Tie Type',
			variants: [
				{
					id: 'classic',
					name: 'Classic',
					default: true,
				},
				{
					id: 'big',
					name: 'Big Tie',
				},
				{
					id: 'ribbon',
					name: 'Ribbon',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
