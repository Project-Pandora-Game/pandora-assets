DefineBodypart({
	name: 'Eyes 3',
	bodypart: 'eyes',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		eyeColor_l: {
			name: 'Eye color left',
			default: '#2D589B',
		},
		eyeColor_r: {
			name: 'Eye color right',
			default: '#2D589B',
		},
		lashes: {
			name: 'Lashes',
			default: '#555555',
		},
		eyeBackground: {
			name: 'Eye background',
			default: '#FFFFFF',
		},
		shine: {
			name: 'Shine',
			default: '#A8CEE4CC',
			minAlpha: 0,
		},
	},
	// size:200, y:195, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Eyes',
		],
	},
	modules: {
		pupilType: {
			type: 'typed',
			name: 'Pupil Types',
			variants: [
				{
					id: 'largePupils',
					name: 'Large Pupils',
					default: true,
				},
				{
					id: 'smallPupils',
					name: 'Small Pupils',
				},
				{
					id: 'starPupils',
					name: 'Star-shaped Pupils',
				},
				{
					id: 'crossPupils',
					name: 'Cross-shaped Pupils',
				},
				{
					id: 'noPupils',
					name: 'No Pupils',
				},
			],
		},
		eyeState_l: {
			type: 'typed',
			name: 'Left Eye Open/Close',
			expression: 'Left Eye Open/Close',
			variants: [
				{
					id: 'normal',
					name: 'Open',
					default: true,
					properties: {
						attributes: { provides: ['Eyes_left_open'] },
					},
				},
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						attributes: { provides: ['Eyes_left_closed'] },
					},
				},
				{
					id: 'blind',
					name: 'Closed with blind effect',
					properties: {
						effects: {
							blind: 4.99,
						},
						attributes: { provides: ['Eyes_left_closed'] },
					},
				},
			],
		},
		eyeState_r: {
			type: 'typed',
			name: 'Right Eye Open/Close',
			expression: 'Right Eye Open/Close',
			variants: [
				{
					id: 'normal',
					name: 'Open',
					default: true,
					properties: {
						attributes: { provides: ['Eyes_right_open'] },
					},
				},
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						attributes: { provides: ['Eyes_right_closed'] },
					},
				},
				{
					id: 'blind',
					name: 'Closed with blind effect',
					properties: {
						effects: {
							blind: 4.99,
						},
						attributes: { provides: ['Eyes_right_closed'] },
					},
				},
			],
		},
		eyeDirection: {
			type: 'typed',
			name: 'Eye Variants',
			expression: 'Eye Variants',
			variants: [
				{
					id: 'straight',
					name: 'Straight',
					default: true,
				},
				// Left<->Right is intentionally swapped for user to match the character's POV
				{
					id: 'left',
					name: 'Right',
				},
				{
					id: 'right',
					name: 'Left',
				},
				{
					id: 'down',
					name: 'Down',
				},
				{
					id: 'up',
					name: 'Up',
				},
				{
					id: 'rolled',
					name: 'Rolled',
				},
				{
					id: 'wideBig',
					name: 'Wide (Big)',
				},
				{
					id: 'wideSmall',
					name: 'Wide (Small)',
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
