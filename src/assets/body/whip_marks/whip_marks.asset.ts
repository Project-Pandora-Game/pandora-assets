import { ItemInteractionType } from 'pandora-common';

DefineBodypart({
	name: 'Cane Marks',
	bodypart: 'bodymarks',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		mark: {
			name: 'Color',
			default: '#F36954B3',
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
			name: 'Left Butt Marks',
			expression: 'Left Butt Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'few',
					name: 'Few',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
				{
					id: 'many',
					name: 'Many',
				},
				{
					id: 'fading',
					name: 'Many- Fading',
				},
			],
		},
		buttColor_r: {
			type: 'typed',
			name: 'Right Butt Marks',
			expression: 'Right Butt Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'few',
					name: 'Few',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
				{
					id: 'many',
					name: 'Many',
				},
				{
					id: 'fading',
					name: 'Many- Fading',
				},
			],
		},
		bthighColor_l: {
			type: 'typed',
			name: 'Left Thigh Marks Back',
			expression: 'Left Thigh Marks Back',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		bthighColor_r: {
			type: 'typed',
			name: 'Right Thigh Marks Back',
			expression: 'Right Thigh Marks Back',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		soleColor_l: {
			type: 'typed',
			name: 'Left Sole Marks',
			expression: 'Left Sole Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
				{
					id: 'many',
					name: 'Many',
				},
			],
		},
		soleColor_r: {
			type: 'typed',
			name: 'Right Sole Marks',
			expression: 'Right Sole Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
				{
					id: 'many',
					name: 'Many',
				},
			],
		},
		backColor: {
			type: 'typed',
			name: 'Back Marks',
			expression: 'Back Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		fthighColor_l: {
			type: 'typed',
			name: 'Left Thigh Marks Front',
			expression: 'Left Thigh Marks Front',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		fthighColor_r: {
			type: 'typed',
			name: 'Right Thigh Marks Front',
			expression: 'Right Thigh Marks Front',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		breastColor_l: {
			type: 'typed',
			name: 'Left Breast Marks',
			expression: 'Left Breast Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'few',
					name: 'Few',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		breastColor_r: {
			type: 'typed',
			name: 'Right Breast Marks',
			expression: 'Right Breast Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'few',
					name: 'Few',
				},
				{
					id: 'multi',
					name: 'Multiple',
				},
			],
		},
		sexColor: {
			type: 'typed',
			name: 'Sex Marks',
			expression: 'Sex Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'multi',
					name: 'Multiple',
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
