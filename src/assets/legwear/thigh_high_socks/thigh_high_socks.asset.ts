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
	// size:600, y:763, centered
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
		feet: {
			type: 'typed',
			name: 'Feet',
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
				},
				{
					id: 'footless',
					name: 'Footless',
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
			{
				part: 'feet',
				source: 'https://www.flickr.com/photos/48385543@N02/25662412406',
				copyrightHolder: 'Izzi Button',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
