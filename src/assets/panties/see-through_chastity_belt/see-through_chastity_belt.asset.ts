import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'See-through Chastity Belt',
	size: 'medium',
	graphics: 'graphics.json',
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
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			assetSpecific: undefined,
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		lockPlate: {
			type: 'lockSlot',
			name: 'Lock for crotch covers',
			assetSpecific: undefined,
			occupiedProperties: {
				blockModules: ['crotchPlate'],
			},
		},
		beltType: {
			type: 'typed',
			name: 'Belt Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			assetSpecific: undefined,
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
			assetSpecific: undefined,
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
								'!Vulva_protruding',
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
								'!Vulva_protruding',
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
