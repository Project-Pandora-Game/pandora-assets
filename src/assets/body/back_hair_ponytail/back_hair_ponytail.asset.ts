import { CreateHairColor } from '../../../helpers/hair_base';
const { colorization, modules } = CreateHairColor(true);

DefineAsset({
	name: 'Ponytail',
	size: 'bodypart',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization,
	// size:350, y:256, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Hair',
			'Hair_extension',
		],
		requires: [
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
