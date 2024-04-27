DefineAsset({
	name: 'Room Construction Tools',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		box_m: {
			name: 'Metallic toolbox',
			default: '#FF4244',
		},
		box_w: {
			name: 'Wooden toolbox',
			default: '#826154',
		},
	},
	// size:520, y:479, X:227
	preview: 'preview.png',
	attributes: {
		provides: ['Handheld'],
		requires: ['!Mittens'],
		hides: ['Handheld'],
	},
	modules: {
		tool: {
			type: 'typed',
			name: 'Tool Type',
			variants: [
				{
					id: 'modern',
					name: 'Modern',
					default: true,
				},
				{
					id: 'historic',
					name: 'Historic',
				},
			],
		},
	},
	poseLimits: {
		leftArm: {
			position: 'front',
			rotation: 'forward',
			fingers: 'fist',
		},
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
		bones: {
			arm_l: 66,
			elbow_l: 15,
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER picked up the room construction tools.',
		actionRemove: 'SOURCE_CHARACTER put down the room construction tools.',
		actionAddCreate: 'SOURCE_CHARACTER took out some room construction tools.',
		actionRemoveDelete: 'SOURCE_CHARACTER put the room construction tools away.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model - wrench',
				source: 'https://skfb.ly/ozyWP',
				copyrightHolder: 'Incg5764',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - toolbox',
				source: 'https://skfb.ly/ovrqE',
				copyrightHolder: 'DJHaski',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - hammer',
				source: 'https://skfb.ly/oK6tS',
				copyrightHolder: 'Harri Snellman',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - wooden toolbox',
				source: 'https://skfb.ly/JIC8',
				copyrightHolder: 'beyondmatter',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
