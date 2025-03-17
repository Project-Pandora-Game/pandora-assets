DefineAsset({
	name: 'Leather Thigh Cuffs',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		cuff: {
			name: 'Cuff',
			default: '#222222',
		},
		belt: {
			name: 'Belt',
			default: '#000000',
		},
		smallRings: {
			name: 'Eyelets',
			default: '#FFFFFF',
		},
		largeRings: {
			name: 'D-Rings',
			default: '#FFFFFF',
		},
		chains: {
			name: 'Chains',
			default: '#FFFFFF',
		},
	},
	//size: 250, y:750, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
			'Thigh_cuffs',
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
				blockModules: ['cuffState'],
				stateFlags: {
					requires: {
						chain: 'Locking requires a chain to lock.',
					},
				},
			},
		},
		cuffState: {
			type: 'typed',
			name: 'Cuff states',
			variants: [
				{
					id: 'unchained',
					name: 'No Chain',
					default: true,
				},
				{
					id: 'normal',
					name: 'Chained',
					properties: {
						poseLimits: {
							options: [
								{
									legs: 'sitting',
									bones: {
										leg_l: 4,
										leg_r: 4,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_l: 5,
										leg_r: 5,
									},
								},
								{
									bones: {
										leg_r: 0,
										leg_l: 0,
									},
								},
								{
									legs: 'standing',
									bones: {
										leg_r: -3,
										leg_l: -3,
									},
								},
								{
									legs: 'sitting',
									bones: {
										leg_r: -7,
										leg_l: -7,
									},
								},
								{
									legs: 'kneeling',
									bones: {
										leg_r: -7,
										leg_l: -7,
									},
								},
								{
									legs: 'standing',
									bones: {
										leg_r: -10,
										leg_l: -10,
									},
								},
								{
									legs: 'standing',
									bones: {
										leg_r: [[2, 6]],
										leg_l: [[2, 6]],
									},
								},
							],
						},
						stateFlags: {
							provides: ['chain'],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER fastened ITEM_ASSET_NAME around TARGET_CHARACTER_DYNAMIC_POSSESSIVE thighs.',
		actionRemove: 'SOURCE_CHARACTER loosened and slipped off ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE thighs.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
