DefineBodypart({
	name: 'Eyes 5',
	bodypart: 'eyes',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		sclera: {
			name: 'Sclera',
			default: '#EEEEEE',
		},
		pupil: {
			name: 'Pupil',
			default: '#222222',
		},
		iris_l: {
			name: 'Iris left',
			default: '#448E32',
			migrateFrom: ['iris'],
		},
		iris_r: {
			name: 'Iris right',
			default: '#448E32',
			migrateFrom: ['iris'],
		},
		lashes: {
			name: 'Lashes',
			default: '#222222',
		},
		shadow: {
			name: 'Shadow',
			default: '#000000',
		},
		reflections: {
			name: 'Reflections',
			default: '#ffffffbb',
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
					id: 'squint',
					name: 'Squint',
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
					id: 'squint',
					name: 'Squint',
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
			name: 'Eyes direction',
			expression: 'Eyes direction',
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
			],
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['paparebbe', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'paparebbe',
				editedBy: 'Jomshir98',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
