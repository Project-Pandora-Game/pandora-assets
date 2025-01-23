import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Duct Tape Gag',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		tape: {
			name: 'Tape',
			default: '#FFFFFF',
		},
	},
	// size:200, y:197, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
		],
	},
	modules: {
		gagType: {
			type: 'typed',
			name: 'Gag Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'single',
					name: 'Single Stripe',
					default: true,
					properties: {
						effects: {
							lipsTouch: 0,
							jawMove: 1,
							tongueRoof: 0,
							mouthBreath: 1,
							throatBreath: 0,
							coherency: 0,
							stimulus: 0,
						},
						attributes: {
							covers: [
								'Mouth_item',
							],
							requires: [
								'!Mouth_protruding',
							],
						},
					},
				},
				{
					id: 'cross',
					name: 'Cross',
					properties: {
						effects: {
							lipsTouch: 0,
							jawMove: 2,
							tongueRoof: 0,
							mouthBreath: 1,
							throatBreath: 0,
							coherency: 0,
							stimulus: 0,
						},
						attributes: {
							covers: [
								'Mouth_item',
							],
							requires: [
								'!Mouth_protruding',
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER sealed TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth with duct tape.',
		actionRemove: 'SOURCE_CHARACTER ripped the tape from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['SandrinePDR'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
