import { Element } from './element';
/**
*/
export class Image extends Element {
    /**
    * Contructs an image element
    */
    constructor(href, width, height) {
        let element = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        element.setAttributeNS(null, 'href', href);
        element.setAttributeNS(null, 'width', width.toString());
        element.setAttributeNS(null, 'height', height.toString());
        super(element);
    }
    /**
    * Returns the x position
    */
    get x() {
        return this.root.x.baseVal.value;
    }
    /**
    * Sets the x position
    */
    set x(x) {
        this.root.x.baseVal.value = x;
    }
    /**
    * Returns the y position
    */
    get y() {
        return this.root.y.baseVal.value;
    }
    /**
    * Sets the y position
    */
    set y(y1) {
        this.root.y.baseVal.value = y1;
    }
    /**
    * Returns the width
    */
    get width() {
        return this.root.width.baseVal.value;
    }
    /**
    * Sets the width
    */
    set width(v) {
        this.root.width.baseVal.value = v;
    }
    /**
    * Returns the height
    */
    get height() {
        return this.root.height.baseVal.value;
    }
    /**
    * Sets the height
    */
    set y2(y2) {
        this.root.height.baseVal.value = y2;
    }
}
