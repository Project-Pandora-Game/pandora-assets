import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(true);

const bodypart = DefineBodypart({
	name: 'Front Hair 14',
	bodypart: 'fronthair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:280, y:176, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_front',
		],
	},
	modules,
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['Alyx'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Alyx',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/front_hair14/wig',
	name: 'Front Wig 14',
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
