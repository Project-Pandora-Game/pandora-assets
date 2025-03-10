import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(true);

const bodypart = DefineBodypart({
	name: 'Back hair 8',
	bodypart: 'backhair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:280, y:176, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_back',
		],
	},
	modules,
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'hairstyle',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/back_hair8/wig',
	name: 'Back wig 8',
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
