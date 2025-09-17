DefineRoomDeviceAsset({
	name: 'Wooden Table',
	size: 'huge',
	requireFreeHandsToUseDefault: false,
	colorization: {
		table: {
			name: 'Table',
			default: '#AB6C55',
		},
	},
	staticAttributes: ['Furniture'],
	preview: 'preview.png',
	slots: {},
	modules: {},
	pivot: {
		x: 500,
		y: 690,
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'wooden_table.png',
			colorizationKey: 'table',
		},
	],
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/osKHO',
				copyrightHolder: 'mohamedhussien',
				editedBy: 'ClaudiaMia',
				license: 'CC0',
			},
		],
	},
});
