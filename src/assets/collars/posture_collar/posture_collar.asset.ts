import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Posture Collar',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		collar: {
			name: 'Collar',
			default: '#ACACB2',
		},
		addon: {
			name: 'Addon',
			default: '#FFFFFF',
		},
	},
	// size:180, y:292, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Collar',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		collarConfig: {
			type: 'typed',
			name: 'Collar Addon',
			variants: [
				{
					id: 'collar',
					name: 'None',
					default: true,
				},
				{
					id: 'ring',
					name: 'Ring',
					properties: {
						attributes: {
							provides: [
								'Collar_front_ring',
							],
						},
					},
				},
				{
					id: 'telescope',
					name: 'Neck-angle telescopic pole',
					properties: {
						attributes: {
							provides: [
								'Collar_front_ring',
							],
						},
					},
				},
			],
		},
		collarType: {
			type: 'typed',
			name: 'Collar Height',
			variants: [
				{
					id: 'low',
					name: 'Low',
					default: true,
				},
				{
					id: 'high',
					name: 'Covering mouth',
					properties: {
						effects: {
							lipsTouch: 0,
							jawMove: 1,
							tongueRoof: 0,
							mouthBreath: 2,
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
		color: {
			type: 'typed',
			name: 'Collar Base Color',
			interactionType: ItemInteractionType.STYLING,
			variants: [
				{
					id: 'black',
					name: 'Black Collar',
					default: true,
				},
				{
					id: 'white',
					name: 'White Collar',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted a Posture Collar around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Posture Collar from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck.',
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
