import { Point } from '../geometry/Point';

export default class Cluster {
  content: Point[] = [];
  centroid: number = 0;
  length: number = 0;

  add(point: Point) {
    this.content.push(point);

    if (this.content.length < 2) {
      return;
    }

    const length = this.findMaxLength();
  }

  findMaxLength(): number {
    return 0;
  }
}
