import GraphicalLayer from './GraphicalLayer';
import Circle from './geometry/Circle';
import { Point } from './geometry/Point';

export default class ClusteringApp extends GraphicalLayer {
    togglePoint(p: Point) {
        this.circles.push(new Circle(p));
    }
}