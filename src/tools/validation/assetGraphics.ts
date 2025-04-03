import { Immutable } from 'immer';
import {
	AssertNever,
	CloneDeepMutable,
	Logger,
	MakeMirroredPoints,
	PointDefinitionCalculated,
	PointTemplate,
	PointTemplateDiff,
	type AssetSourceGraphicsDefinition,
	type GraphicsSourceLayer,
} from 'pandora-common';
import { GraphicsDatabase } from '../graphicsDatabase.ts';

export function AssetGraphicsValidate(definition: AssetSourceGraphicsDefinition, logger: Logger, colorizationKeys: ReadonlySet<string>): void {
	for (let layerIndex = 0; layerIndex < definition.layers.length; layerIndex++) {
		const layer = definition.layers[layerIndex];
		const layerLogger = logger.prefixMessages(`Layer #${layerIndex} (${layer.name ?? '[UNNAMED]'}): `);

		switch (layer.type) {
			case 'mesh':
			case 'alphaImageMesh':
				AssetGraphicsValidateMeshLayer(layer, layerLogger, colorizationKeys);
				break;
			case 'autoMesh':
				AssetGraphicsValidateAutomeshLayer(layer, layerLogger, colorizationKeys);
				break;
			default:
				AssertNever(layer);
		}
	}
}

export function AssetGraphicsValidateMeshLayer(layer: Extract<GraphicsSourceLayer, { type: 'mesh' | 'alphaImageMesh'; }>, logger: Logger, colorizationKeys: ReadonlySet<string>): void {
	const pointTemplate = GraphicsDatabase.getPointTemplate(layer.points);
	if (pointTemplate == null) {
		logger.error(`Layer refers to unknown template '${layer.points}'`);
		return;
	}

	// Calculate the actual points first (such as resolving mirrored points)
	const calculatedPoints: Immutable<PointDefinitionCalculated[]> = pointTemplate.points
		.map((point, index): PointDefinitionCalculated => ({
			...CloneDeepMutable(point),
			index,
			isMirror: false,
		}))
		.flatMap(MakeMirroredPoints);

	if (layer.pointType != null) {
		// Layer should only use point types that are mentioned in the template
		for (const pointType of layer.pointType) {
			if (!Object.hasOwn(pointTemplate.pointTypes, pointType)) {
				logger.warning(`Layer filters for point type '${pointType}', but the used point template does not define that type.`);
			}
		}

		// Layer shouldn't define point types if all points match
		if (calculatedPoints.every((p) => layer.pointType?.includes(p.pointType))) {
			logger.warning(`Layer filters for point types, but all points match anyway. Remove the unnecessary filter.`);
		}
	}

	if (layer.type !== 'alphaImageMesh') {
		if (layer.colorizationKey != null && !colorizationKeys.has(layer.colorizationKey)) {
			logger.warning(`Layer has colorizationKey ${layer.colorizationKey} outside of defined colorization keys [${[...colorizationKeys].join(', ')}]`);
		}
	}
}

export function AssetGraphicsValidateAutomeshLayer(layer: Extract<GraphicsSourceLayer, { type: 'autoMesh'; }>, logger: Logger, colorizationKeys: ReadonlySet<string>): void {
	for (const graphicalLayer of layer.graphicalLayers) {
		const layerLogger = logger.prefixMessages(`Graphical layer ${graphicalLayer.name || '[unnamed]'}`);
		if (graphicalLayer.colorizationKey != null && !colorizationKeys.has(graphicalLayer.colorizationKey)) {
			layerLogger.warning(`has colorizationKey ${graphicalLayer.colorizationKey} outside of defined colorization keys [${[...colorizationKeys].join(', ')}]`);
		}
	}
}

export function PointDefinitionsMatch(a: Immutable<PointTemplate>, b: Immutable<PointTemplate>): boolean {
	const delta = PointTemplateDiff(a, b);
	return delta.added == null && delta.removed == null;
}

