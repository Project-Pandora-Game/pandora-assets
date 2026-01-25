import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(false);

const bodypart = DefineBodypart({
	name: 'Front Hair 13 (paired)',
	bodypart: 'fronthair',
	graphics: 'graphics.json',
	colorization,
	preview: 'preview.png',
	modules: {
		...modules,
		brushed_to: {
			type: 'typed',
			name: 'Brushed towards',
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
	},
	ownership: {
		responsibleContributor: 'ObliqueBC <obliquebc@hotmail.com>',
		credits: ['Oblique'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Oblique',
				editedBy: 'Oblique',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

DefineAsset({
	...bodypart,
	id: 'body/front_hair13/wig',
	name: 'Front Wig 13',
	size: 'small',
	attributes: {
		provides: [
			'Wig',
			'Wig_front',
		],
		hides: [
			'Hair_front',
		],
	},
});

