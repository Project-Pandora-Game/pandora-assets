DefineAsset({
	name: 'Fishnet Gloves',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		colorGroup: {
			name: 'Fishnet',
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
		length: {
			type: 'typed',
			name: 'Glove length',
			variants: [
				{
					id: 'opera',
					name: 'Opera gloves',
					default: true,
				},
				{
					id: 'regular',
					name: 'Regular gloves',
				},
				{
					id: 'short',
					name: 'Short gloves',
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
