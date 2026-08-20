DefineAsset({
	name: 'Fishnet Sleeves',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		sleeves: {
			name: 'Sleeves',
			default: '#000000',
		},
	},
	// size:300, y:380, centered, arm_l: 71, arm_r: 17, elbow_l: 97
	preview: 'preview.png',
	attributes: {
		provides: [
			'Gloves',
		],
	},
	modules: {
		coverage: {
			type: 'typed',
			name: 'Sleeves coverage',
			variants: [
				{
					id: 'full',
					name: 'Full',
					default: true,
				},
				{
					id: 'forearm',
					name: 'Forearm',
				},
				{
					id: 'upperarm',
					name: 'Upper arm',
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
		responsibleContributor: 'Nikky90506 <122885812+Nikky90506@users.noreply.github.com>',
		credits: ['Nikky'],
		modificationPolicy: 'Fixes and New uses, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Nikky',
				editedBy: 'Nikky',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
