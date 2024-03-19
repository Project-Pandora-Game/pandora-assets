import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Cloth Gag',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		cloth: {
			name: 'Cloth',
			default: '#FDF3EA',
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
					id: 'standard',
					name: 'Standard',
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
						},
					},
				},
				{
					id: 'cleave',
					name: 'Cleave',
					properties: {
						effects: {
							lipsTouch: 1,
							jawMove: 2,
							tongueRoof: 1,
							mouthBreath: 1,
							throatBreath: 0,
							coherency: 1,
							stimulus: 1,
						},
						attributes: {
							covers: [
								'Mouth_item',
							],
							requires: [
								'!Mouth_protruding',
								'!Mouth_cover',
							],
						},
					},
				},
				{
					id: 'knot',
					name: 'Knot',
					properties: {
						effects: {
							lipsTouch: 3,
							jawMove: 3,
							tongueRoof: 3,
							mouthBreath: 4,
							throatBreath: 2,
							coherency: 2,
							stimulus: 1,
						},
						attributes: {
							covers: [
								'Mouth_item',
							],
							requires: [
								'Mouth_open_wide',
								'!Mouth_protruding',
								'!Mouth_cover',
								'!Mouth_tongue_out',
							],
						},
					},
				},
				{
					id: 'otm',
					name: 'Over Mouth',
					properties: {
						effects: {
							lipsTouch: 0,
							jawMove: 1,
							tongueRoof: 0,
							mouthBreath: 1,
							throatBreath: 0,
							coherency: 0,
							stimulus: 1,
						},
						attributes: {
							covers: [
								'Mouth_item',
							],
						},
					},
				},
				{
					id: 'otn',
					name: 'Over Mouth and Nose',
					properties: {
						effects: {
							lipsTouch: 0,
							jawMove: 1,
							tongueRoof: 0,
							mouthBreath: 1,
							throatBreath: 0,
							coherency: 0,
							stimulus: 1,
						},
						attributes: {
							covers: [
								'Mouth_item',
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER wrapped a layer of cloth around TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
		actionRemove: 'SOURCE_CHARACTER unwrapped the cloth gag from around TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
