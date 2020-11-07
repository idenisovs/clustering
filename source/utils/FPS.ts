export default class FPS {
    private timestamp = Date.now();
    private counter = 0;
    private fps = 0;

    toString() {
        const now = Date.now();
        const dT = now - this.timestamp;

        if (dT > 1000) {
            this.fps = this.counter;
            this.counter = 0;
            this.timestamp = now;
        }

        this.counter++

        return this.fps;
    }
}