import { ItemInteractionType } from 'pandora-common';

DefineBodypart({
	name: 'Rope Marks',
	bodypart: 'bodymarks',
	graphics: 'graphics.json',
	colorization: {
		mark: {
			name: 'Color',
			default: '#F94B3356',
			minAlpha: 0.1,
		},
	},
	// size:320, y:383, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Body_texture',
			'Bodymark',
		],
	},
	modules: {
		upperarms: {
			type: 'typed',
			name: 'Upper Arms Marks',
			expression: 'Upper Arms Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'elbow',
					name: 'Elbow',
				},
				{
					id: 'shoulder',
					name: 'Shoulder',
				},
				{
					id: 'both',
					name: 'Both',
				},
			],
		},
		forearms: {
			type: 'typed',
			name: 'Fore Arms Marks',
			expression: 'Fore Arms Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrists',
					name: 'Wrists',
				},
				{
					id: 'fore',
					name: 'Fore Arms',
				},
			],
		},
		chest: {
			type: 'typed',
			name: 'Upper Body Marks',
			expression: 'Upper Body Marks',
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
					id: 'two',
					name: 'Two',
				},
				{
					id: 'three',
					name: 'Three',
				},
			],
		},
		lower_body: {
			type: 'typed',
			name: 'Lower Body Marks',
			expression: 'Lower Body Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'waist',
					name: 'Waist',
				},
				{
					id: 'hips',
					name: 'Hips',
				},
				{
					id: 'both',
					name: 'Both',
				},
			],
		},
		thighs: {
			type: 'typed',
			name: 'Thighs Marks',
			expression: 'Thighs Marks',
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
					id: 'two',
					name: 'Two',
				},
				{
					id: 'three',
					name: 'Three',
				},
			],
		},
		legs: {
			type: 'typed',
			name: 'Legs Marks',
			expression: 'Legs Marks',
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
					id: 'two',
					name: 'Two',
				},
				{
					id: 'three',
					name: 'Three',
				},
				{
					id: 'four',
					name: 'Four',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
