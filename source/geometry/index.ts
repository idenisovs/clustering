import { Point } from './Point';

export function distance(p1: Point, p2: Point): number {
    const [ x1, y1 ] = p1;
    const [ x2, y2 ] = p2;

    const dX2 = Math.pow(x2 - x1, 2);
    const dY2 = Math.pow(y2 - y1, 2);

    return Math.sqrt(dX2 + dY2);
}

