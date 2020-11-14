import { Point } from '../geometry/Point';

export default class Cluster {
    private static counter = 0;

    private readonly id = ++Cluster.counter;

    content: Point[];

    get size(): number {
        return this.content.length;
    }

    constructor(point: Point) {
        this.content = [ point ];
    }

    get(idx: number): Point {
        return this.content[idx];
    }

    merge(cluster: Cluster) {
        this.content = this.content.concat(cluster.content);
    }

    toString() {
        return `Cluster #${this.id}`
    }

    static reset() {
        Cluster.counter = 0;
    }
}