import './assets/styles/normalize.css';
import './assets/styles/reset.css';
import { TAU, File, ResponsiveArtboard } from './index';
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
window.download = (id) => {
    File.download(id, `${id}.svg`, 'assets/main.css');
};
let artboard = new ResponsiveArtboard(createContainer(), {
    width: 1400,
    height: 1400,
    origin: 'center',
    responsive: true
});
let sun = artboard.circle(0, 0, 100);
sun.style.fill = 'none';
sun.style.stroke = `rgb(${240}, ${240}, ${240} )`;
sun.style.strokeWidth = '2px';
function mulberry32(a) {
    return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
let seed = 2;
let rng = mulberry32(seed);
function arc(x1, y1, x2, y2, r1, r2) {
    return `M ${r1 * x1} ${-r1 * y1} A ${r1} ${r1} 0 0 0 ${r1 * x2} ${-r1 * y2} L ${r2 * x2} ${-r2 * y2} A ${r2} ${r2} 0 0 1 ${r2 * x1} ${-r2 * y1} Z`;
}
function arc2(a1, a2, r1, r2) {
    let x1 = Math.cos(a1);
    let y1 = Math.sin(a1);
    let x2 = Math.cos(a2);
    let y2 = Math.sin(a2);
    return arc(x1, y1, x2, y2, r1, r2);
}
let _r = 255;
let _g = 255;
let _b = 0;
let size = 20;
for (let r = 100 + size; r < 5000; r += 2 * size) {
    let space = size / r;
    let offset = rng() * TAU;
    let step = 240 / r;
    let a = 0;
    let b = a + rng() * step + space;
    do {
        let path = artboard.path(arc2(a + offset, b + offset, r, r + size));
        path.style.fill = `none`;
        // path.style.fill = `rgb(${_r}, ${_g}, ${_b} )`
        _b += 0.5;
        _g -= 1;
        _r -= 0.2;
        path.style.stroke = `rgb(${240}, ${240}, ${240} )`;
        path.style.strokeWidth = '2px';
        a = b + space;
        b = a + rng() * step + space;
    } while (b < TAU - space);
    // settle up
    if (Math.abs((a + offset) - (offset - space) - TAU) > space) {
        let path = artboard.path(arc2(a + offset, offset - space, r, r + size));
        // path.style.fill = `rgb(${_r}, ${_g}, ${_b} )`
        path.style.fill = `none`;
        path.style.stroke = `rgb(${240}, ${240}, ${240} )`;
        path.style.strokeWidth = '2px';
    }
}
