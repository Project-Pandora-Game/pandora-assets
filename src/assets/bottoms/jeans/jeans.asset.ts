DefineAsset({
	name: 'Jeans',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pants: {
			name: 'Pants',
			default: '#9BCDFF',
		},
		inside: {
			name: 'Fabric reverse side',
			default: '#c2cfda',
		},
		button: {
			name: 'Button',
			default: '#E6E6E6',
		},
		belt: {
			name: 'Belt',
			default: '#834C01',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-140, -140, 0],
	},
	// size:650, y:631, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
		requires: [
			'!Crotch_protruding',
		],
		hides: ['Penis_flaccid'],
	},
	modules: {
		type: {
			type: 'typed',
			name: 'Belted',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'belted',
					name: 'Belted',
				},
			],
		},
		style: {
			type: 'typed',
			name: 'Style',
			variants: [
				{
					id: 'default',
					name: 'Default',
					default: true,
				},
				{
					id: 'capri',
					name: 'Capri',
				},
				{
					id: 'bermuda',
					name: 'Bermuda',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Freyja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
