import { CreateHairColor } from '../../../helpers/hair_base';
const { colorization, modules } = CreateHairColor(true);

DefineAsset({
	name: 'Back hair 2',
	size: 'bodypart',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization,
	// size:280, y:139, centered
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
		credits: ['Titania', 'Jomshir', 'ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'QueenTita',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
