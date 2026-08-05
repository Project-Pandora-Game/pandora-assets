DefineRoomDeviceAsset({
	name: 'Shapes',
	size: 'medium',
	colorization: {
		color: {
			name: 'Color',
			default: '#FFFFFFFF',
			minAlpha: 0,
		},
		text: {
			name: 'Text color',
			default: '#222222FF',
		},
	},
	staticAttributes: ['Wall'],
	preview: 'preview.png',
	slots: {},
	modules: {
		shape: {
			type: 'typed',
			name: 'Shape',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'none',
					name: 'None',
				},
				{
					id: 'square',
					name: 'Square',
					default: true,
				},
				{
					id: 'triangle',
					name: 'Triangle',
				},
				{
					id: 'right_triangle_top',
					name: 'Triangle (T)',
				},
				{
					id: 'right_triangle_right',
					name: 'Triangle (R)',
				},
				{
					id: 'right_triangle_bottom',
					name: 'Triangle (B)',
				},
				{
					id: 'right_triangle_left',
					name: 'Triangle (L)',
				},
				{
					id: 'circle',
					name: 'Circle',
				},
				{
					id: 'diamond',
					name: 'Diamond',
				},
				{
					id: 'pentagon',
					name: 'Pentagon',
				},
				{
					id: 'hexagon',
					name: 'Hexagon',
				},
				{
					id: 'star',
					name: 'Star',
				},
				{
					id: 'square_ring',
					name: 'Square with Round Hole',
				},
				{
					id: 'square_frame',
					name: 'Square with Square Hole',
				},
				{
					id: 'ring',
					name: 'Ring',
				},
				{
					id: 'rect_h',
					name: 'Horizontal Bar',
				},
				{
					id: 'rect_v',
					name: 'Vertical Bar',
				},
			],
		},
		width: {
			type: 'typed',
			name: 'Width',
			staticConfig: { slotName: null },
			variants: [
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
			],
		},
		height: {
			type: 'typed',
			name: 'Height',
			staticConfig: { slotName: null },
			variants: [
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
			],
		},
		text: {
			type: 'text',
			name: 'Text',
			staticConfig: { slotName: null },
		},
		textSize: {
			type: 'typed',
			name: 'Text size',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'default',
					name: 'Default',
					default: true,
				},
				{
					id: 'box',
					name: 'Box',
				},
				{
					id: 'box_large',
					name: 'Box (large font)',
				},
			],
		},
	},
	pivot: {
		x: 500,
		y: 1000,
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
