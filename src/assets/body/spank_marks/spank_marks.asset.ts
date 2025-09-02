import { ItemInteractionType } from 'pandora-common';

DefineBodypart({
	name: 'Spank Marks',
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
	// size:400, y:440, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Body_texture',
			'Bodymark',
		],
	},
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
		backColor: {
			type: 'typed',
			name: 'Above Butt Color',
			expression: 'Above Butt Color',
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
		stomachColor: {
			type: 'typed',
			name: 'Stomach Color',
			expression: 'Stomach Color',
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
		thighsFrontColor_l: {
			type: 'typed',
			name: 'Left Front Thigh Color',
			expression: 'Left Front Thigh Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
			],
		},
		thighsFrontColor_r: {
			type: 'typed',
			name: 'Right Front Thigh Color',
			expression: 'Right Front Thigh Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
			],
		},
		thighsBackColor_l: {
			type: 'typed',
			name: 'Left Back Thigh Color',
			expression: 'Left Back Thigh Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
				},
			],
		},
		thighsBackColor_r: {
			type: 'typed',
			name: 'Right Back Thigh Color',
			expression: 'Right Back Thigh Color',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'noColor',
					name: 'None',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'strong',
					name: 'Strong',
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
