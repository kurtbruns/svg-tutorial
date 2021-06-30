import { Element } from './element';
/**
*/
export declare class Image extends Element {
    root: SVGImageElement;
    /**
    * Contructs an image element
    */
    constructor(href: string, width: number, height: number);
    /**
    * Returns the x position
    */
    get x(): number;
    /**
    * Sets the x position
    */
    set x(x: number);
    /**
    * Returns the y position
    */
    get y(): number;
    /**
    * Sets the y position
    */
    set y(y1: number);
    /**
    * Returns the width
    */
    get width(): number;
    /**
    * Sets the width
    */
    set width(v: number);
    /**
    * Returns the height
    */
    get height(): number;
    /**
    * Sets the height
    */
    set y2(y2: number);
}
