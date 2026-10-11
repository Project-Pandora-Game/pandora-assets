import { produce } from 'immer';

const bodypart = DefineBodypart({
	name: 'Side Horns 1',
	bodypart: 'horns',
	graphics: 'graphics.json',
	colorization: {
		hornsColor: {
			name: 'Horns',
			default: '#E6E6E6',
		},
	},
	attributes: {
		provides: [
			'Fantasy',
		],
	},
	modules: {
		style: {
			type: 'typed',
			name: 'Horns Style',
			variants: [
				{
					id: 'side',
					name: 'Side',
					default: true,
				},
				{
					id: 'sideUpper',
					name: 'Side Upper',
				},
			]
		},
		layering: {
			type: 'typed',
			name: 'Layering of the horns',
			variants: [
				{
					id: 'overHair',
					name: 'Over front hair',
					default: true,
				},
				{
					id: 'unerHair',
					name: 'Under front hair',
				},
			],
		},
		visibility: {
			type: 'typed',
			name: 'Horns Visibilty',
			expression: 'Horns Visibilty',
			variants: [
				{
					id: 'visible',
					name: 'Visible',
					default: true,
				},
				{
					id: 'hidden',
					name: 'Hidden',

				},

			],
		},
		worn_l: {
			type: 'typed',
			name: 'Left horn',
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
			name: 'Right horn',
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
	// size:200, y:180, centered
	preview: 'preview.png',
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
				part: 'Base model',
				source: 'https://skfb.ly/onRGv',
				copyrightHolder: 'viktoriya.magway',
				editedBy: 'Nikky',
				license: 'CC BY',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/side_horns1/faux',
	name: 'Faux Side Horns 1',
	graphics: 'graphics.json',
	size: 'small',
	modules: produce(bodypart.modules!, (d) => {
		// Do not define expressions on modules on non-bodypart
		for (const module of Object.values(d)) {
			delete module.expression;
		}
	}),
});
