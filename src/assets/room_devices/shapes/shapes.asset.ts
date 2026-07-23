DefineRoomDeviceAsset({
	name: 'Shapes',
	size: 'medium',
	colorization: {
		color: {
			name: 'Color',
			default: '#FFFFFFFF',
			minAlpha: 0,
		},
	},
	staticAttributes: ['Wall'],
	preview: 'preview.png',
	slots: {},
	modules: {
		square: {
			type: 'typed',
			name: 'Square',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'small',
					name: 'Small',
					default: true,
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		triangle: {
			type: 'typed',
			name: 'Triangle',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		right_triangle_bl: {
			type: 'typed',
			name: 'Right Triangle (bottom-left)',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		right_triangle_br: {
			type: 'typed',
			name: 'Right Triangle (bottom-right)',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		right_triangle_tl: {
			type: 'typed',
			name: 'Right Triangle (top-left)',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		right_triangle_tr: {
			type: 'typed',
			name: 'Right Triangle (top-right)',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		circle: {
			type: 'typed',
			name: 'Circle',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		hexagon: {
			type: 'typed',
			name: 'Hexagon',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		rect_h: {
			type: 'typed',
			name: 'Horizontal Bar',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
				{
					id: 'small_wide',
					name: 'Small (Wide)',
				},
				{
					id: 'medium_wide',
					name: 'Medium (Wide)',
				},
				{
					id: 'big_wide',
					name: 'Big (Wide)',
				},
				{
					id: 'huge_wide',
					name: 'Huge (Wide)',
				},
			],
		},
		rect_v: {
			type: 'typed',
			name: 'Vertical Bar',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'small',
					name: 'Small',
				},
				{
					id: 'medium',
					name: 'Medium',
				},
				{
					id: 'big',
					name: 'Big',
				},
				{
					id: 'huge',
					name: 'Huge',
				},
				{
					id: 'small_wide',
					name: 'Small (Wide)',
				},
				{
					id: 'medium_wide',
					name: 'Medium (Wide)',
				},
				{
					id: 'big_wide',
					name: 'Big (Wide)',
				},
				{
					id: 'huge_wide',
					name: 'Huge (Wide)',
				},
			],
		},
	},
	pivot: {
		x: 800,
		y: 1600,
	},
	graphics: 'roomDeviceGraphics.json',
	ownership: {
		responsibleContributor: 'DoppelChest1 <doppelchest@op.pl>',
		credits: ['DoppelChest'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				part: 'Shape graphics',
				source: 'Self-Made',
				copyrightHolder: 'DoppelChest',
				editedBy: 'DoppelChest',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
