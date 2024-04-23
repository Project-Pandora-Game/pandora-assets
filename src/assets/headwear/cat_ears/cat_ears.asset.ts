import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Cat Ears',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		outer: {
			name: 'Outer',
			default: '#333333',
		},
		inner: {
			name: 'Inner',
			default: '#505050',
		},
		tuft: {
			name: 'Tuft',
			default: '#FFFFFF',
		},
	},
	// size:216, y:162, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Fantasy',
			'Fantasy_ears',
		],
	},
	modules: {
		earTufts: {
			type: 'typed',
			name: 'Ear tufts',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'eartufts',
					name: 'Ear tufts',
					default: true,
				},
			],
		},
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
