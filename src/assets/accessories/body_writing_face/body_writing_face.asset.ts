DefineAsset({
	name: 'Body Writing (Face)',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		text: {
			name: 'Text',
			default: '#000000FF',
			minAlpha: 0,
		},
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Accessory',
		],
	},
	modules: {
		text_forehead: {
			type: 'text',
			name: 'Text (Forehead)',
		},
		text_face: {
			type: 'text',
			name: 'Text (Mouth)',
		},
	},
	ownership: {
		responsibleContributor: 'DoppelChest1 <doppelchest@op.pl>',
		credits: ['DoppelChest'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'DoppelChest',
				editedBy: 'DoppelChest',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
