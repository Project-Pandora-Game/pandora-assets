export function CreateHairColor(withShine: boolean): {
	colorization: NonNullable<IntermediatePersonalAssetDefinition['colorization']>;
	modules: NonNullable<IntermediatePersonalAssetDefinition['modules']>;
} {
	const colorization: NonNullable<IntermediatePersonalAssetDefinition['colorization']> = {
		hair: {
			name: 'Hair',
			group: 'hair',
		},
	};
	const modules: NonNullable<IntermediatePersonalAssetDefinition['modules']> = {
		colorGroupHair: {
			type: 'typed',
			name: 'Group Hair Color',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					overrideColorKey: ['hair'],
				},
			],
		},
	};
	if (withShine) {
		colorization.hairShine = {
			name: 'Hair shine',
			group: 'hairShine',
			minAlpha: 0,
		};
		modules.shine = {
			type: 'typed',
			name: 'Shine',
			variants: [
				{
					id: 'show',
					name: 'Show Shine',
					default: true,
				},
				{
					id: 'hide',
					name: 'Hide Shine',
				},
			],
		};
		modules.colorGroupHairShine = {
			type: 'typed',
			name: 'Group Hair Shine Color',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					overrideColorKey: ['hairShine'],
				},
			],
		};
	}
	return { colorization, modules };
}
