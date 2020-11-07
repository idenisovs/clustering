import { Point } from './Point';

export default class Circle {
    point: Point;
    radius: number;

    constructor(point: Point, radius = 10) {
        this.point = point;
        this.radius = radius;
    }
}