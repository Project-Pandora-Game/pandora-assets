DefineAsset({
	name: 'Present',
	size: 'large',
	graphics: 'graphics.json',
	colorization: {
		color_1: {
			name: 'Color 1',
			default: '#FF6E6E',
		},
		color_2: {
			name: 'Color 2',
			default: '#F2BA3A',
		},
		color_3: {
			name: 'Color 3',
			default: '#FFFFFF',
		},
	},
	// size:300, y:500, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		content: {
			type: 'storage',
			name: 'The gift',
			maxCount: 1,
			maxAcceptedSize: 'medium',
		},
		variant: {
			type: 'typed',
			name: 'Kind of present',
			variants: [
				{
					id: 'christmnas',
					name: 'Christmas present',
					default: true,
					properties: {
						poseLimits: {
							arms: {
								position: 'front',
								rotation: 'forward',
							},
							bones: {
								arm_l: 45,
								arm_r: 45,
								elbow_l: 64,
								elbow_r: 64,
							},
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Christmas present base image',
				source: 'https://creazilla.com/media/clipart/7813296/present',
				copyrightHolder: 'Creazilla: https://creativecommons.org/licenses/by/4.0/',
				editedBy: 'Sandrine',
				license: 'CC BY-SA',
			},
		],
	},
});
