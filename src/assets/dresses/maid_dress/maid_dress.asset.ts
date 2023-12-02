DefineAsset({
	name: 'Maid Dress',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		dress: {
			name: 'Dress',
			default: '#FFFFFF',
		},
		frills: {
			name: 'Frills',
			default: '#333333',
		},
		buttons: {
			name: 'Buttons',
			default: '#333333',
		},
		ribbons: {
			name: 'Ribbons',
			default: '#333333',
		},
		ribbonLace: {
			name: 'Ribbon Lace',
			default: '#FFFFFF',
		},
	},
	attributes: {
		provides: [
			'Clothing',
			'Clothing_upper',
			'Clothing_lower',
			'Clothing_large',
			'Restraint',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
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
		bossomState: {
			type: 'typed',
			name: 'Bossom State',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'down',
					name: 'Pulled Down',
				},
			],
		},
		skirtStateFront: {
			type: 'typed',
			name: 'Skirt State Front',
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
		skirtStateBack: {
			type: 'typed',
			name: 'Skirt State Back',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'up',
					name: 'Pulled up',
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
