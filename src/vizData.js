import { select } from 'd3';
export function vizData(selection, data) {
  const circles = selection
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('opacity', (d) => d.opacity);
}
