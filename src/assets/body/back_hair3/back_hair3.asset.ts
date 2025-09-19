import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(true);

const bodypart = DefineBodypart({
	name: 'Back hair 3',
	bodypart: 'backhair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:500, y:176, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_back',
		],
	},
	modules,
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Titania', 'Echo', 'ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'QueenTita',
				editedBy: 'Echo',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/back_hair3/wig',
	name: 'Back wig 3',
	size: 'small',
	attributes: {
		provides: [
			'Wig',
			'Wig_back',
		],
		hides: [
			'Hair_back',
			'Hair_extension',
		],
	},
});
