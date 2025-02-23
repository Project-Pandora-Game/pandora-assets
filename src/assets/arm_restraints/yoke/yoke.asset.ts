import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Yoke',
	size: 'medium',
	graphics: 'graphics.json',
	requireFreeHandsToUseDefault: true,
	colorization: {
		collar: {
			name: 'Collar',
			default: '#FFFFFF',
		},
		ring: {
			name: 'Ring',
			default: '#FFFFFF',
		},
		bar: {
			name: 'Bar',
			default: '#FFFFFF',
		},
		cuffs: {
			name: 'Cuffs',
			default: '#FFFFFF',
		},
	},
	// size:520, y:144, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Collar',
			'Restraint',
			'Restraint_arms',
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
			name: 'Collar Configuration',
			variants: [
				{
					id: 'collar',
					name: 'Collar Only',
					default: true,
				},
				{
					id: 'ring',
					name: 'Collar + Ring',
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
		yokeWidth: {
			type: 'typed',
			name: 'Yoke Width',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					properties: {
						poseLimits: {
							arms: {
								position: 'front',
								rotation: 'up',
							},
							bones: {
								arm_r: 30,
								arm_l: 30,
								elbow_r: -119,
								elbow_l: -119,
							},
						},
					},
				},
				{
					id: 'narrow',
					name: 'Narrow',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'up',
							},
							bones: {
								arm_r: 3,
								arm_l: 3,
								elbow_r: -153,
								elbow_l: -153,
							},
						},
					},
				},
				{
					id: 'wide',
					name: 'Wide',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'up',
							},
							bones: {
								arm_r: 17,
								arm_l: 17,
								elbow_r: -67,
								elbow_l: -67,
							},
						},
					},
				},
			],
		},
	},
	poseLimits: {
		armsOrder: {
			upper: 'left',
		},
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck and closed the cuffs around both wrists.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck and wrists.',
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
