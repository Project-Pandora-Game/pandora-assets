import { Immutable } from 'immer';
import { CharacterSize, Logger, type PointTemplateSource } from 'pandora-common';

export function TemplateValidate(template: Immutable<PointTemplateSource>, logger: Logger): void {
	const hasPointType = template.points.some((p) => p.pointType != null);

	// Validate individual points
	for (let i = 0; i < template.points.length; i++) {
		const point = template.points[i];
		const pointLogger = logger.prefixMessages(`Point #${i} @ [${point.pos[0]}, ${point.pos[1]}]:`);

		// If some points have a point type, all points should have one
		if (hasPointType && !point.pointType) {
			pointLogger.warning('Point does not have a point type set. If any point defines a point type, then all points should.');
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

			// The point's mirror should not collide with any other point
			const collidingMirrorPoint = template.points.findIndex((p) => p.pos[0] === pointMirrorPos[0] && p.pos[1] === pointMirrorPos[1]);
			if (collidingMirrorPoint !== -1) {
				pointLogger.warning(`Point overlaps with point #${collidingMirrorPoint} @ [${template.points[collidingMirrorPoint].pos[0]}, ${template.points[collidingMirrorPoint].pos[1]}].`);
			}
		}
	}
}
