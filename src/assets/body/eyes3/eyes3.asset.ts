import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Eyes 3',
	size: 'bodypart',
	bodypart: 'eyes',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Eye color',
			default: '#7e6ae0',
		},
		{
			name: 'Lashes',
			default: '#555555',
		},
		{
			name: 'Eye background',
			default: '#FFFFFF',
		},
		{
			name: 'Shine',
			default: '#FFFFFF',
		},
	],
	modules: {
		pupilType: {
			type: 'typed',
			name: 'Pupil Types',
			expression: 'Eye Pupil Types',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'largePupils',
					name: 'Large Pupils',
					default: true,
				},
				{
					id: 'smallPupils',
					name: 'Small Pupils',
				},
				{
					id: 'starPupils',
					name: 'Star-shaped Pupils',
				},
				{
					id: 'crossPupils',
					name: 'Cross-shaped Pupils',
				},
				{
					id: 'noPupils',
					name: 'No Pupils',
				},
			],
		},
		eyeState_l: {
			type: 'typed',
			name: 'Left Eye Open/Close',
			expression: 'Left Eye Open/Close',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'normal',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
				},
			],
		},
		eyeState_r: {
			type: 'typed',
			name: 'Right Eye Open/Close',
			expression: 'Right Eye Open/Close',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'normal',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
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
