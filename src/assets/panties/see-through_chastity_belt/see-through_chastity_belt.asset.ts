import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'See-through Chastity Belt',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		belt: {
			name: 'Belt Frame',
			default: '#AEB9B8',
		},
		cover: {
			name: 'Belt Cover',
			default: '#AEB9B88B',
			minAlpha: '25%',
		},
		buckle: {
			name: 'Buckle',
			default: '#C5D8D4',
		},
	},
	// size:240, y:569, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Chastity',
			'Belt_chainable',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		lockPlate: {
			type: 'lockSlot',
			name: 'Lock for crotch covers',
			lockedProperties: {
				blockModules: ['crotchPlate'],
			},
		},
		beltType: {
			type: 'typed',
			name: 'Belt Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'female',
					name: 'Female',
					default: true,
					properties: {
						attributes: {
							requires: [
								'!Penis',
							],
						},
					},
				},
				{
					id: 'male',
					name: 'Male',
					properties: {
						attributes: {
							requires: [
								'Penis',
							],
						},
					},
				},
			],
		},
		crotchPlate: {
			type: 'typed',
			name: 'Crotch Cover',
			variants: [
				{
					id: 'open',
					name: 'None',
					default: true,
				},
				{
					id: 'front',
					name: 'Front Covered',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
							],
							covers: [
								'Vulva_item',
							],
							requires: [
								'!Crotch_protruding',
								'!Penis_erect',
							],
							hides: [
								'Toy_clamps_genital',
							],
						},
					},
				},
				{
					id: 'back',
					name: 'Back Covered',
					properties: {
						attributes: {
							provides: [
								'Anus_cover',
							],
							covers: [
								'Anus_item',
							],
							requires: [
								'!Anus_protruding',
							],
						},
					},
				},
				{
					id: 'both',
					name: 'Both Covered',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Anus_cover',
							],
							covers: [
								'Vulva_item',
								'Anus_item',
							],
							requires: [
								'!Crotch_protruding',
								'!Penis_erect',
								'!Anus_protruding',
							],
							hides: [
								'Toy_clamps_genital',
							],
						},
					},
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
