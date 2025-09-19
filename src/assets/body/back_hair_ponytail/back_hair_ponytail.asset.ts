import { ItemInteractionType } from 'pandora-common';
import { CreateHairColor } from '../../../helpers/hair_base.ts';
const { colorization, modules } = CreateHairColor(true);

const bodypart = DefineBodypart({
	name: 'Ponytail',
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
	modules: {
		...modules,
		direction: {
			type: 'typed',
			name: 'Ponytail direction',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'left',
					name: 'Left',
					default: true,
				},
				{
					id: 'right',
					name: 'Right',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Jomshir98 <jomshir98@protonmail.com>',
		credits: ['Titania', 'ClaudiaMia', 'SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Private',
				copyrightHolder: 'QueenTita',
				editedBy: 'ClaudiaMia & SandrinePDR',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});

DefineAsset({
	...bodypart, // Reuse most of bodypart definition
	id: 'body/back_hair_ponytail/wig',
	name: 'Ponytail wig',
	size: 'small',
	attributes: {
		provides: [
			'Wig',
		],
	},
});
