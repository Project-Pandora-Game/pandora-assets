DefineAsset({
	name: 'Thigh High Socks',
	size: 'small',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		socks: {
			name: 'Socks',
			default: '#FFFFFF',
		},
		stripeTop: {
			name: 'Stripe Top (1)',
			default: '#83a3cc',
		},
		stripeMiddle: {
			name: 'Stripe Middle (2)',
			default: '#e49bb8',
		},
		stripeBottom: {
			name: 'Stripe Bottom (3)',
			default: '#83a3cc',
		},
	},
	attributes: [
		'Clothing',
		'Legwear',
	],
	modules: {
		stripes: {
			type: 'typed',
			name: 'Sock Stripes',
			variants: [
				{
					id: 'three',
					name: '3 Stripes',
					default: true,
				},
				{
					id: 'two',
					name: '2 Stripes',
				},
				{
					id: 'one',
					name: '1 Stripe',
				},
				{
					id: 'none',
					name: 'No Stripes',
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
