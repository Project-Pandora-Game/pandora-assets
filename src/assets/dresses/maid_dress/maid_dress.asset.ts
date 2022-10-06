DefineAsset({
	name: 'Maid Dress',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Dress',
			default: '#FFFFFF',
		},
		{
			name: 'Frills',
			default: '#333333',
		},
		{
			name: 'Buttons',
			default: '#333333',
		},
		{
			name: 'Ribbons',
			default: '#333333',
		},
		{
			name: 'Ribbon Lace',
			default: '#FFFFFF',
		},
	],
	modules: {
		buttons: {
			type: 'typed',
			name: 'Buttons',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		ribbons: {
			type: 'typed',
			name: 'Back Ribbon',
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
		skirtState: {
			type: 'typed',
			name: 'Skirt State',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'up',
					name: 'Pulled Up',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'https://www.flickr.com/photos/hawken/3954915198/',
				copyrightHolder: 'Hawken King',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				source: 'https://www.flickr.com/photos/hawken/3954134423/',
				copyrightHolder: 'Hawken King',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
