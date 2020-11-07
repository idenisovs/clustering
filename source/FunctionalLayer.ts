import CoreLayer from './CoreLayer';
import { Point } from './geometry/Point';

export default class FunctionalLayer extends CoreLayer {
    drawLine(p1: Point, p2: Point) {
        const ctx = this.ctx;

        ctx.beginPath();

        const [ x1, y1 ] = p1
        ctx.moveTo(x1, y1);

        const [ x2, y2 ] = p2;
        ctx.lineTo(x2, y2);

        ctx.closePath();
        ctx.strokeStyle = 'rgb(0, 0, 150)';
        ctx.stroke();
    }

    drawCircle(p1: Point, radius = 10, color = 'white') {
        const { ctx } = this;

        const [ x, y ] = p1;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}