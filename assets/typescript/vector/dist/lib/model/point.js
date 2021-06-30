import { BaseElement } from '../elements/base-element';
/**
* A point has an x position and y position
*/
export class Point extends BaseElement {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
}
