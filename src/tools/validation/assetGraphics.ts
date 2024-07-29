import { Immutable } from 'immer';
import {
	AssetGraphicsDefinition,
	Logger,
	PointTemplate,
	PointTemplateDiff,
} from 'pandora-common';

export function AssetGraphicsValidate(_definition: AssetGraphicsDefinition, _logger: Logger): void {
	// Nothing to do here right now.
	// for (let layerIndex = 0; layerIndex < definition.layers.length; layerIndex++) {
	// const layer = definition.layers[layerIndex];

	// const layerLogger = logger.prefixMessages(`Layer #${layerIndex} (${layer.name ?? '[UNNAMED]'}): `);
	// }
}

export function PointDefinitionsMatch(a: Immutable<PointTemplate>, b: Immutable<PointTemplate>): boolean {
	const delta = PointTemplateDiff(a, b);
	return delta.added == null && delta.removed == null;
}

