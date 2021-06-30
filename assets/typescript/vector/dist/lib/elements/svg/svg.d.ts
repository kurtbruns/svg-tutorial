import { Descriptive, Shape, Structural, Typography } from './content-model';
import { Element, CoreAttributes } from './element';
import { Circle } from './circle';
import { ClipPath } from './clip-path';
import { Definitions } from './definitions';
import { Description } from './description';
import { Ellipse } from './ellipse';
import { Group } from './group';
import { Image } from './image';
import { Line } from './line';
import { Marker } from './marker';
import { MetaData } from './meta-data';
import { Path } from './path';
import { Polygon } from './polygon';
import { Rectangle } from './rectangle';
import { Symbol } from './symbol';
import { Text } from './text';
import { Title } from './title';
import { Use } from './use';
import { A } from './a';
import { Script } from './script';
declare type SVGAttributes = 'viewBox' | 'preserveAspectRatio' | 'transform';
/**
* This class represents a SVG element. A "scalable vector grapic" has two important geometric
* properties. The "viewPort" defines the width and height of the graphic. The "viewBox" defines the
* internal coordinate system used to draw elements.
*/
export declare class SVG extends Element implements Descriptive, Shape, Structural, Typography {
    root: SVGSVGElement;
    /**
    * Constructs a SVG element with the display dimensions specified by the width and height.For the
    * outermost SVG element placed in the DOM, the (x,y) coordinate positions are ignored. For nested
    * SVG element (placed within another SVG element) the (x,y) coordinate positions descript the
    * top-left position of the nested SVG.
    */
    constructor();
    constructor(width: number, height: number);
    /**
    * Constructs and returns a SVG object within the DOM.  If the provided
    * argument is an HTMLElement appends the interactive within that element. If
    * the provided a value is a string, appends the interactive within the HTML
    * element with the corresponding ID. If no element is found throws an error.
    */
    static SVG(idOrElement: string | HTMLElement, width?: number, height?: number): SVG;
    /**
    * Return the width of this svg element.
    */
    get width(): number;
    /**
    * Set the width of this svg element.
    */
    set width(value: number);
    /**
    * Returns the height of this svg element.
    */
    get height(): number;
    /**
    * Sets the height of this svg element to the provided value.
    */
    set height(value: number);
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    /**
    * Returns the maximum x-coordinate in the internal (drawing) coordinate system
    */
    get maxX(): number;
    /**
     * Returns the maximum y-coordinate in the internal (drawing) coordinate system
     */
    get maxY(): number;
    get viewBox(): string;
    /**
     * Sets the viewBox to the provided string in the form of "minX minY width height". This updates
     * the internal coordinate system used for drawing.
     */
    set viewBox(value: string);
    /**
     * Updates the internal coordinate system (used for drawing and scaling).
     *
     * @param minX The top left x-position of the internal coordinate system
     * @param minY The top left y-position of the internal coordinate system
     * @param width The width of the internal coordinate system
     * @param height The height of the internal coorinate system
     */
    setViewBox(minX: number, minY: number, width: number, height: number): void;
    setAttribute(name: SVGAttributes | CoreAttributes, value: string): SVG;
    getAttribute(name: SVGAttributes | CoreAttributes): string;
    description(): Description;
    metadata(): MetaData;
    title(): Title;
    circle(cx: number, cy: number, r: number): Circle;
    ellipse(cx: number, cy: number, rx: number, ry: number): Ellipse;
    image(href: string, width: number, height: number): Image;
    line(x1: number, y1: number, x2: number, y2: number): Line;
    path(d?: string): Path;
    polygon(points: string): Polygon;
    rect(x: number, y: number, width: number, height: number): Rectangle;
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
    defs(): Definitions;
    group(): Group;
    svg(x: number, y: number, width: number, height: number): SVG;
    symbol(): Symbol;
    use(x: number, y: number, width: number, height: number): Use;
    text(x: number, y: number, str?: string): Text;
    /**
    * Constructs and appends an 'a' (link) element within this element.
    */
    a(href: string): A;
    /**
    * Constructs and appends a 'clipPath' element within this element.
    */
    clipPath(): ClipPath;
    /**
    * Constructs and appends a 'marker' element within this element.
    */
    marker(refX: number, refY: number, width: number, height: number): Marker;
    /**
    * Constructs and appends a 'script' element within this element.
    */
    script(): Script;
}
export {};
