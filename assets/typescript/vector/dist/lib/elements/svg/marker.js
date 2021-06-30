import { Element } from './element';
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
/**
* A marker is a shape that can be repeatably drawn on a shape.
*/
export class Marker extends Element {
    /**
    * Constructs a rectangle element at the position (x,y)
    */
    constructor(refX, refY, width, height) {
        let element = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        element.setAttributeNS(null, 'refX', refX.toString());
        element.setAttributeNS(null, 'refY', refY.toString());
        element.setAttributeNS(null, 'markerWidth', width.toString());
        element.setAttributeNS(null, 'markerHeight', height.toString());
        super(element);
    }
    // comment inherited from base class
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    // comment inherited from base class
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
    get viewBox() {
        return this.getAttribute('viewBox');
    }
    set viewBox(value) {
        this.setAttribute('viewBox', value);
    }
    get refX() {
        return this.root.refX.baseVal.value;
    }
    set refX(value) {
        this.root.refX.baseVal.value = value;
    }
    get refY() {
        return this.root.refY.baseVal.value;
    }
    set refY(value) {
        this.root.refY.baseVal.value = value;
    }
    get width() {
        return this.root.markerWidth.baseVal.value;
    }
    set width(value) {
        this.root.markerWidth.baseVal.value = value;
    }
    get height() {
        return this.root.markerHeight.baseVal.value;
    }
    set height(value) {
        this.root.markerHeight.baseVal.value = value;
    }
    // Descriptive methods
    description() {
        return this.appendChild(new Description());
    }
    metadata() {
        return this.appendChild(new MetaData());
    }
    title() {
        return this.appendChild(new Title());
    }
    // Structural methods
    defs() {
        return this.appendChild(new Definitions());
    }
    group() {
        return this.appendChild(new Group());
    }
    svg() {
        return this.appendChild(new SVG());
    }
    symbol() {
        return this.appendChild(new Symbol());
    }
    use(x, y, width, height) {
        return this.appendChild(new Use(x, y, width, height));
    }
    // Shape methods
    circle(cx, cy, r) {
        return this.appendChild(new Circle(cx, cy, r));
    }
    ellipse(cx, cy, rx, ry) {
        return this.appendChild(new Ellipse(cx, cy, rx, ry));
    }
    line(x1, y1, x2, y2) {
        return this.appendChild(new Line(x1, y1, x2, y2));
    }
    path(d) {
        return this.appendChild(new Path(d));
    }
    polygon(points) {
        return this.appendChild(new Polygon(points));
    }
    rectangle(x, y, width, height) {
        return this.appendChild(new Rectangle(x, y, width, height));
    }
    // other methods
    text(x, y, str) {
        return this.appendChild(new Text(x, y, str));
    }
}
