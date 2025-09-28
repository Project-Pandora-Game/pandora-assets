DefineAsset({
	name: 'Lotion Bottle',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		nozzle: {
			name: 'Nozzle',
			default: '#020202',
		},
		bottle: {
			name: 'Bottle',
			default: '#FFFFFF',
			minAlpha: 0.8,
		},
		lotion: {
			name: 'Lotion',
			default: '#F180CC',
			minAlpha: 0.5,
		},
	},
	// size:200, y:475, X:500
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
			name: 'Held in right hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					properties: {
						poseLimits: {
							rightArm: {
								fingers: 'fist',
								rotation: 'down',
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		handUsage_l: {
			type: 'typed',
			name: 'Held in left hand',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						poseLimits: {
							leftArm: {
								fingers: 'fist',
								rotation: 'down',
							},
						},
					},
				},
				{
					id: 'no',
					name: 'No',
					default: true,

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
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'lotion',
				source: 'https://emojis.sh/emoji/shampoo-bottle-dufUVuEuun',
				copyrightHolder: 'emojis.sh',
				editedBy: 'Sandrine',
				license: 'CC0',
			},
		],
	},
});
