import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(false);

const bodypart = DefineBodypart({
	name: 'Pigtails',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization,
	// size:250, y:177, centered
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

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/back_hair_pigtails/wig',
	name: 'Pigtails Wig',
	size: 'small',
	attributes: {
		provides: [
			'Wig',
		],
	},
});

