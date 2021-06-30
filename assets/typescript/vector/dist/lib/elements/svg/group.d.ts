import { Element, CoreAttributes } from './element';
import { Structural, Shape, Descriptive } from './content-model';
import { A } from './a';
import { Circle } from './circle';
import { ClipPath } from './clip-path';
import { Definitions } from './definitions';
import { Ellipse } from './ellipse';
import { Line } from './line';
import { Path } from './path';
import { Polygon } from './polygon';
import { Rectangle } from './rectangle';
import { Symbol } from './symbol';
import { SVG } from './svg';
import { Text } from './text';
import { Title } from './title';
import { Use } from './use';
import { Description } from './description';
import { MetaData } from './meta-data';
declare type GroupAttributes = 'clip-path' | 'transform';
/**
* A group is a structural element that allows for elements to be grouped
* together and have styles and transformations applied to the elements in the
* group.
*/
export declare class Group extends Element implements Descriptive, Shape, Structural {
    root: SVGGElement;
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor();
    setAttribute(name: GroupAttributes | CoreAttributes, value: string): Group;
    getAttribute(name: GroupAttributes | CoreAttributes): string;
    description(): Description;
    metadata(): MetaData;
    title(): Title;
    defs(): Definitions;
    group(): Group;
    svg(width: number, height: number): SVG;
    symbol(): Symbol;
    use(x: number, y: number, width: number, height: number): Use;
    circle(cx: number, cy: number, r: number): Circle;
    ellipse(cx: number, cy: number, rx: number, ry: number): Ellipse;
    line(x1: number, y1: number, x2: number, y2: number): Line;
    path(d: string): Path;
    polygon(points: string): Polygon;
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
    /**
    * Constructs and appends a text element within this element.
    */
    text(x: number, y: number, str: string): Text;
    /**
    * Constructs and appends an 'a' (link) within this element.
    */
    a(href: string): A;
    /**
    * Constructs and appends a clipPath within this element
    */
    clipPath(): ClipPath;
}
export {};
