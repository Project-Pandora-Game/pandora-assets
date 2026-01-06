import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Wrist Bracelets',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		bracelets: {
			name: 'Bracelets',
			default: '#FFDF87',
		},
	},
	// size:200, y:350, not centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Accessory',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: ['worn_l', 'worn_r'],
			},
		},
		pendantType: {
			type: 'typed',
			name: 'Bracelet Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'chains',
					name: 'Chains',
					default: true,
				},
				{
					id: 'ornate',
					name: 'Ornate',
				},
				{
					id: 'decahedron',
					name: 'Decahedron',
				},
				{
					id: 'gemstones',
					name: 'Gemstones',
				},
			],
		},
		worn_l: {
			type: 'typed',
			name: 'Worn on left arm',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
		worn_r: {
			type: 'typed',
			name: 'Worn on right arm',
			variants: [
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
				{
					id: 'no',
					name: 'No',
				},
			],
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'used 3D model - ornate',
				source: 'https://skfb.ly/ooSoQ',
				copyrightHolder: 'Diana Liu',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - chains',
				source: 'https://skfb.ly/pwULV',
				copyrightHolder: 'Alex Petuhov',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - decahedron',
				source: 'https://skfb.ly/6x9ZT',
				copyrightHolder: 'plasmeo3d',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
			{
				part: 'used 3D model - gemstones',
				source: 'https://skfb.ly/on9WV',
				copyrightHolder: 'Root_3D',
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
