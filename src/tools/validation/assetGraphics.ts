import { Immutable } from 'immer';
import {
	AssetGraphicsDefinition,
	Logger,
	PointTemplate,
	PointTemplateDiff,
} from 'pandora-common';
import { GraphicsDatabase } from '../graphicsDatabase';

export function AssetGraphicsValidate(definition: AssetGraphicsDefinition, logger: Logger): void {
	for (let layerIndex = 0; layerIndex < definition.layers.length; layerIndex++) {
		const layer = definition.layers[layerIndex];

		const layerLogger = logger.prefixMessages(`Layer #${layerIndex} (${layer.name ?? '[UNNAMED]'}): `);

		// If layer has custom points, validate them
		if (Array.isArray(layer.points)) {
			// Try to find if there isn't a point template matching the
			for (const [template, templateData] of GraphicsDatabase.templates) {
				if (PointDefinitionsMatch(templateData, layer.points)) {
					layerLogger.warning(`Custom point definition exactly matches template '${template}'. Use template reference instead.`);
				}
			}
			// Try to find if any earlier layer has a matching template
			for (let otherLayerIndex = 0; otherLayerIndex < layerIndex; otherLayerIndex++) {
				const otherLayer = definition.layers[otherLayerIndex];
				if (Array.isArray(otherLayer.points) && PointDefinitionsMatch(otherLayer.points, layer.points)) {
					layerLogger.warning(`Custom point definition exactly matches layer #${otherLayerIndex} (${otherLayer.name ?? '[UNNAMED]'}). Use reference for one of the layers instead.`);
				}
			}
		}
	}
}

function PointDefinitionsMatch(a: Immutable<PointTemplate>, b: Immutable<PointTemplate>): boolean {
	const delta = PointTemplateDiff(a, b);
	return delta.added == null && delta.removed == null;
}

