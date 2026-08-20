DefineAsset({
	name: 'Fishnet Tights',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		fishnets: {
			name: 'Fishnets',
			default: '#000000',
		},
	},
	// size:760, y:600, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Legwear',
		],
	},
	modules: {
		cutout: {
			type: 'typed',
			name: 'Cutout between legs',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Nikky90506 <122885812+Nikky90506@users.noreply.github.com>',
		credits: ['Nikky'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Nikky',
				editedBy: 'Nikky',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
