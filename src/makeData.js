import { range } from 'd3';
export function makeData(n, t, w, h) {
  const data = range(15).map((d) => ({
    x: d * w,
    y: h - Math.sin(d + t) * 200 - 100,
    width: w,
    height: 200 * Math.sin(d + t) + 100,
    opacity: Math.sin(d + t) * 0.5 + 0.5,
  }));
  return data;
}
