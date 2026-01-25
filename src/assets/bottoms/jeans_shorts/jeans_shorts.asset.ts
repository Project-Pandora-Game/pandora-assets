DefineAsset({
	name: 'Jeans Shorts',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pants: {
			name: 'Pants',
			default: '#7396B3',
		},
		button: {
			name: 'Button',
			default: '#666666',
		},
		belt: {
			name: 'Belt',
			default: '#834C01',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-90, -120, 0],
	},
	// size:270, y:571, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
		requires: [
			'!Crotch_protruding',
		],
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
		folded_ends: {
			type: 'typed',
			name: 'Folded ends',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'folded',
					name: 'Folded',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Titania', 'Freyja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'base form',
				source: 'Private',
				copyrightHolder: 'QueenTita',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
