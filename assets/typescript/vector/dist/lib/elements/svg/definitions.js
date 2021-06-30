import { Marker } from '../../index';
import { Element } from './element';
export class Definitions extends Element {
    constructor() {
        let defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        super(defs);
    }
    marker(refX, refY, width, height) {
        return this.appendChild(new Marker(refX, refY, width, height));
    }
}
