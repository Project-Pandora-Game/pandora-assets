DefineAsset({
	name: 'Pull-up Diaper',
	size: 'small',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		diaper: {
			name: 'Diaper',
			default: '#FFFFFF',
		},
	},
	// size:240, y:570, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Underwear',
			'Underwear_diaper',
		],
		requires: [
			'!Crotch_protruding',
		],
		hides: [
			'Penis',
		],
	},
	/*
	modules: {
		wet: {
			type: 'typed',
			name: 'Accident level',
			variants: [
				{
					id: 'no',
					name: 'None',
					default: true,
				},
				{
					id: 'wet',
					name: 'A little bit',
				},
				{
					id: 'wetter',
					name: 'Noticable',
				},
				{
					id: 'full',
					name: 'Oh my...',
				},
			],
		},
	},
	*/
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
