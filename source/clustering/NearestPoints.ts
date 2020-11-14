import { Point } from '../geometry/Point';

export default interface NearestPoints {
    p1: Point|null;
    p2: Point|null;
    distance: number;
}