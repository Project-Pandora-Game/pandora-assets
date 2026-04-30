import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Padded Blindfold',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		blindfold: {
			name: 'Blindfold',
			default: '#404040',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-155, -20, 0],
	},
	// size:200, y:197, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_eyes',
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
		placement: {
			type: 'typed',
			name: 'Blindfold Placement',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'standard',
					name: 'Over the eyes',
					default: true,
					properties: {
						stateFlags: {
							provides: [
								'placement_standard',
							],
						},
					},
				},
				{
					id: 'forehead',
					name: 'On the forehead',
				},
			],
		},
		blinding: {
			type: 'typed',
			name: 'Blinding Strictness',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'light',
					name: 'Thin Padding',
					default: true,
					properties: {
						stateFlags: {
							provides: [
								'blinding_light',
							],
						},
					},
				},
				{
					id: 'full',
					name: 'Thick Padding',
					properties: {
						stateFlags: {
							provides: [
								'blinding_full',
							],
						},
					},
				},
			],
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['placement_standard', 'blinding_light'],
			properties: {
				effects: {
					blind: 9.4,
				},
			},
		},
		{
			requiredFlags: ['placement_standard', 'blinding_full'],
			properties: {
				effects: {
					blind: 10,
				},
			},
		},
	],
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
