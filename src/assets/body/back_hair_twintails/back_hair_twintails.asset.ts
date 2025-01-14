import { CreateHairColor } from '../../../helpers/hair_base.js';
const { colorization, modules } = CreateHairColor(false);

DefineBodypart({
	name: 'Twintails',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization,
	// size:350, y:187, centered
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
