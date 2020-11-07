import GraphicalCore from './GraphicalCore';

const step = 60;

export default class ClusteringApp extends GraphicalCore {
    timestamp = Date.now();
    counter = 0;
    fps = 0;

    run() {
        this.drawBackground();
        this.updateFps();

        window.requestAnimationFrame(() => {
            this.run();
        })
    }

    updateFps() {
        const now = Date.now();
        const dT = now - this.timestamp;

        if (dT > 1000) {
            this.fps = this.counter;
            this.counter = 0;
            this.timestamp = now;
        }

        this.counter++

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