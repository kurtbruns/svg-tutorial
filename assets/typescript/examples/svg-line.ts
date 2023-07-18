/**
* @title SVG Line
* @description This interactive demonstrates the SVG line element and its attributes.
* @date May 3, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from "./svg-example";

export class SVGLineExample extends SVGExample {
  constructor(idOrElement) {
    super(idOrElement);
    let interactive = this;
    let line = interactive.line(0, 0, 0, 0);
    line.classList.add('default');

    let c1 = interactive.control(75, 75);
    let c2 = interactive.control(225, 175);

    line.update = function () {
      this.x1 = c1.x;
      this.y1 = c1.y;
      this.x2 = c2.x;
      this.y2 = c2.y;
    }
    line.update();
    line.addDependency(c1);
    line.addDependency(c2);

    this.xml.tspan('&lt');
    let tag = this.xml.tspan('line ');
    let x1 = this.xml.tspan('x1=');
    let y1 = this.xml.tspan('y1=');
    let x2 = this.xml.tspan('x2=');
    let y2 = this.xml.tspan('y2=');
    this.xml.tspan('&gt;');
    // let close = this.xml.tspan('&gt;&lt;/ellipse&gt;');

    this.xml.x = 20;
    this.xml.y = this.maxY - 20;
    tag.style.fill = 'var(--syntax-tag)';
    x1.style.fill = 'var(--syntax-attribute)';
    y1.style.fill = 'var(--syntax-attribute)';
    x2.style.fill = 'var(--syntax-attribute)';
    y2.style.fill = 'var(--syntax-attribute)';

    let x1Value = x1.tspan('');
    let y1Value = y1.tspan('');
    let x2Value = x2.tspan('');
    let y2Value = y2.tspan('');
    x1Value.style.fill = 'var(--syntax-string)';
    y1Value.style.fill = 'var(--syntax-string)';
    x2Value.style.fill = 'var(--syntax-string)';
    y2Value.style.fill = 'var(--syntax-string)';

    x1Value.addDependency(line);
    x1Value.update = function () {
      x1Value.text = `"${line.x1.toFixed(0)}" `;
    };

    y1Value.addDependency(line);
    y1Value.update = function () {
      y1Value.text = `"${line.y1.toFixed(0)}" `;
    };

    x2Value.addDependency(line);
    x2Value.update = function () {
      x2Value.text = `"${line.x2.toFixed(0)}" `;
    };

    y2Value.addDependency(line);
    y2Value.update = function () {
      y2Value.text = `"${line.y2.toFixed(0)}"`
    };
    line.updateDependents();

  }
}