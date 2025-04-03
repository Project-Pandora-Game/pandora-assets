import { Immutable } from 'immer';
import { ALWAYS_ALLOWED_LAYER_PRIORITIES, CharacterSize, Logger, MirrorBoneLike, type PointTemplateSource } from 'pandora-common';

export function TemplateValidate(template: Immutable<PointTemplateSource>, logger: Logger): void {
	for (const [pointType, pointTypeMetadata] of Object.entries(template.pointTypes)) {
		const pointTypeLogger = logger.prefixMessages(`Point type '${pointType}':`);
		if (pointTypeMetadata.allowedPriorities !== '*') {
			if (new Set(pointTypeMetadata.allowedPriorities).size !== pointTypeMetadata.allowedPriorities.length) {
				pointTypeLogger.warning('Allowed priorities contains duplicate values.');
			}
			for (const priority of pointTypeMetadata.allowedPriorities) {
				if (ALWAYS_ALLOWED_LAYER_PRIORITIES.includes(priority)) {
					pointTypeLogger.warning(`Priority '${priority}' does not need to be specified, as it is always allowed.`);
				}
			}
		}

		const used = template.points.some((p) => p.pointType === pointType ||
			(p.mirror && MirrorBoneLike(p.pointType) === pointType),
		);
		if (!used) {
			pointTypeLogger.warning('Point type is never used.');
		}
	}

	// Validate individual points
	for (let i = 0; i < template.points.length; i++) {
		const point = template.points[i];
		const pointLogger = logger.prefixMessages(`Point #${i} @ [${point.pos[0]}, ${point.pos[1]}]:`);

		// All points should have a point type
		if (!point.pointType) {
			pointLogger.warning('Point does not have non-empty point type set.');
		}

		// If the point has a point type, it should be specified in metadata
		if (point.pointType && !Object.hasOwn(template.pointTypes, point.pointType)) {
			pointLogger.warning(`Point has unknown point type '${point.pointType}'`);
		}

		// The point should not collide with any other point
		{
			const collidingPoint = template.points.findIndex((p, j) => j !== i && p.pos[0] === point.pos[0] && p.pos[1] === point.pos[1]);
			if (collidingPoint !== -1) {
				pointLogger.warning(`Point overlaps with point #${collidingPoint} @ [${template.points[collidingPoint].pos[0]}, ${template.points[collidingPoint].pos[1]}].`);
			}
		}

		// Check the mirror
		if (point.mirror) {
			const pointMirrorPos = [CharacterSize.WIDTH - point.pos[0], point.pos[1]];
			const pointMirrorType = MirrorBoneLike(point.pointType);

			// The point's mirror should not collide with any other point
			const collidingMirrorPoint = template.points.findIndex((p) => p.pos[0] === pointMirrorPos[0] && p.pos[1] === pointMirrorPos[1]);
			if (collidingMirrorPoint !== -1) {
				pointLogger.warning(`Point overlaps with point #${collidingMirrorPoint} @ [${template.points[collidingMirrorPoint].pos[0]}, ${template.points[collidingMirrorPoint].pos[1]}].`);
			}

			// If the point has a point type, it should be specified in metadata
			if (pointMirrorType && !Object.hasOwn(template.pointTypes, pointMirrorType)) {
				pointLogger.warning(`Point's mirror has unknown point type '${pointMirrorType}'`);
			}
		}
	}
}
