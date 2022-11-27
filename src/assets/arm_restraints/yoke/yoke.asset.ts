import { ArmsPose } from 'pandora-common';

DefineAsset({
	name: 'Yoke',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Collar',
			default: '#FFFFFF',
		},
		{
			name: 'Ring',
			default: '#FFFFFF',
		},
		{
			name: 'Chains',
			default: '#FFFFFF',
		},
		{
			name: 'Socket',
			default: '#FFFFFF',
		},
		{
			name: 'Bar',
			default: '#FFFFFF',
		},
		{
			name: 'Cuffs',
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
		lockCollar: {
			type: 'lockSlot',
			name: 'Lock for collar leash',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockModules: ['collarConfig'],
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
				},
				{
					id: 'left',
					name: 'Chain Leash Left',
				},
				{
					id: 'right',
					name: 'Chain Leash Right',
				},
				{
					id: 'fixed',
					name: 'Long Floor Chain Standing',
					poseLimits: {
						forcePose: {
							sitting: 0,
							kneeling: 0,
						},
					},
					effects: {
						blockRoomMovement: true,
					},
				},
				{
					id: 'fixedKneeling',
					name: 'Long Floor Chain Kneeling',
					poseLimits: {
						forcePose: {
							sitting: 0,
							kneeling: 180,
						},
					},
					effects: {
						blockRoomMovement: true,
					},
				},
				{
					id: 'fixedKneelingShort',
					name: 'Short Floor Chain Kneeling',
					poseLimits: {
						forcePose: {
							sitting: 0,
							kneeling: 180,
						},
					},
					effects: {
						blockRoomMovement: true,
					},
				},
			],
		},
		yokeWidth: {
			type: 'typed',
			name: 'Yoke Width',
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
					poseLimits: {
						forceArms: ArmsPose.FRONT,
						forcePose: {
							arm_r: 30,
							arm_l: 30,
							elbow_r: -119,
							elbow_l: -119,
						},
					},
				},
				{
					id: 'narrow',
					name: 'Narrow',
					poseLimits: {
						forceArms: ArmsPose.BACK,
						forcePose: {
							arm_r: 3,
							arm_l: 3,
							elbow_r: -153,
							elbow_l: -153,
						},
					},
				},
				{
					id: 'wide',
					name: 'Wide',
					poseLimits: {
						forceArms: ArmsPose.BACK,
						forcePose: {
							arm_r: 17,
							arm_l: 17,
							elbow_r: -67,
							elbow_l: -67,
						},
					},
				},
			],
		},
	},
	effects: {
		blockHands: true,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fitted and closed a Yoke around TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck and closed the cuffs around both wrists.',
		actionRemove: 'SOURCE_CHARACTER opened and then removed the Yoke from TARGET_CHARACTER_DYNAMIC_POSSESSIVE neck and wrists.',
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
