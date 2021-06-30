import { Circle } from './circle';
import { Ellipse } from './ellipse';
import { Line } from './line';
import { Path } from './path';
import { Polygon } from './polygon';
import { Rectangle } from './rectangle';
import { Element } from './element';
import { Descriptive, Shape } from './content-model';
import { Description } from './description';
import { MetaData } from './meta-data';
import { Title } from './title';
export declare class ClipPath extends Element implements Descriptive, Shape {
    root: SVGClipPathElement;
    constructor();
    circle(cx: number, cy: number, r: number): Circle;
    ellipse(cx: number, cy: number, rx: number, ry: number): Ellipse;
    line(x1: number, y1: number, x2: number, y2: number): Line;
    path(d: string): Path;
    polygon(points: string): Polygon;
    rectangle(x: number, y: number, width: number, height: number): Rectangle;
    description(): Description;
    metadata(): MetaData;
    title(): Title;
}
