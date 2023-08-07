DefineAsset({
	name: 'Whip Marks',
	size: 'bodypart',
	bodypart: 'bodymarks',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		mark: {
			name: 'Color',
			default: '#DC8374B3',
			minAlpha: 0.1,
		},
	},
	attributes: ['Body_texture'],
	modules: {
		buttColor_l: {
			type: 'typed',
			name: 'Left Butt Marks',
			expression: 'Left Butt Marks',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		buttColor_r: {
			type: 'typed',
			name: 'Right Butt Marks',
			expression: 'Right Butt Marks',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		bthighColor_l: {
			type: 'typed',
			name: 'Left Thigh Marks Back',
			expression: 'Left Thigh Marks Back',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		bthighColor_r: {
			type: 'typed',
			name: 'Right Thigh Marks Back',
			expression: 'Right Thigh Marks Back',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		backColor: {
			type: 'typed',
			name: 'Back Marks',
			expression: 'Back Marks',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		fthighColor_l: {
			type: 'typed',
			name: 'Left Thigh Marks Front',
			expression: 'Left Thigh Marks Front',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		fthighColor_r: {
			type: 'typed',
			name: 'Right Thigh Marks Front',
			expression: 'Right Thigh Marks Front',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		breastColor_l: {
			type: 'typed',
			name: 'Left Breast Marks',
			expression: 'Left Breast Marks',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		breastColor_r: {
			type: 'typed',
			name: 'Right Breast Marks',
			expression: 'Right Breast Marks',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		sexColor: {
			type: 'typed',
			name: 'Sex Marks',
			expression: 'Sex Marks',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
