DefineAsset({
	name: 'Butterfly Pendant',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	preview: 'preview.png',
	graphics: 'graphics.json',
	colorization: {
		body: {
			name: 'Body',
			default: '#151210',
		},
		details: {
			name: 'Details',
			default: '#FFE100',
		},
		wings: {
			name: 'Wings',
			default: '#090B0F',
		},
		wing_fabric: {
			name: 'Wing Infill',
			default: '#DBA62B',
			minAlpha: 0.5,
		},
		chain: {
			name: 'Chain Link',
			default: '#A1A1A1',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [0, -10, 0],
	},

	attributes: {
		provides: [
			'Accessory',
		],
		requires: [
			'Collar_front_ring',
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
		room_placement: {
			type: 'typed',
			name: 'Room Placement',
			variants: [
				{
					id: 'wall',
					name: 'Hanging on Wall',
				},
				{
					id: 'ground',
					name: 'On Ground',
					default: true,
				},
			],
		},
	},

	ownership:
	{
		responsibleContributor: 'smallelise <smallelise@proton.me>',
		credits:
			['smallelise'],
		modificationPolicy:
			'Fixes only, otherwise ask',
		reusePolicy:
			'Free to use',
		licensing:
			[
				{
					part: 'Shark-Plush',
					source: 'Self-Made',
					copyrightHolder: 'smallelise',
					editedBy: 'smallelise',
					license: 'CC BY-SA',
				},
			],
	},
});
