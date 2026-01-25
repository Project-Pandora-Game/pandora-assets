DefineAsset({
	name: 'Linen Blouse',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		blouse: {
			name: 'Blouse',
			default: '#449BDA',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-170, -120, 0],
	},
	// size:420, y:370, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
		],
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Base model',
				source: 'https://skfb.ly/owL8y',
				copyrightHolder: 'Guenter Chao',
				editedBy: 'Jomshir98',
				license: 'CC BY',
			},
		],
	},
});
