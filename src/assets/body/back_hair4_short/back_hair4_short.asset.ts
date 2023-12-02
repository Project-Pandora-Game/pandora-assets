import { CreateHairColor } from '../../../helpers/hair_base';
const { colorization, modules } = CreateHairColor(true);

DefineAsset({
	name: 'Back hair 4 Short',
	size: 'bodypart',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization,
	attributes: {
		provides: [
			'Hair',
			'Hair_back',
		],
	},
	modules,
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
