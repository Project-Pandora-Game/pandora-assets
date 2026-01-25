DefineAsset({
	name: 'School Uniform Pants',
	size: 'medium',
	allowRandomizerUsage: true,
	graphics: 'graphics.json',
	colorization: {
		pants: {
			name: 'Pants',
			default: '#202020',
		},
		buttons: {
			name: 'Buttons',
			default: '#E6E6E6',
		},
		belt: {
			name: 'Belt',
			default: '#834C01',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [-130, -135, 0],
	},
	// size:680, y:610, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Clothing_lower',
		],
		requires: [
			'!Crotch_protruding',
		],
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'pants',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
