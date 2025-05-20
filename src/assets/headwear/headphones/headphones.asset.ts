import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Headphones',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		headphones: {
			name: 'Headphones',
			default: '#93A7CE',
		},
		headband: {
			name: 'Headband',
			default: '#EAD1EF',
		},
		ears: {
			name: 'Ears',
			default: '#EAD1EF',
		},
	},
	assetPreferenceDefault: 'maybe',
	// size:210, y:176, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Headgear',
			'Restraint',
			'Ear_item',
			'Ear_cover',
		],
		hides: ['Ears'],
	},
	modules: {
		noise: {
			type: 'typed',
			name: 'Noise canceling',
			variants: [
				{
					id: 'off',
					name: 'Off',
					default: true,
				},
				{
					id: 'weak',
					name: 'Weak',
					properties: {
						effects: {
							distortion: 6,
							frequencyLoss: 5,
							vowelLoss: 2,
							middleLoss: 2,
						},
						attributes: {
							provides: [
								'Restraint_ears',
							],
						},
					},
				},
				{
					id: 'strong',
					name: 'Strong',
					properties: {
						effects: {
							distortion: 8,
							frequencyLoss: 8,
							vowelLoss: 7,
							middleLoss: 6,
						},
						attributes: {
							provides: [
								'Restraint_ears',
							],
						},
					},
				},
				{
					id: 'very',
					name: 'Very strong',
					properties: {
						effects: {
							distortion: 10,
							frequencyLoss: 10,
							vowelLoss: 10,
							middleLoss: 10,
						},
						attributes: {
							provides: [
								'Restraint_ears',
							],
						},
					},
				},
			],
		},
		style: {
			type: 'typed',
			name: 'Headband style',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'normal',
					name: 'Normal',
					default: true,
				},
				{
					id: 'ears',
					name: 'With ears',
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Headband flexibility lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		config: {
			type: 'lockSlot',
			name: 'Digital lock: Noise canceling config',
			lockedProperties: {
				blockModules: ['noise'],
			},
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model',
				source: 'https://skfb.ly/oAzKn',
				copyrightHolder: 'Toxic',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'images',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
