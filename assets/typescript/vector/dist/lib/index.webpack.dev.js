import './assets/styles/normalize.css';
import './assets/styles/reset.css';
import { Plot } from './modules/plot/plot-grid-based';
import { File } from './index';
let root = document.getElementById('root');
root.style.maxWidth = `${720}px`;
let count = 0;
function createContainer() {
    let container = document.createElement('div');
    container.id = `container-${count++}`;
    container.style.marginBottom = '1.5rem';
    root.appendChild(container);
    return container;
}
let plot = new Plot(createContainer(), {
    width: 720,
    height: 720,
    internalX: -5,
    internalY: -5,
    internalHeight: 10,
    internalWidth: 10,
    responsive: true,
    tic: 0.1
});
plot.addFunction((x) => Math.sin(x * x)).style.stroke = '#58c4dd';
plot.addFunction((x) => 2 * x * Math.cos(x * x)).style.stroke = '#83c167';
// plot.addFunction((x) => s*x/s*x/s).style.stroke = '#83c167'
// plot.addFunction((x) => s*(Math.sin(x/s) + x/s*x/s)).style.stroke = '#fff933'
plot.draw();
plot.gridGroup.style.stroke = '#ffffff';
plot.drawBackground('#000000');
window.download = () => {
    File.download(plot.id, `${plot.id}.svg`, 'assets/main.css');
};
