import './assets/styles/normalize.css';
import './assets/styles/reset.css';
// import { Plot } from './modules/plot/plot-grid-based';
import { Plot } from './modules/plot/plot-grid-based';
import { File } from './index';
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
// let p_0 = 50;
// let K = 100;
// let r = .1;
function population(p, k, r) {
    return (t) => {
        return (p * k * Math.exp(r * t)) / ((k - p) + p * Math.exp(r * t));
    };
}
function derivative(p, k, r) {
    return (t) => {
        return 10 * (r * p * k * Math.exp(r * t) * ((k - p) + p * Math.exp(r * t)) - r * p * Math.exp(r * t) * p * k * Math.exp(r * t)) / Math.pow((k - p) + p * Math.exp(r * t), 2);
    };
}
// let plot = new Plot(createContainer(), (x) => { return 50*Math.atan((x - 50)/2)/Math.PI + 50 }, {
// let plot = new Plot(createContainer(),  derivative(50, 100, 0.2), {
let plot = new Plot(createContainer(), {
    width: 540,
    height: 540,
    f: (x) => { return x * x * x; },
    internalX: -5,
    internalY: -50,
    internalHeight: 100,
    internalWidth: 10,
    responsive: true
});
plot.drawGrid(false, false);
plot.draw();
window.download = () => {
    File.download(plot.id, `${plot.id}.svg`, 'assets/main.css');
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
