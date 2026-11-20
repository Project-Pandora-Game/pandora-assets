DefineAsset({
	name: 'Big Christmas Hat',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		pompom: {
			name: 'Pom-pom',
			default: '#FFFFFF',
		},
		crown: {
			name: 'Crown',
			default: '#FF0000',
		},
		trim: {
			name: 'Trim',
			default: '#FFFFFF',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [0, -1, 0],
	},
	// size:318, y:56, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
		],
	},
	modules: {
		material: {
			type: 'typed',
			name: 'Material',
			variants: [
				{
					id: 'matte',
					name: 'Matte',
					default: true,
				},
				{
					id: 'reflective',
					name: 'Reflective',
				},
			],
		},
		wearingStyle: {
			type: 'typed',
			name: 'Wearing Style',
			variants: [
				{
					id: 'lower',
					name: 'Lower',
					default: true,
				},
				{
					id: 'higher',
					name: 'Higher',
				},
			],
		},
		hair: {
			type: 'typed',
			name: 'Hide Hair',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Hide extra/side hair extensions',
					properties: {
						attributes: {
							hides: [
								'Hair_extension',
							],
						},
					},
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
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'Nikky',
				editedBy: 'Nikky',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'Base santa claus hat model',
				source: 'https://skfb.ly/osRUU',
				copyrightHolder: 'Weiting Ke',
				editedBy: 'Nikky',
				license: 'CC BY-SA',
			},
		],
	},
});
