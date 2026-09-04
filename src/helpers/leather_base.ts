export function CreateLeatherColor(): {
	colorization: NonNullable<IntermediateBodypartAssetDefinition['colorization']>;
	modules: NonNullable<IntermediateBodypartAssetDefinition['modules']>;
} {
	const colorization: NonNullable<IntermediateBodypartAssetDefinition['colorization']> = {
		belts: {
			name: 'Belts',
			group: 'belts',
		},
		buckles: {
			name: 'Buckles',
			group: 'buckles',
		},
	};
	const modules: NonNullable<IntermediateBodypartAssetDefinition['modules']> = {
		colorGroupLeather: {
			type: 'typed',
			name: 'Group Leather Color',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						overrideColorKey: ['belts', 'buckles'],
					},
				},
			],
		},
	};
	return { colorization, modules };
}
