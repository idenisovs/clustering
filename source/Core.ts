export default class Core {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    height = window.innerHeight;
    width = window.innerWidth;

    constructor() {
        this.updateSize();
    }

    updateSize() {
        this.canvas.height = this.height;
        this.canvas.width = this.width;
    }
}