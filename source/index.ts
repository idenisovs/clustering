import ClusteringApp from './ClusteringApp';
import { Point } from './geometry/Point';


interface Result {
    distance: number;
}

window.onload = function init() {

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
