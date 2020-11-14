/// <reference lib="webworker" />

import Dot from '../geometry/Dot';
import Cluster from '../clustering/Cluster';
import { findNearestPoints } from '../clustering';

const threshold = 100;

addEventListener('message', ({ data }: { data: Dot[] }) => {
  Cluster.reset();

  const clusters = data.map(dot => new Cluster(dot.point));

  for (let i = 0; i < clusters.length - 1; i++) {
    const c1 = clusters[i];

    for (let j = i + 1; j < clusters.length; j++) {
      const c2 = clusters[j];

      const nearestPoints = findNearestPoints(c1, c2);

      if (nearestPoints.distance < threshold) {
        c1.merge(c2);
        clusters.splice(j, 1);
        i--;
        break;
      }
    }
  }

  postMessage(clusters.length);
});

