DefineAsset({
	name: 'Leash Handle',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		leash: {
			name: 'Leash',
			default: '#FF6565',
		},
		handle: {
			name: 'Handle',
			default: '#FF6565',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
		requires: [
			'!Hand_restricting_cover',
		],
	},
	modules: {
		handUsage_r: {
			type: 'typed',
			name: 'Right hand handle',
			variants: [
				{
					id: 'no',
					name: 'No handle',
				},
				{
					id: 'down',
					name: 'Leash hanging',
					default: true,
					properties: {
						poseLimits: {
							bones: {
								arm_r: 74,
								elbow_r: 15,
							},
							rightArm: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
				},
				{
					id: 'right',
					name: 'Leash left',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 74,
								elbow_r: 15,
							},
							rightArm: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
				},
				{
					id: 'left',
					name: 'Leash right',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 74,
								elbow_r: 15,
							},
							rightArm: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Left hand handle',
			variants: [
				{
					id: 'no',
					name: 'No handle',
					default: true,
				},
				{
					id: 'down',
					name: 'Leash hanging',
					properties: {
						poseLimits: {
							bones: {
								arm_l: 74,
								elbow_l: 15,
							},
							rightArm: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
				},
				{
					id: 'left',
					name: 'Leash left',
					properties: {
						poseLimits: {
							bones: {
								arm_l: 74,
								elbow_l: 15,
							},
							rightArm: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
				},
				{
					id: 'right',
					name: 'Leash right',
					properties: {
						poseLimits: {
							bones: {
								arm_l: 74,
								elbow_l: 15,
							},
							rightArm: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
				},
			],
		},
		type: {
			type: 'typed',
			name: 'Leash Type',
			variants: [
				{
					id: 'pet',
					name: 'Pet leash',
					default: true,
				},
				{
					id: 'chain',
					name: 'Chain leash',
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME into TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
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
