import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization } = CreateHairColor(false);

const bodypart = DefineBodypart({
	name: 'Back Hair 16',
	bodypart: 'backhair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:250, y:158, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_back',
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
	id: 'body/back_hair16/wig',
	name: 'Back Wig 16',
	allowRandomizerUsage: undefined,
	size: 'small',
	attributes: {
		provides: [
			'Wig',
			'Wig_back',
		],
		hides: [
			'Hair_back',
		],
	},
});

