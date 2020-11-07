import Point from './Point';
import {distance} from './geometry';

const p1 = new Point(0, 0);
console.log(p1);

const p2 = new Point(5, 0);
console.log(p2);

const d = distance(p1, p2);
console.log(d);