DefineAsset({
	name: 'Leg Cuffs',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		cuffs: {
			name: 'Cuffs',
			default: '#FFFFFF',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [250, -1, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
			'Ankle_cuffs',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock cuffs',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		lockChain: {
			type: 'lockSlot',
			name: 'Lock for cuff chain',
			lockedProperties: {
				blockModules: ['chainState'],
				stateFlags: {
					requires: {
						chain: 'Locking requires a chain to lock.',
					},
				},
			},
		},
		lockConnector: {
			type: 'lockSlot',
			name: 'Lock for connecting chain',
			lockedProperties: {
				blockModules: ['connectors'],
				stateFlags: {
					requires: {
						connector: 'Locking requires a chain to lock.',
					},
				},
			},
		},
		chainState: {
			type: 'typed',
			name: 'Chains',
			variants: [
				{
					id: 'long',
					name: 'Long Chain',
					default: true,
					properties: {
						poseLimits: {
							options: [
								{
									bones: {
										leg_l: [[-10, 0]],
										leg_r: [[-10, 0]],
									},
									legs: {
										pose: ['standing', 'sitting'],
									},
								},
								{
									bones: {
										leg_l: 0,
										leg_r: 0,
									},
									legs: {
										pose: 'kneeling',
									},
								},
							],
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
				{
					id: 'short',
					name: 'Short Chain',
					properties: {
						poseLimits: {
							options: [
								{
									bones: {
										leg_l: [[-2, 0]],
										leg_r: [[-2, 0]],
									},
									legs: {
										pose: ['standing', 'sitting'],
									},
								},
								{
									bones: {
										leg_l: 0,
										leg_r: 0,
									},
									legs: {
										pose: 'kneeling',
									},
								},
							],
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
				{
					id: 'clipped',
					name: 'Clipped together',
					properties: {
						poseLimits: {
							options: [
								{
									bones: {
										leg_l: 1,
										leg_r: 1,
									},
									legs: {
										pose: ['standing', 'sitting'],
									},
								},
								{
									bones: {
										leg_l: 5,
										leg_r: 5,
									},
									legs: {
										pose: 'kneeling',
									},
								},
							],
						},
						stateFlags: {
							provides: ['chain'],
						},
						effects: {
							blockRoomMovement: true,
						},
					},
				},
			],
		},
		connectors: {
			type: 'typed',
			name: 'Body chain',
			variants: [
				{
					id: 'notConnected',
					name: 'No connection',
					default: true,
				},
				{
					id: 'front',
					name: 'Connected to wrists in front',
					properties: {
						attributes: {
							requires: ['Wrist_cuffs_front'],
						},
						stateFlags: {
							requires: {
								connector: 'Hands need to be cuffed in front to be connected to the ankle chain.',
								chain: 'The cuffs must be connected by a chain.',
							},
							provides: ['connector'],
						},
						poseLimits: {
							options: [
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: 5,
										leg_r: 5,
									},
								},
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: [[0, 1]],
										leg_r: [[0, 1]],
									},
								},
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: -2,
										leg_r: -2,
									},
								},
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: -5,
										leg_r: -5,
									},
								},
							],
						},
					},
				},
				{
					id: 'back',
					name: 'Connected to wrists behind',
					properties: {
						attributes: {
							requires: ['Wrist_cuffs_back'],
						},
						stateFlags: {
							requires: {
								connector: 'Hands need to be cuffed behind to be connected to the ankle chain.',
								chain: 'The cuffs must be connected by a chain.',
							},
							provides: ['connector'],
						},
						poseLimits: {
							options: [
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: 5,
										leg_r: 5,
									},
								},
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: [[0, 1]],
										leg_r: [[0, 1]],
									},
								},
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: -2,
										leg_r: -2,
									},
								},
								{
									bones: {
										arm_l: [[-9, 180]],
										arm_r: [[-9, 180]],
										elbow_l: [[-13, 161]],
										elbow_r: [[-13, 161]],
										leg_l: -5,
										leg_r: -5,
									},
								},
							],
						},
					},
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['taja', 'Sandrine'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
