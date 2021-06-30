import { Shape } from './shape';
import { Circle } from './circle';
import { Ellipse } from './ellipse';
import { Line } from './line';
import { Rectangle } from './rectangle';
/**
* A path element allows for the creation of complicated shapes and curves.
*/
export class Path extends Shape {
    /**
    * Construct a new path element with a string of commands.
    */
    constructor(d) {
        // TODO: see comment above the type of the root
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        super(path);
    }
    /**
    * Returns the d attribute
    */
    get d() {
        return this.root.getAttribute('d');
    }
    /**
    * Sets the d attribute
    */
    set d(d) {
        this.root.setAttribute('d', d);
    }
    attatchArrow(defs, start = true) {
        if (defs === undefined) {
            throw new Error(`Undefined definitions ${this}: ${this.id}`);
        }
        defs.root.innerHTML = `<marker id="arrow" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" style="fill:#404040; stroke:none;"></path></marker>`;
        if (start) {
            this.setAttribute('marker-start', `url(#arrow)`);
        }
        else {
            this.setAttribute('marker-end', `url(#arrow)`);
        }
    }
    /**
    * Returns the path representation of the provided shape.
    */
    static getPath(shape) {
        if (shape instanceof Circle) {
            return new Path(`M ${shape.cx + shape.r} ${shape.cy} A ${shape.r} ${shape.r} 0 0 0 ${shape.cx - shape.r} ${shape.cy} A ${shape.r} ${shape.r} 0 0 0 ${shape.cx + shape.r} ${shape.cy}`);
        }
        else if (shape instanceof Ellipse) {
            throw Error('Not Implemented');
        }
        else if (shape instanceof Line) {
            throw Error('Not Implemented');
        }
        else if (shape instanceof Path) {
            throw Error('Not Implemented');
        }
        else if (shape instanceof Rectangle) {
            throw Error('Not Implemented');
        }
        else {
            throw Error('Not Implemented');
        }
    }
}
