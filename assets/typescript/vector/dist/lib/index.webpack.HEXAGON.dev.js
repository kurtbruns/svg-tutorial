import './assets/styles/normalize.css';
import './assets/styles/reset.css';
import { TAU, File, GridArtboard } from './index';
let root = document.getElementById('root');
root.style.maxWidth = `${720}px`;
// root.style.maxWidth = `${3*144 + 2*48 + 2*16}px`;
let count = 0;
function createContainer() {
    let container = document.createElement('div');
    container.id = `container-${count++}`;
    container.style.marginBottom = '1.5rem';
    root.appendChild(container);
    return container;
}
let grid = new GridArtboard(createContainer(), {
    width: 600,
    height: 600,
    internalX: -300,
    internalY: -300,
    internalHeight: 600,
    internalWidth: 600,
    responsive: true
});
let R = 240;
let r = 10;
// grid.line(0, 0, R*Math.cos(1*TAU/6), R*Math.sin(1*TAU/6))
// grid.line(0, 0, R*Math.cos(3*TAU/6), R*Math.sin(3*TAU/6))
// grid.line(0, 0, R*Math.cos(5*TAU/6), R*Math.sin(5*TAU/6))
function draw(n) {
    for (let i = 0; i <= R; i += r) {
        let x = i * Math.cos(n * TAU / 6);
        let y = i * Math.sin(n * TAU / 6);
        let x1 = x - (R - i) * Math.cos(n * TAU / 6 + TAU / 3);
        let y1 = y - (R - i) * Math.sin(n * TAU / 6 + TAU / 3);
        let x2 = x + R * Math.cos(n * TAU / 6 + TAU / 3);
        let y2 = y + R * Math.sin(n * TAU / 6 + TAU / 3);
        grid.line(x1, y1, x2, y2);
    }
}
draw(1);
draw(2);
draw(3);
draw(4);
draw(5);
draw(6);
window.download = () => {
    File.download(grid.id, `${grid.id}.svg`, 'assets/main.css');
};
// let plot = new Plot(createContainer(), (x:number) => { return 1/x }, {
//   width: 720,
//   height: 480,
//   internalWidth: 3,
//   internalHeight: 2,
//   internalX: 0,
//   internalY: -2,
// })
// plot.drawGrid(false, false);
// plot.draw();
// (window as any).download = () => {
//   File.download(plot.id, `${plot.id}.svg`, 'assets/main.css');
// }
// grid.drawGridLines()
// grid.drawBorder()
// grid.circle(0,0,1)
// const r = 10;
// const n = 20;
// const step = r/n; 
// for (let i = 0; i < n; i ++) {
//   let x = r*i/n;
//   let height = x*TAU;
//   let rect = grid.rectangle(x, -height, step, height)
//   rect.stroke = 'none'
//   rect.fill = '#404040'
//   // console.log(x)
// }
// function plot(n:number){
//   let s = 100;
//   let w = 5;
//   let h = 20;
//   let width = w*s;
//   let height = h*s; 
//   console.log(width, height);
//   let container = createContainer();
//   let grid = new GridArtboard(container, {
//     width:100,
//     height:700,
//     internalWidth: 1,
//     internalHeight: 7,
//     responsive: false
//   });
//   grid.drawGridLines();
//   grid.drawBorder();
//   grid.border.style.stroke = '#cccccc';
//   let step = 10/n;
//   for( let i = 0; i < 30; i += step) {
//     let height = i*TAU;
//     let rect = grid.rectangle(i, -height, step, height);
//     rect.stroke = 'none';
//     rect.fill = '#404040';
//     // rect.style.fillOpacity = '0.5';
//   }
// }
// plot(30)
// plot(10)
// plot(5)
