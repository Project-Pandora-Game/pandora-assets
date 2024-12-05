import { Immutable } from 'immer';
import { CharacterSize, Logger, PointTemplate } from 'pandora-common';

export function TemplateValidate(template: Immutable<PointTemplate>, logger: Logger): void {
	const hasPointType = template.some((p) => p.pointType != null);

	// Validate individual points
	for (let i = 0; i < template.length; i++) {
		const point = template[i];
		const pointLogger = logger.prefixMessages(`Point #${i} @ [${point.pos[0]}, ${point.pos[1]}]:`);

		// If some points have a point type, all points should have one
		if (hasPointType && !point.pointType) {
			pointLogger.warning('Point does not have a point type set. If any point defines a point type, then all points should.');
		}

		// The point should not collide with any other point
		{
			const collidingPoint = template.findIndex((p, j) => j !== i && p.pos[0] === point.pos[0] && p.pos[1] === point.pos[1]);
			if (collidingPoint !== -1) {
				pointLogger.warning(`Point overlaps with point #${collidingPoint} @ [${template[collidingPoint].pos[0]}, ${template[collidingPoint].pos[1]}].`);
			}
		}

		// Check the mirror
		if (point.mirror) {
			const pointMirrorPos = [CharacterSize.WIDTH - point.pos[0], point.pos[1]];

			// The point's mirror should not collide with any other point
			const collidingMirrorPoint = template.findIndex((p) => p.pos[0] === pointMirrorPos[0] && p.pos[1] === pointMirrorPos[1]);
			if (collidingMirrorPoint !== -1) {
				pointLogger.warning(`Point overlaps with point #${collidingMirrorPoint} @ [${template[collidingMirrorPoint].pos[0]}, ${template[collidingMirrorPoint].pos[1]}].`);
			}
		}
	}
}
