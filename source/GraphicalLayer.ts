import FunctionalLayer from './FunctionalLayer';
import FPS from './utils/FPS';
import Circle from './geometry/Circle';

const step = 60;

export default class GraphicalLayer extends FunctionalLayer {
    private fps = new FPS();
    protected circles: Circle[] = []

    run() {
        this.drawBackground();
        this.drawPoints();
        this.updateFps();

        window.requestAnimationFrame(() => {
            this.run();
        });
    }

    updateFps() {
        this.ctx.fillStyle = 'white';
        this.ctx.font = '20px Arial';
        this.ctx.fillText (`FPS ${this.fps.toString()}`,this.width - 80,30);
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

    drawPoints() {
        for (const circle of this.circles) {
            this.drawCircle(circle.point, circle.radius);
        }
    }
}