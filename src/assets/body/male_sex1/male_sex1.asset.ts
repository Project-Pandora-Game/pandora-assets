// The comments provide info about what is REQUIRED before submitting an asset.
// After filling the info in, please remove the helper comments before creating a PR.

import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Male Sex 1',
	bodypart: 'sex',
	size: 'bodypart',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Penis',
			default: '#FFFFFF',
		},
		{
			name: 'Glans',
			default: '#FFFFFF',
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
					name: "Flaccid",
					default: true,
					attributes: ['Flaccid_Penis'],
				},
				{
					id: 'erect',
					name: "Erect",
					attributes: ['Erect_Penis'],
				},
			]
		}
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
