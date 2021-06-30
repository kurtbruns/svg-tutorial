import { Element, CoreAttributes } from './element';
import { Structural, Shape } from './content-model';
import { Circle } from './circle';
import { Definitions } from './definitions';
import { Description } from './description';
import { Ellipse } from './ellipse';
import { Group } from './group';
import { Line } from './line';
import { MetaData } from './meta-data';
import { Path } from './path';
import { Polygon } from './polygon';
import { Rectangle } from './rectangle';
import { Symbol } from './symbol';
import { SVG } from './svg';
import { Text } from './text';
import { Title } from './title';
import { Use } from './use';
declare type MarkerAttributes = 'viewBox' | 'preserveAspectRatio' | 'refX' | 'refY' | 'markerUnits' | 'markerWidth' | 'markerHeight' | 'orient';
/**
* A marker is a shape that can be repeatably drawn on a shape.
*/
export declare class Marker extends Element implements Shape, Structural {
    root: SVGMarkerElement;
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(refX: number, refY: number, width: number, height: number);
    setAttribute(name: MarkerAttributes | CoreAttributes, value: string): Element;
    getAttribute(name: MarkerAttributes | CoreAttributes): string;
    get viewBox(): string;
    set viewBox(value: string);
    get refX(): number;
    set refX(value: number);
    get refY(): number;
    set refY(value: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    description(): Description;
    metadata(): MetaData;
    title(): Title;
    defs(): Definitions;
    group(): Group;
    svg(): SVG;
    symbol(): Symbol;
    use(x: number, y: number, width: number, height: number): Use;
    circle(cx: number, cy: number, r: number): Circle;
    ellipse(cx: number, cy: number, rx: number, ry: number): Ellipse;
    line(x1: number, y1: number, x2: number, y2: number): Line;
    path(d: string): Path;
    polygon(points: string): Polygon;
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
    text(x: number, y: number, str: string): Text;
}
export {};
