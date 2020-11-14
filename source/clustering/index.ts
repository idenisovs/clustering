import { Point } from '../geometry/Point';
import { distance } from '../geometry';
import NearestPoints from './NearestPoints';
import Cluster from './Cluster';

export function proximityMatrix(points: Point[]): number[][] {
    const result = [];

    for (let i = 0; i < points.length; i++) {
        const row = [];
        const a = points[i];

        for (let j = 0; j < points.length; j++) {
            const b = points[j];

            const d = distance(a, b);

            row.push(d);
        }

        result.push(row);
    }

    return result;
}

export function findNearestPoints(cluster1: Cluster, cluster2: Cluster): NearestPoints {
    const result: NearestPoints = {
        p1: null,
        p2: null,
        distance: -1
    };

    for (let p1 of cluster1.content) {
        for (let p2 of cluster2.content) {
            const d = distance(p1, p2);

            if (result.distance === -1 || d < result.distance) {
                result.p1 = p1;
                result.p2 = p2
                result.distance = d;
            }
        }
    }

    return result;
}