DefineAsset({
	name: 'Nurse Cap',
	size: 'small',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		cap: {
			name: 'Cap',
			default: '#FFFFFF',
		},
		emblem: {
			name: 'Emblem',
			default: '#E60005',
		},
	},
	// size:200, y:180, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
	},
	modules: {
		emblemType: {
			type: 'typed',
			name: 'Emblem type',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'cross',
					name: 'Cross',
				},
				{
					id: 'moon',
					name: 'Moon',
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
				part: 'Cap',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
