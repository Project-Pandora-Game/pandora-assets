DefineAsset({
	name: 'Paddle',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		handle: {
			name: 'Paddle',
			default: '#D7A67E',
		},
	},
	// size:410, y:194, X:0
	preview: 'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
		requires: [
			'!Hand_restricting_cover',
		],
	},
	modules: {
		handUsage_r: {
			type: 'typed',
			name: 'Held in right hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: ['up', 'down'],
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Held in left hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: ['up', 'down'],
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
					default: true,

				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put a paddle into TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionRemove: 'SOURCE_CHARACTER removed the paddle from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
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
