import { produce } from 'immer';

const bodypart = DefineBodypart({
	name: 'Puppy Tail',
	bodypart: 'tail',
	graphics: 'graphics.json',
	colorization: {
		tail: {
			name: 'Tail',
			default: '#785A2D',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Fantasy',
			'Fantasy_tail',
		],
	},
	modules: {
		thickness: {
			type: 'typed',
			name: 'Tail Thickness',
			variants: [
				{
					id: 'thin',
					name: 'Thin',
				},
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'thick',
					name: 'Fluffy',
				},
			],
		},
		horizontal: {
			type: 'typed',
			name: 'Horizontal Alignment',
			expression: 'Horizontal Tail Direction',
			variants: [
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
				},
			],
		},
		vertical: {
			type: 'typed',
			name: 'Vertical Alignment',
			expression: 'Vertical Tail Direction',
			variants: [
				{
					id: 'up',
					name: 'Up',
					default: true,
				},
				{
					id: 'down',
					name: 'Down',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/tail_puppy/artificial',
	name: 'Artificial Puppy Tail',
	size: 'small',
	modules: produce(bodypart.modules!, (d) => {
		// Do not define expressions on modules on non-bodypart
		for (const module of Object.values(d)) {
			delete module.expression;
		}
	}),
});
