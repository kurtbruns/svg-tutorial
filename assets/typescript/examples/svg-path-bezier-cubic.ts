/**
* @title SVG Path Cubic Bezier Curve
* @description This interactive demonstrates the cubic bezier command for a SVG path element. There are four control points that allow the user to control the shape of the bezier curve that is drawn.
* @date May 3, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from "./svg-example";

export class SVGPathBezierCubicExample extends SVGExample {
  constructor(idOrElement) {
    super(idOrElement);
    let interactive = this;
    let text = this.xml;

    let l1 = interactive.line( 0, 0, 0, 0);
    let l2 = interactive.line( 0, 0, 0, 0);
    let l3 = interactive.line( 0, 0, 0, 0);
    l1.stroke = 'cornflowerblue';
    l2.stroke = 'cornflowerblue';
    l3.stroke = 'cornflowerblue';
    let path = interactive.path('');
    path.classList.add('default');
    let c1 = interactive.control( 50, 75);
    let c2 = interactive.control( 50, 200);
    let c3 = interactive.control( 250, 200);
    let c4 = interactive.control( 250, 75);

    path.update = function() {
      path.d = `M ${c1.x} ${c1.y} C ${c2.x} ${c2.y} ${c3.x} ${c3.y} ${c4.x} ${c4.y}`;
    };
    path.update();
    path.addDependency(c1);
    path.addDependency(c2);
    path.addDependency(c3);
    path.addDependency(c4);

    l1.update = function() {
      this.x1 = c1.x;
      this.y1 = c1.y;
      this.x2 = c2.x;
      this.y2 = c2.y;
    };
    l1.update();
    l1.addDependency(c1);
    l1.addDependency(c2);

    l2.update = function() {
      this.x1 = c2.x;
      this.y1 = c2.y;
      this.x2 = c3.x;
      this.y2 = c3.y;
    };
    l2.update();
    l2.addDependency(c2);
    l2.addDependency(c3);

    l3.update = function() {
      this.x1 = c3.x;
      this.y1 = c3.y;
      this.x2 = c4.x;
      this.y2 = c4.y;
    };
    l3.update();
    l3.addDependency(c3);
    l3.addDependency(c4);

    this.xml.tspan('&lt');
    let tag = this.xml.tspan('path ');
    let d = this.xml.tspan('d=');
    d.style.fill = 'var(--syntax-attribute)';
    this.xml.tspan('&gt;');
    // let close = this.xml.tspan('&gt;&lt;/ellipse&gt;');

    this.xml.x = 20;
    this.xml.y = this.maxY - 20;
    tag.style.fill = 'var(--syntax-tag)';

    let dValue = d.tspan('');
    dValue.style.fill = 'var(--syntax-string)';

    dValue.addDependency(path);
    dValue.update = function () {
      dValue.text = `"${path.d}" `;
    };

    this.xml.addDependency(path);
    path.updateDependents();

  }
}

