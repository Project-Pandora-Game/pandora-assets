DefineAsset({
	name: 'Ankle Socks',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		socks: {
			name: 'Socks',
			default: '#FFFFFF',
		},
	},
	// size:200, y:1157, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Legwear',
		],
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
