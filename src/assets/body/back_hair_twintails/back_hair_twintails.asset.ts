import { CreateHairColor } from '../../../helpers/hair_base';
const { colorization, modules } = CreateHairColor(false);

DefineAsset({
	name: 'Twintails',
	size: 'bodypart',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization,
	attributes: {
		provides: [
			'Hair',
			'Hair_extension',
		],
		requires: [
			'Hair_back',
		],
	},
	modules: {
		...modules,
		config: {
			type: 'typed',
			name: 'Sides',
			variants: [
				{
					id: 'both',
					name: 'Both',
					default: true,
				},
				{
					id: 'left',
					name: 'Left Only',
				},
				{
					id: 'right',
					name: 'Right Only',
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
