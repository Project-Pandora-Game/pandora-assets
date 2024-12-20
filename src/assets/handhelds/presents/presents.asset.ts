DefineAsset({
	name: 'Present',
	size: 'large',
	graphics: 'graphics.json',
	colorization: {
		color_1: {
			name: 'Color 1',
			default: '#FFFFFF',
		},
		color_2: {
			name: 'Color 2',
			default: '#FF4E4E',
		},
		color_3: {
			name: 'Color 3',
			default: '#258C46',
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
					id: 'christmas',
					name: 'Christmas present',
					default: true,
					properties: {
						poseLimits: {
							arms: {
								position: 'front',
								rotation: 'forward',
							},
							bones: {
								arm_l: 21,
								arm_r: 33,
								elbow_l: 90,
								elbow_r: 78,
							},
						},
					},
				},
				{
					id: 'plain',
					name: 'Ordinary present',
					properties: {
						poseLimits: {
							arms: {
								position: 'front',
								rotation: 'forward',
							},
							bones: {
								arm_l: 54,
								arm_r: 54,
								elbow_l: 61,
								elbow_r: 61,
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
				part: 'Present',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Christmas present base image',
				source: 'https://creazilla.com/media/clipart/7813296/present',
				copyrightHolder: 'Creative Commons: https://creativecommons.org/licenses/by/4.0/',
				editedBy: 'Sandrine',
				license: 'CC BY-SA',
			},
			{
				part: 'Plain present base image',
				source: 'https://sketchfab.com/3d-models/gift-box-with-a-bow-97002ea6846c4b0ebfe72e9f946d9295',
				copyrightHolder: 'Creative Commons: https://creativecommons.org/licenses/by/4.0/',
				editedBy: 'Sandrine',
				license: 'CC BY-SA',
			},
		],
	},
});
