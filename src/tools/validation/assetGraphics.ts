import { Immutable } from 'immer';
import {
	AssetGraphicsDefinition,
	CloneDeepMutable,
	Logger,
	MakeMirroredPoints,
	MirrorBoneLike,
	PointDefinitionCalculated,
	PointMatchesPointType,
	PointTemplate,
	PointTemplateDiff,
} from 'pandora-common';
import { GraphicsDatabase } from '../graphicsDatabase.ts';

export function AssetGraphicsValidate(definition: AssetGraphicsDefinition, logger: Logger): void {
	for (let layerIndex = 0; layerIndex < definition.layers.length; layerIndex++) {
		const layer = definition.layers[layerIndex];
		const layerLogger = logger.prefixMessages(`Layer #${layerIndex} (${layer.name ?? '[UNNAMED]'}): `);

		const pointTemplate = GraphicsDatabase.getPointTemplate(layer.points);
		if (pointTemplate == null) {
			layerLogger.error(`Layer refers to unknown template '${layer.points}'`);
			continue;
		}

		// Calculate the actual points first (such as resolving mirrored points)
		const calculatedPoints: Immutable<PointDefinitionCalculated[]> = pointTemplate
			.map((point, index): PointDefinitionCalculated => ({
				...CloneDeepMutable(point),
				index,
				isMirror: false,
			}))
			.flatMap(MakeMirroredPoints);

		if (layer.pointType != null) {
			// Layer should only use point types that are mentioned in the template
			for (const pointType of layer.pointType) {
				const matchingPointTypes = [pointType];
				if (!pointType.endsWith('_r') && !pointType.endsWith('_l')) {
					matchingPointTypes.push(pointType + '_r', pointType + '_l');
				}

				if (!calculatedPoints.some((p) => (
					p.pointType != null && (
						matchingPointTypes.includes(p.pointType) ||
						p.mirror && matchingPointTypes.includes(MirrorBoneLike(p.pointType))
					)
				))) {
					layerLogger.warning(`Layer filters for point type '${pointType}', but no point in the used point template uses that type.`);
				}
			}

			// Layer shouldn't define point types if all points match
			if (calculatedPoints.every((p) => PointMatchesPointType(p, layer.pointType))) {
				layerLogger.warning(`Layer filters for point types, but all points match anyway. Remove the unnecessary filter.`);
			}
		}
	}
}

export function PointDefinitionsMatch(a: Immutable<PointTemplate>, b: Immutable<PointTemplate>): boolean {
	const delta = PointTemplateDiff(a, b);
	return delta.added == null && delta.removed == null;
}

