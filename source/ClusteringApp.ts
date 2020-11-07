import GraphicalCore from './GraphicalCore';
import { Point } from './geometry/Point';
import FPS from './FPS';

const step = 60;

export default class ClusteringApp extends GraphicalCore {
    private fps = new FPS();
    private point: Point = [step*5, step*5];

    run() {
        this.drawBackground();
        this.updateFps();
        this.drawCircle(this.point);

        window.requestAnimationFrame(() => {
            this.run();
        });
    }

    setPoint(p: Point) {
        this.point[0] = p[0];
        this.point[1] = p[1];
    }

    updateFps() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px Arial';        // define the CSS font for writing text
        this.ctx.fillText (`FPS ${this.fps.toString()}`,this.width - 80,30);   // write the text 'Hello'
    }

    drawBackground() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.ctx.fillStyle = 'navy';
        this.ctx.fillRect(0, 0, this.width, this.height);

        for (let x = step; x < this.width; x += step) {
            this.drawLine([ x, 0 ], [ x, this.height ]);
        }

        for (let y = step; y < this.height; y += step) {
            this.drawLine([ 0, y ], [ this.width, y ]);
        }
    }
}