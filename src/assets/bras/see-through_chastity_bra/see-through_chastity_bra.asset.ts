DefineAsset({
	name: 'See-through Chastity Bra',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		bra: {
			name: 'Bra Frame',
			default: '#AEB9B8',
		},
		chains: {
			name: 'Chains',
			default: '#AEB9B8',
		},
		cover: {
			name: 'Bra Cover',
			default: '#AEB9B8AB',
			minAlpha: '30%',
		},
	},
	// size:230, y:363, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Chastity',
			'Breast_item',
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
		lockCover: {
			type: 'lockSlot',
			name: 'Lock for bra cover',
			lockedProperties: {
				blockModules: ['cover'],
			},
		},
		cover: {
			type: 'typed',
			name: 'Bra cover',
			variants: [
				{
					id: 'open',
					name: 'None',
					default: true,
				},
				{
					id: 'closed',
					name: 'Attached',
					properties: {
						attributes: {
							provides: [
								'Breast_cover',
							],
							covers: [
								'Breast_item',
							],
						},
					},
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
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
