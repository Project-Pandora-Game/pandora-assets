DefineRoomDeviceAsset({
	name: 'Pet bowl',
	size: 'medium',
	colorization: {
		bowl: {
			name: 'Pet bowl',
			default: '#FFFFFF',
		},
		interior: {
			name: 'Pet bowl interior',
			default: '#FEF9F3',
		},
	},
	staticAttributes: ['Floor'],
	preview: 'pet_bowl_preview.png',
	slots: {},
	pivot: {
		x: 0,
		y: 0,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'pet_bowl.png',
			colorizationKey: 'bowl',
		},
		{
			type: 'sprite',
			image: 'pet_bowl_interior.png',
			colorizationKey: 'interior',
		},
	],
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Bowl',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
