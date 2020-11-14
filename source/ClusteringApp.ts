import GraphicalLayer from './GraphicalLayer';
import { Point } from './geometry/Point';
import { distance } from './geometry';
import Dot from './geometry/Dot';
import Worker from 'worker-loader!./workers/clusters.worker';

export default class ClusteringApp extends GraphicalLayer {
    private worker = new Worker();

    constructor() {
        super();

        this.worker.onmessage = this.handleClusteringResult.bind(this);
    }

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

        this.worker.postMessage(this.dots);
    }

    removeDot(dot: Dot) {
        const idx = this.dots.indexOf(dot);

        this.dots.splice(idx, 1);

        this.worker.postMessage(this.dots);
    }

    handleClusteringResult({ data }: { data: any }) {
        console.log(data);
    }
}
