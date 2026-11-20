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
		handUsage: {
			type: 'typed',
			name: 'Held in hand',
			variants: [
				{
					id: 'held_r',
					name: 'Right',
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
					id: 'held_l',
					name: 'Left',
					properties: {
						poseLimits: {
							bones: {
								arm_l: 74,
								elbow_l: 15,
							},
							leftArm: {
								position: 'front',
								rotation: 'forward',
								fingers: 'spread',
							},
						},
					},
				},
			],
		},
		leash: {
			type: 'typed',
			name: 'Leash Variant',
			variants: [
				{
					id: 'down',
					name: 'Leash hanging',
					default: true,
				},
				{
					id: 'right',
					name: 'Leash left',
				},
				{
					id: 'left',
					name: 'Leash right',
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
