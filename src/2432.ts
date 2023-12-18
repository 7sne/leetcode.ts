function hardestWorker(n: number, logs: number[][]): number {
  let best = 0;
  let bestid = 0;
  let prev = 0;

  for (const [id, leaveTime] of logs) {
    let t = 0;

    t += leaveTime - prev;
    prev = leaveTime;

    if (t > best) {
      best = t;
      bestid = id;
    } else if (t == best) bestid = Math.min(id, bestid);
  }
  return bestid!;
}
