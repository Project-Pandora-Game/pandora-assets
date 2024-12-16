import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Pet Crawler Armbinders',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		binders: {
			name: 'Binders',
			default: '#1D1C20ff',
			minAlpha: 0,
		},
		shine: {
			name: 'Shine',
			default: '#ccccccdd',
			minAlpha: 0,
		},
		belts: {
			name: 'Belts',
			default: '#030303',
		},
		rings: {
			name: 'Metallic parts',
			default: '#cccccc',
		},
	},
	// size:280, y:370, centered
	preview: 'preview.png',
	attributes: {
		provides: [
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
		position: {
			type: 'typed',
			name: 'Arms position',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'inwards',
					name: 'Inwards',
					default: true,
					properties: {
						poseLimits: {
							bones: {
								elbow_r: 168,
								elbow_l: 168,
							},
						},
					},
				},
				{
					id: 'outwards',
					name: 'Outwards',
					properties: {
						poseLimits: {
							bones: {
								elbow_r: -160,
								elbow_l: -160,
							},
						},
					},
				},
			],
		},
	},
	poseLimits: {
		options: [
			{
				arms: {
					rotation: 'up',
				},
			},
			{
				arms: {
					rotation: 'backward',
				},
			},
		],
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER slipped a pet crawler armbinder over each of TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms and tightened them into pet leg position.',
		actionRemove: 'SOURCE_CHARACTER loosened and then slipped off the pet crawler armbinders from TARGET_CHARACTER_DYNAMIC_POSSESSIVE arms.',
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
