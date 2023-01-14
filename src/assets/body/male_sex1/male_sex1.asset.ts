import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Male Sex 1',
	bodypart: 'sex',
	size: 'bodypart',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Penis',
			default: '#FDDFD0',
		},
		{
			name: 'Glans',
			default: '#E2B4B0',
		},
	],
	attributes: [
		'Sex',
		'Penis',
	],
	modules: {
		penis: {
			type: 'typed',
			name: 'Penis',
			expression: 'Penis',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'flaccid',
					name: 'Flaccid',
					default: true,
					attributes: ['Penis_flaccid'],
				},
				{
					id: 'erect',
					name: 'Erect',
					attributes: ['Penis_erect'],
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Ayesha <ayeshafox44@gmail.com>',
		credits: ['Ayesha'],
		modificationPolicy: 'Ask first',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Ayesha',
				editedBy: 'Ayesha',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
