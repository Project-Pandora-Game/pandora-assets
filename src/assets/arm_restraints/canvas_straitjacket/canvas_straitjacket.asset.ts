DefineAsset({
	name: 'Canvas Straitjacket',
	size: 'large',
	graphics: 'graphics.json',
	colorization: {
		canvas: {
			name: 'Canvas',
			default: '#FFFFFF',
		},
		straps: {
			name: 'Straps',
			default: '#E7CEB5',
		},
	},
	// size:425, y:370, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
			'Vulva_cover',
			'Anus_cover',
		],
		covers: [
			'Vulva_item',
			'Anus_item',
		],
		requires: [
			'!Vulva_protruding',
			'!Anus_protruding',
		],
		hides: ['Penis'],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			occupiedProperties: {
				blockAddRemove: true,
			},
		},
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	poseLimits: {
		arms: {
			position: 'front',
			rotation: 'down',
			fingers: 'fist',
		},
		bones: {
			arm_r: 80,
			arm_l: 80,
			elbow_r: 90,
			elbow_l: 90,
		},
		armsOrder: {
			upper: 'right',
		},
	},
	ownership: {
		responsibleContributor: 'Sandrine <118102950+SandrinePDR@users.noreply.github.com>',
		credits: ['Taja'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'straitjacket',
				source: 'Self-Made',
				copyrightHolder: 'Taja',
				editedBy: 'Sandrine',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
