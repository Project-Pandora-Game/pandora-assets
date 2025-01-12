DefineAsset({
	name: 'Paper Note',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		paper: {
			name: 'Paper',
			default: '#F2E5AE',
		},
	},
	// size:200, y:304, X:153
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
		location: {
			type: 'typed',
			name: 'Location of the note',
			variants: [
				{
					id: 'somewhere',
					name: 'Kept somewhere (worn without graphics)',
					default: true,

				},
				{
					id: 'right',
					name: 'Held in the right hand',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
							},
							options: [
								{
									rightArm: {
										rotation: 'up',
									},
								},
								{
									rightArm: {
										rotation: 'down',
									},
								},
							],
						},
					},
				},
				{
					id: 'left',
					name: 'Held in the left hand',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
							},
							options: [
								{
									leftArm: {
										rotation: 'up',
									},
								},
								{
									leftArm: {
										rotation: 'down',
									},
								},
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put a paper note into TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionRemove: 'SOURCE_CHARACTER removed the paper note from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionAddCreate: 'SOURCE_CHARACTER took out a paper note.',
		actionRemoveDelete: 'SOURCE_CHARACTER disposed of the paper note.',
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
