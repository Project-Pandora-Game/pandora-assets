import Delaunator from 'delaunator';
import { Immutable } from 'immer';
import { Assert, BitField, PointDefinitionCalculated } from 'pandora-common';

export function CalculatePointsTriangles(points: Immutable<PointDefinitionCalculated[]>, pointFilter?: BitField): [number, number, number][] {
	const result: [number, number, number][] = [];
	const delaunator = new Delaunator(points.flatMap((point) => point.pos));
	for (let i = 0; i < delaunator.triangles.length; i += 3) {
		const t = [i, i + 1, i + 2].map((tp) => delaunator.triangles[tp]);
		if (pointFilter == null || t.every((tp) => pointFilter.get(tp))) {
			Assert(t.length === 3);
			result.push([t[0], t[1], t[2]]);
		}
	}
	return result;
}
