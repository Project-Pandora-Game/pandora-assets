DefineAsset({
	name: 'Leggings',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		leggings: {
			name: 'Leggings',
			default: '#2A2A2A',
		},
	},
	// size:800, y:574, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
		requires: [
			'!Crotch_protruding',
		],
	},
	modules: {
		design: {
			type: 'typed',
			name: 'Leggings design',
			variants: [
				{
					id: 'netshowing',
					name: 'Net showing',
					default: true,
				},
				{
					id: 'plain',
					name: 'plain',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'leggings',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
