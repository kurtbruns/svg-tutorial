/**
* @title SVG Rectangle Element
* @description This interactive demonstrates the SVG rectangle element and its attributes.
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from "./svg-example";

export class SVGRectangleExample extends SVGExample {

  constructor( idOrElement ) {

    super(idOrElement);
    let interactive = this;
    let text = this.xml;
    
    let rect = interactive.rectangle(0,0,0,0);
    rect.classList.add('default');
    
    let c1 = interactive.control( 50, 50);
    let c2 = interactive.control( 250, 200);
    
    c2.update = function() {
      this.x += c1.dx;
      this.y += c1.dy;
    }
    c2.addDependency(c1);
    
    rect.update = function() {
      this.x = c1.x;
      this.y = c1.y;
      this.width = c2.x - c1.x;
      this.height = c2.y - c1.y;
    }
    rect.update();
    rect.addDependency(c1);
    rect.addDependency(c2);
    
    this.xml.tspan('&lt');
    let tag = this.xml.tspan('rect ');
    let x = this.xml.tspan('x=');
    let y = this.xml.tspan('y=');
    let width = this.xml.tspan('width=');
    let height = this.xml.tspan('height=');
    this.xml.tspan('&gt;');
    // let close = this.xml.tspan('&gt;&lt;/ellipse&gt;');

    this.xml.x = 20;
    this.xml.y = this.maxY - 20;
    tag.style.fill = 'var(--syntax-tag)';
    x.style.fill = 'var(--syntax-attribute)';
    y.style.fill = 'var(--syntax-attribute)';
    width.style.fill = 'var(--syntax-attribute)';
    height.style.fill = 'var(--syntax-attribute)';

    let xValue = x.tspan('');
    let yValue = y.tspan('');
    let widthValue = width.tspan('');
    let heightValue = height.tspan('');
    xValue.style.fill = 'var(--syntax-string)';
    yValue.style.fill = 'var(--syntax-string)';
    widthValue.style.fill = 'var(--syntax-string)';
    heightValue.style.fill = 'var(--syntax-string)';

    xValue.addDependency(rect);
    xValue.update = function () {
      xValue.text = `"${rect.x.toFixed(0)}" `;
    };

    yValue.addDependency(rect);
    yValue.update = function () {
      yValue.text = `"${rect.y.toFixed(0)}" `;
    };

    widthValue.addDependency(rect);
    widthValue.update = function () {
      widthValue.text = `"${rect.width.toFixed(0)}" `;
    };

    heightValue.addDependency(rect);
    heightValue.update = function () {
      heightValue.text = `"${rect.height.toFixed(0)}"`
    };
    rect.updateDependents();

    
  }

  

}
