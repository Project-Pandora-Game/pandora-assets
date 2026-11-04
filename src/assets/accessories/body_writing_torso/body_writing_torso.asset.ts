DefineAsset({
	name: 'Body Writing (Torso)',
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
		text_decolletage: {
			type: 'text',
			name: 'Text (Décolletage)',
		},
		text_abdomen: {
			type: 'text',
			name: 'Text (Abdomen)',
		},
		text_pubic_area: {
			type: 'text',
			name: 'Text (Pubic Area)',
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
