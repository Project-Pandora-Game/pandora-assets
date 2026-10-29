import { produce } from 'immer';

const bodypart = DefineBodypart({
	name: 'Front Horns Oni',
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
		size: {
			type: 'typed',
			name: 'Size',
			variants: [
				{
					id: 'large',
					name: 'Large',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'tinyWide',
					name: 'Tiny wide',
				},
				{
					id: 'tiny',
					name: 'Tiny',
				},
			],
		},
		layering: {
			type: 'typed',
			name: 'Layering of the horns',
			expression: 'Layering of the horns',
			variants: [
				{
					id: 'overHair',
					name: 'Over front hair',
					default: true,
				},
				{
					id: 'underHair',
					name: 'Under front hair',
				},
				{
					id: 'overlay',
					name: 'Over everything',
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
	// size:224, y:154, centered
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
	id: 'body/front_horns_oni/faux',
	name: 'Faux Front Horns Oni',
	size: 'small',
	modules: produce(bodypart.modules!, (d) => {
		// Do not define expressions on modules on non-bodypart
		for (const module of Object.values(d)) {
			delete module.expression;
		}
	}),
});
