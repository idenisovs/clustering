/// <reference lib="webworker" />

import { Point } from '../geometry/Point';
import { distance } from '../geometry';


// Respond to message from parent thread
addEventListener('message', ({ data }: { data: string }) => {
  const p1: Point = [ 1, 0 ];
  const p2: Point = [ 10, 1 ];

  const L = distance(p1, p2);

  postMessage({
    distance: L
  });
});

