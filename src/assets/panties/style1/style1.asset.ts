import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Panties (style 1)',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Panties',
			default: '#FA5F55',
		},
	],
	modules: {
		pantiesState: {
			type: 'typed',
			name: 'Panties State',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'aside',
					name: 'Pulled Aside',
				},
				{
					id: 'wedged',
					name: 'Wedged Up',
				},
				{
					id: 'fully',
					name: 'Pulled Down Fully',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Jomshir'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
