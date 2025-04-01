DefineAsset({
	name: 'Hair Brush',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		brush: {
			name: 'Brush',
			default: '#DBB68F',
		},
	},
	// size:400, y:217, X:0
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
			name: 'Right hand brush',
			variants: [
				{
					id: 'no',
					name: 'No Brush',
				},
				{
					id: 'front',
					name: 'Front',
					default: true,
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
				{
					id: 'back',
					name: 'Back',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
				{
					id: 'inwards',
					name: 'Inwards',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
				{
					id: 'outwards',
					name: 'Outwards',
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Left hand brush',
			variants: [
				{
					id: 'no',
					name: 'No Brush',
					default: true,
				},
				{
					id: 'front',
					name: 'Front',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
				{
					id: 'back',
					name: 'Back',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
				{
					id: 'inwards',
					name: 'Inwards',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
				{
					id: 'outwards',
					name: 'Outwards',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'up',
							},
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME into TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE hand.',
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'brush',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
