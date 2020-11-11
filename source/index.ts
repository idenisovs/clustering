import ClusteringApp from './ClusteringApp';
import { Point } from './geometry/Point';
import Worker from 'worker-loader!./workers/clusters.worker';

interface Result {
    distance: number;
}

window.onload = function init() {
    const worker = new Worker();

    worker.onmessage = ({ data }: { data: Result }) => {
        console.log(data.distance);
    }

    worker.postMessage('AAA AAA BBB CCC!');

    const app = new ClusteringApp();

    app.run();

    app.canvas.onclick = (ev => {
        const p: Point = [
            ev.clientX,
            ev.clientY
        ];

        app.toggleDot(p);
    });
};
