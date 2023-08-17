import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Spank Marks',
	size: 'bodypart',
	bodypart: 'bodymarks',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		blush: {
			name: 'Color',
			default: '#DC8275F0',
			minAlpha: 0.1,
		},
		print: {
			name: 'Hand print Color',
			default: '#F6B3A7BC',
			minAlpha: 0.1,
		},
	},
	attributes: [
		'Body_texture',
		'Bodymark',
	],
	modules: {
		buttColor_l: {
			type: 'typed',
			name: 'Left Butt Cheek Color',
			expression: 'Left Butt Cheek Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'faint',
					name: 'Faint',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
				{
					id: 'extreme',
					name: 'Extreme',
				},
				{
					id: 'printOut',
					name: 'Hand print outside',
				},
				{
					id: 'printIn',
					name: 'Hand print inside',
				},
			],
		},
		buttColor_r: {
			type: 'typed',
			name: 'Right Butt Cheek Color',
			expression: 'Right Butt Cheek Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'faint',
					name: 'Faint',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
				{
					id: 'extreme',
					name: 'Extreme',
				},
				{
					id: 'printOut',
					name: 'Hand print outside',
				},
				{
					id: 'printIn',
					name: 'Hand print inside',
				},
			],
		},
		breastColor_l: {
			type: 'typed',
			name: 'Left Breast Color',
			expression: 'Left Breast Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Colored',
				},
			],
		},
		breastColor_r: {
			type: 'typed',
			name: 'Right Breast Color',
			expression: 'Right Breast Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Colored',
				},
			],
		},
		sexColor: {
			type: 'typed',
			name: 'Sex Color',
			expression: 'Sex Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Colored',
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
