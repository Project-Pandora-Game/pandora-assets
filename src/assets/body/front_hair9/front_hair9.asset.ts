import { CreateHairColor } from '../../../helpers/hair_base.js';
const { colorization, modules } = CreateHairColor(true);

DefineBodypart({
	name: 'Front hair 9',
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
			name: 'Braid Direction',
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
