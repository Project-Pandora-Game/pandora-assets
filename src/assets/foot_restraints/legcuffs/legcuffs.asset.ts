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
	preview: null,
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
					id: 'none',
					name: 'No Chain',
					default: true,
				},
				{
					id: 'long',
					name: 'Long Chain',
					properties: {
						poseLimits: {
							bones: {
								leg_l: -5,
								leg_r: -5,
							},
						},
						stateFlags: {
							provides: ['chain', 'Ankle_cuffs_chain'],
						},
					},
				},
				{
					id: 'short',
					name: 'Short Chain',
					properties: {
						poseLimits: {
							bones: {
								leg_l: -2,
								leg_r: -2,
							},
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
							bones: {
								leg_l: 0,
								leg_r: 0,
							},
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
					id: 'full',
					name: 'Connected to wrists',
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
										leg_l: 0,
										leg_r: 0,
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									bones: {
										leg_l: -2,
										leg_r: -2,
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
								},
								{
									bones: {
										leg_l: -5,
										leg_r: -5,
										arm_r: 88,
										arm_l: 88,
										elbow_r: 20,
										elbow_l: 20,
									},
									options: [
										{ arms: { position: 'front_above_hair' } },
										{ arms: { position: 'front' } },
									],
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
