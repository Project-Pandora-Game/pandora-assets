import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(false);

const bodypart = DefineBodypart({
	name: 'Back Hair 15',
	bodypart: 'backhair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:335, y:185, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_back',
		],
	},
	modules: {
		...modules,
		stray_hair: {
			type: 'typed',
			name: 'Stray Hair',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
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
				source: 'https://skfb.ly/py8P7',
				copyrightHolder: 'Ace-Jane',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});

DefineAsset({
	...bodypart,
	id: 'body/back_hair15/wig',
	name: 'Back Wig 15',
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

