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
					default: true,
				},
				{
					id: 'square',
					name: 'Square',
				},
				{
					id: 'triangle',
					name: 'Triangle',
				},
				{
					id: 'right_triangle_top',
					name: 'Triangle (Top)',
				},
				{
					id: 'right_triangle_right',
					name: 'Triangle (Right)',
				},
				{
					id: 'right_triangle_bottom',
					name: 'Triangle (Bottom)',
				},
				{
					id: 'right_triangle_left',
					name: 'Triangle (Left)',
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
				{
					id: 'rect_h_wide',
					name: 'Horizontal Bar (Wide)',
				},
				{
					id: 'rect_v_wide',
					name: 'Vertical Bar (Wide)',
				},
			],
		},
		size: {
			type: 'typed',
			name: 'Size',
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
				{
					id: 'huge',
					name: 'Huge',
				},
			],
		},
		text: {
			type: 'text',
			name: 'Text',
			staticConfig: { slotName: null },
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
