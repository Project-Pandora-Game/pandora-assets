DefineAssetAlias('room_devices/pet_bowl');

DefineAsset({
	name: 'Pet Bowl',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		bowl: {
			name: 'Pet Bowl',
			default: '#FFFFFF',
		},
		interior: {
			name: 'Pet Bowl Interior',
			default: '#FEF9F3',
		},
		text: {
			name: 'Bowl Text',
			default: '#333333',
		},
	},
	roomDeployment: {
		autoDeployRelativePosition: [0, -100, 0],
	},
	preview: 'preview.png',
	attributes: {
		provides: [
			'Handheld',
		],
	},
	poseLimits: {
		arms: {
			position: 'front',
			rotation: 'forward',
		},
		bones: {
			arm_l: 50,
			arm_r: 50,
			elbow_l: 60,
			elbow_r: 60,
		},
	},
	modules: {
		text: {
			type: 'text',
			name: 'Bowl Text',
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Sandrine'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Bowl',
				source: 'Self-Made',
				copyrightHolder: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
