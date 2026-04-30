DefineAsset({
	name: 'Taped Vibrating Eggs (Nipple)',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		vibrator: {
			name: 'Egg',
			default: '#FF9ED2',
		},
		tape: {
			name: 'Tape',
			default: '#F2E3EBDA',
			minAlpha: 0.0,
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-100, -20, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Toy',
			'Breast_item',
			'Breast_nipple',
		],
	},
	modules: {
		worn_l: {
			type: 'typed',
			name: 'Taped on the left nipple',
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
			name: 'Taped on the right nipple',
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
