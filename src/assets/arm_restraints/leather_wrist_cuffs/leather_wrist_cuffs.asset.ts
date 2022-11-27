import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Leather Wrist Cuffs',
	size: 'small',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Cuff',
			default: '#222222',
		},
		{
			name: 'Belt',
			default: '#000000',
		},
		{
			name: 'Small Rings',
			default: '#FFFFFF',
		},
		{
			name: 'Chain',
			default: '#FFFFFF',
		},
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockAddRemove: true,
			},
		},
		lockChain: {
			type: 'lockSlot',
			name: 'Lock for cuff chains',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				requirements: ['Wrist_cuffs_chain'],
			},
		},
		cuffState: {
			type: 'typed',
			name: 'Cuff states',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'unchained',
					name: 'No Chain',
					default: true,
				},
				{
					id: 'front',
					name: 'Chained',
					poseLimits: {
						forcePose: {
							arm_r: 74,
							arm_l: 74,
							elbow_r: 43,
							elbow_l: 43,
						},
					},
					attributes: [
						'Wrist_cuffs_chain',
					],
				},
				{
					id: 'overhead',
					name: 'Chained Overhead',
					poseLimits: {
						forcePose: {
							arm_r: -74,
							arm_l: -74,
							elbow_r: -43,
							elbow_l: -43,
						},
					},
					attributes: [
						'Wrist_cuffs_chain',
					],
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened the leather cuffs around TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
		actionRemove: 'SOURCE_CHARACTER loosened and slipped off the leather cuffs from TARGET_CHARACTER_DYNAMIC_POSSESSIVE wrists.',
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
