import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Panel Gag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		panel: {
			name: 'Panel',
			default: '#353535',
			minAlpha: 0.5,
		},
		straps: {
			name: 'Straps',
			default: '#353535',
			minAlpha: 0.5,
		},
		metal: {
			name: 'Metal',
			default: '#F0F0F0',
		},
		ball: {
			name: 'Ball',
			default: '#D52828',
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_cover',
		],
		requires: [
			'!Mouth_tongue_out',
			'!Mouth_protruding',
		],
		covers: [
			'Mouth_item',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		ballgag: {
			type: 'typed',
			name: 'Ball Gag',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'false',
					name: 'No',
					default: true,
				},
				{
					id: 'true',
					name: 'Yes',
					properties: {
						attributes: {
							provides: [
								'Mouth_insert',
							],
							requires: [
								'Mouth_open_wide',
								'!Mouth_cover',
							],
						},
						effects: {
							lipsTouch: 7,
							tongueRoof: 6,
						},
					},
				},
			],
		},
	},
	effects: {
		lipsTouch: 1,
		jawMove: 8,
		mouthBreath: 7,
		throatBreath: 2,
		coherency: 4,
		stimulus: 2,
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
