DefineAsset({
	name: 'Medium Socks',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		socks: {
			name: 'Socks',
			default: '#FFFFFF',
		},
	},
	// size:350, y:1013, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Legwear',
		],
	},
	modules: {
		worn_l: {
			type: 'typed',
			name: 'Worn on left leg',
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
		worn_r: {
			type: 'typed',
			name: 'Worn on right leg',
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
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'textures',
				source: 'https://www.flickr.com/photos/48385543@N02/25662412406',
				copyrightHolder: 'Izzie Button',
				editedBy: 'ClaudiaMia',
				license: 'CC BY-SA',
			},
		],
	},
});
