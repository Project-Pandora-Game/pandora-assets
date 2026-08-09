import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Latex Hood',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		hood: {
			name: 'Hood',
			default: '#020202',
		},
		lenses: {
			name: 'Lenses',
			default: '#bbbbbb',
		},
		reflection: {
			name: 'Reflection',
			default: '#FFFFFF',
			minAlpha: 0,
		},
	},
	// size:200, y:195, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Headgear',
			'Headgear_hood',
			'Ear_item',
			'Ear_cover',
		],
		hides: [
			'Hair',
			'Wig',
			'Ears',
			'Fantasy_ears',
		],
		covers: [
			'Ear_item',
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
		mouth: {
			type: 'typed',
			name: 'Mouth cover',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'open',
					name: 'Uncovered',
					default: true,
				},
				{
					id: 'closed',
					name: 'Covered',
					properties: {
						attributes: {
							provides: [
								'Restraint_mouth',
								'Mouth_item',
								'Mouth_cover',
							],
							requires: [
								'!Mouth_protruding',
								'!Mouth_tongue_out',
							],
							covers: [
								'Mouth_item',
								'Restraint_mouth',
							],
						},
						effects: {
							lipsTouch: 1,
							jawMove: 2,
							tongueRoof: 0,
							mouthBreath: 1,
							throatBreath: 0,
							coherency: 0,
							stimulus: 1,
						},
					},
				},
			],
		},
		eyes: {
			type: 'typed',
			name: 'Eyes cover',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'open',
					name: 'Uncovered',
					default: true,
				},
				{
					id: 'lenses',
					name: 'Distortion Lenses',
					properties: {
						attributes: {
							provides: [
								'Restraint_eyes',
							],
							covers: [
								'Restraint_eyes',
							],
						},
						effects: {
							blurVision: 4,
						},
					},
				},
				{
					id: 'light',
					name: 'Slight transparency',
					properties: {
						attributes: {
							provides: [
								'Restraint_eyes',
							],
							covers: [
								'Restraint_eyes',
							],
						},
						effects: {
							blind: 9.5,
						},
					},
				},
				{
					id: 'full',
					name: 'Fully blinding',
					properties: {
						attributes: {
							provides: [
								'Restraint_eyes',
							],
							covers: [
								'Restraint_eyes',
							],
						},
						effects: {
							blind: 10,
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pulled ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE head, covering the head.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE head.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia', 'Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
			{
				source: 'Self-Made',
				part: 'Lenses',
				copyrightHolder: 'Sandrine',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-NoModify-v1-or-later',
			},
		],
	},
});
