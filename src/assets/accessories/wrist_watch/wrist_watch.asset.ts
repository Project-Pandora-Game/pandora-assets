DefineAsset({
	name: 'Wrist Watch',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		watch: {
			name: 'Watch',
			default: '#A2A2A2',
		},
		dial: {
			name: 'Dial',
			default: '#FFFFFF',
		},
	},
	// size:200, y:350, not centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		handUsage_r: {
			type: 'typed',
			name: 'Right Wrist',
			variants: [
				{
					id: 'no',
					name: 'No watch',
				},
				{
					id: 'watch',
					name: 'Watch',
					default: true,
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Left hand',
			variants: [
				{
					id: 'no',
					name: 'No watch',
					default: true,
				},
				{
					id: 'watch',
					name: 'Watch',
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
