import Point from './Point';

export function distance(p1: Point, p2: Point): number {
    const dX2 = Math.pow(p2.x - p1.x, 2);
    const dY2 = Math.pow(p2.y - p1.y, 2);

    return Math.sqrt(dX2 + dY2);
}