import { Shape } from './shape';
/**
* A polygon is a closed shape defined by a series of points.
*/
export declare class Polygon extends Shape {
    root: SVGPolygonElement;
    constructor(points: string);
    get points(): string;
}
