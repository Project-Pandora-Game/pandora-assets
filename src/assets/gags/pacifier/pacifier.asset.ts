DefineAsset({
	name: 'Pacifier',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#FFA4BA',
			minAlpha: 0.3,
		},
		button: {
			name: 'Button',
			default: '#F9F9F9',
			minAlpha: 0.3,
		},
		handle: {
			name: 'Handle',
			default: '#FCFCFC',
			minAlpha: 0.3,
		},
		metal: {
			name: 'Metal',
			default: '#DDD6D6',
		},
		straps: {
			name: 'Straps',
			default: '#F07B9B',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_insert',
			'Mouth_cover',
		],
		requires: [
			'Mouth_open_wide',
			'!Mouth_tongue_out',
			'!Mouth_protruding',
			'!Mouth_cover',
		],
		covers: [
			'Mouth_item',
		],
	},
	modules: {
		straps: {
			type: 'typed',
			name: 'Straps',
			variants: [
				{
					id: 'off',
					name: 'None',
					default: true,
				},
				{
					id: 'on',
					name: 'Straps',
					properties: {
						stateFlags: {
							provides: ['straps'],
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['straps'],
				stateFlags: {
					requires: {
						straps: 'Cannot be locked without straps present',
					},
				},
			},
		},
	},
	effects: {
		lipsTouch: 3,
		jawMove: 1,
		coherency: 1,
		stimulus: 1,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER placed ITEM_ASSET_NAME in TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
		actionRemove: 'SOURCE_CHARACTER removed the ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
	},
	ownership: {
		responsibleContributor: 'Livie53 <itsalive53.cr1mson@gmail.com>',
		credits: ['Livie53'],
		modificationPolicy: 'Free to change',
		reusePolicy: 'Free to use',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Livie53',
				editedBy: 'Livie53',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
