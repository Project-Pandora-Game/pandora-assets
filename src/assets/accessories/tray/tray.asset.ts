DefineAsset({
	name: 'Tray',
	size: 'large',
	graphics: 'graphics.json',
	colorization: {
		frame: {
			name: 'Tray frame',
			default: '#FFBA7A',
		},
		bottom: {
			name: 'Tray bottom',
			default: '#FFD8AC',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
		content: {
			name: 'Content',
			default: '#FFFFFF',
		},
	},
	// size:375, y:375, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		content: {
			type: 'typed',
			name: 'Tray\'s content',
			variants: [
				{
					id: 'nothing',
					name: 'Nothing',
					default: true,
				},
				{
					id: 'teaService',
					name: 'Tea service',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER placed a serving tray over TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER removed the tray from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'tray',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'service',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
