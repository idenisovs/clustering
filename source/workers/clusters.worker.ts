/// <reference lib="webworker" />

import { Point } from '../geometry/Point';
import { distance } from '../geometry';
import Dot from '../geometry/Dot';

function makeDistanceMatrix(dots: Dot[]): number[][] {
  console.log(dots);

  const result = [];

  for (let i = 0; i < dots.length; i++) {
    const row: number[] = [];
    const a = dots[i].point;

    for (let j = 0; j < dots.length; j++) {
      const b = dots[j].point;
      const d = distance(a, b);

      row.push(d);
    }

    result.push(row);
  }

  return result;
}

addEventListener('message', ({ data }: { data: Dot[] }) => {
  const distanceMatrix = makeDistanceMatrix(data);

  postMessage(distanceMatrix);
});

