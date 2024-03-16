import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Plug Gag',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		gag: {
			name: 'Gag',
			default: '#3C3E42',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
		plug: {
			name: 'Plug',
			default: '#FFFFFF',
		},
	},
	preview: 'plug_preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_insert',
			'Mouth_cover',
		],
		requires: [
			'Mouth_open_wide',
			'!Mouth_cover',
			'!Mouth_protruding',
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
		lockPlug: {
			type: 'lockSlot',
			name: 'Lock for the plug',
			occupiedProperties: {
				blockModules: ['plugState'],
			},
		},
		gagType: {
			type: 'typed',
			name: 'Gag Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
				},
				{
					id: 'thigh',
					name: 'Harness',
				},
			],
		},
		plugState: {
			type: 'typed',
			name: 'Plug Addon',
			variants: [
				{
					id: 'noPlug',
					name: 'No Plug',
					default: true,
					properties: {
						effects: {
							lipsTouch: 9,
							jawMove: 4,
							tongueRoof: 0,
							mouthBreath: 0,
							throatBreath: 0,
							coherency: 0,
							stimulus: 2,
						},
					},
				},
				{
					id: 'plug',
					name: 'Plugged',
					properties: {
						effects: {
							lipsTouch: 9,
							jawMove: 4,
							tongueRoof: 0,
							mouthBreath: 4,
							throatBreath: 1,
							coherency: 5,
							stimulus: 3,
						},
						attributes: {
							requires: [
								'!Mouth_tongue_out',
							],
							covers: [
								'Mouth_item',
							],
						},
					},
				},
				{
					id: 'dildoplug',
					name: 'Plugged with inside Dildo',
					properties: {
						effects: {
							lipsTouch: 9,
							jawMove: 9,
							tongueRoof: 7,
							mouthBreath: 6,
							throatBreath: 4,
							coherency: 7,
							stimulus: 6,
						},
						attributes: {
							provides: [
								'Mouth_insert_deep',
							],
							requires: [
								'!Mouth_tongue_out',
							],
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
		actionAdd: 'SOURCE_CHARACTER strapped a Plug Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE lips.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Plug Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
