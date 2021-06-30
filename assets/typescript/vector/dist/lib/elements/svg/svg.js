import { Element } from './element';
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
/**
* This class represents a SVG element. A "scalable vector grapic" has two important geometric
* properties. The "viewPort" defines the width and height of the graphic. The "viewBox" defines the
* internal coordinate system used to draw elements.
*/
export class SVG extends Element {
    constructor(arg1, arg2) {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        if (arg1 && arg2) {
            svg.setAttributeNS(null, 'width', arg1.toString());
            svg.setAttributeNS(null, 'height', arg2.toString());
        }
        super(svg);
    }
    /**
    * Constructs and returns a SVG object within the DOM.  If the provided
    * argument is an HTMLElement appends the interactive within that element. If
    * the provided a value is a string, appends the interactive within the HTML
    * element with the corresponding ID. If no element is found throws an error.
    */
    static SVG(idOrElement, width, height) {
        // get the container element
        let container;
        if (typeof idOrElement == "string") {
            container = document.getElementById(idOrElement);
            if (container === null || container === undefined) {
                throw new Error(`There is no HTML element with the id: ${idOrElement}`);
            }
        }
        else {
            container = idOrElement;
        }
        // construct and append the svg
        let svg = new SVG(width, height);
        container.appendChild(svg.root);
        return svg;
    }
    /**
    * Return the width of this svg element.
    */
    get width() {
        return this.root.width.baseVal.value;
    }
    /**
    * Set the width of this svg element.
    */
    set width(value) {
        this.root.setAttribute('width', value.toString());
    }
    /**
    * Returns the height of this svg element.
    */
    get height() {
        return this.root.height.baseVal.value;
    }
    /**
    * Sets the height of this svg element to the provided value.
    */
    set height(value) {
        this.root.setAttribute('height', value.toString());
    }
    get x() {
        return this.root.x.baseVal.value;
    }
    set x(value) {
        this.root.x.baseVal.value = value;
    }
    get y() {
        return this.root.y.baseVal.value;
    }
    set y(value) {
        this.root.y.baseVal.value = value;
    }
    /**
    * Returns the maximum x-coordinate in the internal (drawing) coordinate system
    */
    get maxX() {
        return this.root.viewBox.baseVal.x + this.root.viewBox.baseVal.width;
    }
    /**
     * Returns the maximum y-coordinate in the internal (drawing) coordinate system
     */
    get maxY() {
        return this.root.viewBox.baseVal.y + this.root.viewBox.baseVal.height;
    }
    get viewBox() {
        return this.root.getAttribute('viewBox');
    }
    /**
     * Sets the viewBox to the provided string in the form of "minX minY width height". This updates
     * the internal coordinate system used for drawing.
     */
    set viewBox(value) {
        this.root.setAttribute('viewBox', value);
    }
    /**
     * Updates the internal coordinate system (used for drawing and scaling).
     *
     * @param minX The top left x-position of the internal coordinate system
     * @param minY The top left y-position of the internal coordinate system
     * @param width The width of the internal coordinate system
     * @param height The height of the internal coorinate system
     */
    setViewBox(minX, minY, width, height) {
        this.root.setAttribute('viewBox', `${minX} ${minY} ${width} ${height}`);
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
    // descriptive elements
    description() {
        return this.appendChild(new Description());
    }
    metadata() {
        return this.appendChild(new MetaData());
    }
    title() {
        return this.appendChild(new Title());
    }
    // shape elements, comments inherited from implementing abstract class
    circle(cx, cy, r) {
        return this.appendChild(new Circle(cx, cy, r));
    }
    ellipse(cx, cy, rx, ry) {
        return this.appendChild(new Ellipse(cx, cy, rx, ry));
    }
    image(href, width, height) {
        return this.appendChild(new Image(href, width, height));
    }
    line(x1, y1, x2, y2) {
        return this.appendChild(new Line(x1, y1, x2, y2));
    }
    path(d = '') {
        return this.appendChild(new Path(d));
    }
    polygon(points) {
        return this.appendChild(new Polygon(points));
    }
    rect(x, y, width, height) {
        return this.rectangle(x, y, width, height);
    }
    rectangle(x, y, width, height) {
        return this.appendChild(new Rectangle(x, y, width, height));
    }
    // structural elements
    defs() {
        return this.appendChild(new Definitions());
    }
    group() {
        return this.appendChild(new Group());
    }
    svg(x, y, width, height) {
        let svg = new SVG(width, height);
        svg.x = x;
        svg.y = y;
        return this.appendChild(svg);
    }
    symbol() {
        return this.appendChild(new Symbol());
    }
    use(x, y, width, height) {
        return this.appendChild(new Use(x, y, width, height));
    }
    // typography elements
    text(x, y, str = '') {
        return this.appendChild(new Text(x, y, str));
    }
    // other elements
    /**
    * Constructs and appends an 'a' (link) element within this element.
    */
    a(href) {
        return this.appendChild(new A(href));
    }
    /**
    * Constructs and appends a 'clipPath' element within this element.
    */
    clipPath() {
        return this.appendChild(new ClipPath());
    }
    /**
    * Constructs and appends a 'marker' element within this element.
    */
    marker(refX, refY, width, height) {
        return this.appendChild(new Marker(refX, refY, width, height));
    }
    /**
    * Constructs and appends a 'script' element within this element.
    */
    script() {
        return this.appendChild(new Script());
    }
}
