DefineAsset({
	name: 'Bondage Frame',
	size: 'huge',
	colorization: [
		{
			name: 'Frame',
			default: '#FFFFFF',
		},
	],
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockRequirements: ['Lock'],
			occupiedEffects: {
				blockAddRemove: true,
			},
		},
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Rings, chains, base plate',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only',
			},
			{
				part: 'The Frame',
				source: 'https://www.flickr.com/photos/ryochijiiwa/5045990022/',
				copyrightHolder: 'Ryo Chijiiwa',
				editedBy: 'ClaudiaMia',
				license: 'CC BY',
			},
		],
	},
});
