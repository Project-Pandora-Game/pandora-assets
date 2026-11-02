DefineAsset({
	name: 'Body Writing (Arms)',
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
		text_arm_r: {
			type: 'text',
			name: 'Text (Right Arm)',
		},
		text_forearm_r: {
			type: 'text',
			name: 'Text (Right Forearm)',
		},
		text_arm_l: {
			type: 'text',
			name: 'Text (Left Arm)',
		},
		text_forearm_l: {
			type: 'text',
			name: 'Text (Left Forearm)',
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
