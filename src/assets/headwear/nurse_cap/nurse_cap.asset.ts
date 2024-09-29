DefineAsset({
	name: 'Nurse Cap',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cap: {
			name: 'Cap',
			default: '#FFFFFF',
		},
		cross: {
			name: 'Cross',
			default: '#FFFFFF',
		},
	},
	// size:200, y:182, centered
	preview: null, //'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
	},
	modules: {
		cross: {
			type: 'typed',
			name: 'With cross emblem',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
				},
				{
					id: 'no',
					name: 'No',
					default: true,
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
