import { select, range } from 'd3';
import { vizData } from './vizData';
import { makeData } from './makeData';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);
const rectW = 200;
const n = Math.floor(width / rectW);
let t = 0;
setInterval(() => {
  const data = makeData(n, t, rectW, height);
  svg.call(vizData, data);
  t += 0.1;
}, 1000 / 60);
