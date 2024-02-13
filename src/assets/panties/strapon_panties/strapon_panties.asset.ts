import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Strapon Panties',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		panties: {
			name: 'Panties',
			default: '#FFFFFF',
		},
		straponSmall: {
			name: 'Small Strapon',
			default: '#A051D3',
		},
		straponLarge: {
			name: 'Large Strapon',
			default: '#B895E6',
		},
		straponHuge: {
			name: 'Huge Strapon',
			default: '#E5506E',
		},
	},
	// size:240, y:569, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Underwear',
			'Underwear_panties',
			'Toy',
			'Vagina_cover',
		],
		hides: ['Penis'],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
		straponLock: {
			type: 'lockSlot',
			name: 'Strapon Lock',
			occupiedProperties: {
				blockModules: ['strapons'],
			},
		},
		strapons: {
			type: 'typed',
			name: 'Strapons',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'large',
					name: 'Large Strapon',
				},
				{
					id: 'small',
					name: 'Small Strapon',
				},
				{
					id: 'both',
					name: 'Both',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		color: {
			type: 'typed',
			name: 'Panties Base Color',
			interactionType: ItemInteractionType.STYLING,
			variants: [
				{
					id: 'black',
					name: 'Black Panties',
					default: true,
				},
				{
					id: 'white',
					name: 'White Panties',
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
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
		],
	},
});
