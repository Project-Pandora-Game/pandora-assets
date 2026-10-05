import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(true);

const bodypart = DefineBodypart({
	name: 'Front Hair 19',
	bodypart: 'fronthair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:286, y:184, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_front',
		],
	},
	modules,
	ownership: {
		responsibleContributor:'Miagnificent <338069332+Miagnificent@users.noreply.github.com>',
		credits: ['Mia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Mia',
				editedBy: 'Mia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/front_hair19/wig',
	name: 'Front Wig 19',
	allowRandomizerUsage: undefined,
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
