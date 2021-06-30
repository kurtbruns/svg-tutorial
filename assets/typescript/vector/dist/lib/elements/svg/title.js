import { Element } from './element';
export class Title extends Element {
    constructor() {
        let title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        super(title);
    }
}
