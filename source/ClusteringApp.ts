import GraphicalLayer from './GraphicalLayer';
import { Point } from './geometry/Point';
import { distance } from './geometry';
import Dot from './geometry/Dot';

export default class ClusteringApp extends GraphicalLayer {
    toggleDot(p: Point) {
        const nearestDot = this.dots.find((dot) => {
            const l = distance(dot.point, p);

            return l < (dot.radius * 2);
        });

        if (nearestDot) {
            this.removeDot(nearestDot);
        } else {
            this.dots.push(new Dot(p));
        }
    }

    removeDot(dot: Dot) {
        const idx = this.dots.indexOf(dot);

        this.dots.splice(idx, 1);
    }
}