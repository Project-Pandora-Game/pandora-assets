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
			'Handheld',
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
			name: 'Wrapping Type',
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
								arm_l: 24,
								arm_r: 33,
								elbow_l: 87,
								elbow_r: 81,
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
	storageModule: 'content',
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
				source: 'https://sketchfab.com/3d-models/game-ready-free-christmas-gifts-ad99e7faf07c45d9b57324b4a0e94c53',
				copyrightHolder: 'Saritasa',
				editedBy: 'Sandrine',
				license: 'CC BY',
			},
			{
				part: 'Plain present base image',
				source: 'https://sketchfab.com/3d-models/gift-box-with-a-bow-97002ea6846c4b0ebfe72e9f946d9295',
				copyrightHolder: 'AlbertVictory',
				editedBy: 'Sandrine',
				license: 'CC BY',
			},
		],
	},
});
