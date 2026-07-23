DefineRoomDeviceAsset({
	name: 'Point Of Interest',
	size: 'huge',
	staticAttributes: ['Furniture'],
	preview: 'preview.png',
	slots: {
		character_slot: {
			name: 'Inside the character slot',
			asset: {
				name: 'Point Of Interest',
				size: 'huge',
			},
		},
	},
	pivot: {
		x: 0,
		y: 0,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Free to use',
		licensing: [
			{
				part: 'preview image',
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
