import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization: baseColorization, modules } = CreateHairColor(true);

const bodypart = DefineBodypart({
	name: 'Back Hair 14',
	bodypart: 'backhair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		...baseColorization,
		tie: {
			name: 'Hair Tie',
			default: '#FFFFFF',
		},
	},
	// size:468, y:187, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_back',
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
	id: 'body/back_hair14/wig',
	name: 'Back Wig 14',
	allowRandomizerUsage: undefined,
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
