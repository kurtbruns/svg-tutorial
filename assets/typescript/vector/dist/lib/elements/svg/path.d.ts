import { Shape } from './shape';
import { Definitions } from './definitions';
/**
* A path element allows for the creation of complicated shapes and curves.
*/
export declare class Path extends Shape {
    root: any | SVGGeometryElement | SVGPathElement;
    /**
    * Construct a new path element with a string of commands.
    */
    constructor(d: string);
    /**
    * Returns the d attribute
    */
    get d(): string;
    /**
    * Sets the d attribute
    */
    set d(d: string);
    attatchArrow(defs: Definitions, start?: boolean): void;
    /**
    * Returns the path representation of the provided shape.
    */
    static getPath(shape: Shape): Path;
}
