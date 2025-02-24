import { CreateHairColor } from '../../../helpers/hair_base.js';
const { colorization, modules } = CreateHairColor(true);

DefineBodypart({
	name: 'Front hair 8',
	bodypart: 'fronthair',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization,
	// size:290, y:180, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_front',
		],
	},
	modules: {
		...modules,
		crown: {
			type: 'typed',
			name: 'Crown Direction',
			variants: [
				{
					id: 'right',
					name: 'Right',
					default: true,
				},
				{
					id: 'left',
					name: 'Left',
				},
			],
		},
	},
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
	id: 'body/front_hair8/wig',
	name: 'Front wig 8',
	size: 'small',
	graphics: 'graphics.json',
	colorization,
	preview: 'preview.png',
	attributes: {
		provides: [
			'Wig',
			'Wig_front',
		],
		hides: [
			'Hair_front',
		],
	},
	modules: {
		...modules,
		crown: {
			type: 'typed',
			name: 'Crown Direction',
			variants: [
				{
					id: 'right',
					name: 'Right',
					default: true,
				},
				{
					id: 'left',
					name: 'Left',
				},
			],
		},
	},
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
