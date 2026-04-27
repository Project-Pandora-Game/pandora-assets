import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization } = CreateHairColor(false);

const bodypart = DefineBodypart({
	name: 'Front Hair 16',
	bodypart: 'fronthair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:200, y:190, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_front',
		],
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'image',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/pyv7B',
				copyrightHolder: 'Ace-Jane',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});

DefineAsset({
	...bodypart,
	id: 'body/front_hair16/wig',
	name: 'Front Wig 16',
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

