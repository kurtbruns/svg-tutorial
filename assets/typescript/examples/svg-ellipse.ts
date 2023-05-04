/**
* @title SVG Ellipse Element
* @description This interactive demonstrates the SVG ellipse element and its attributes.
* @date May 3, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from "./svg-example";

export class SVGEllipseExample extends SVGExample {

  constructor(idOrElement) {

    super(idOrElement);
    let interactive = this;
		let text = this.xml;
    
    let ellipse = this.ellipse(0,0,0,0);
    ellipse.classList.add('default');
    let l1 = this.line( 0, 0, 0, 0);
    let l2 = this.line( 0, 0, 0, 0);
    l1.stroke = 'cornflowerblue';
    l2.stroke = 'cornflowerblue';
    
    let c0 = this.control( 150, 125);
    let c1 = this.control( 250, 125);
    let c2 = this.control( 150, 75);
    
    ellipse.update = function() {
      this.cx = c0.x;
      this.cy = c0.y;
      this.rx = Math.abs(c1.x - c0.x);
      this.ry = Math.abs(c2.y - c0.y);
    }
    ellipse.update();
    ellipse.addDependency(c0);
    ellipse.addDependency(c1);
    ellipse.addDependency(c2);
    
    c1.update = function() {
      this.x += c0.dx;
      this.y += c0.dy;
    }
    c1.addDependency(c0);
    c1.constrainToX();
    
    c2.update = function() {
      this.x += c0.dx;
      this.y += c0.dy;
    }
    c2.addDependency(c0);
    c2.constrainToY();
    
    l1.update = function() {
      this.x1 = c0.x;
      this.y1 = c0.y;
      this.x2 = c1.x;
      this.y2 = c1.y;
    }
    l1.update();
    l1.addDependency(c0);
    l1.addDependency(c1);
    
    l2.update = function() {
      this.x1 = c0.x;
      this.y1 = c0.y;
      this.x2 = c2.x;
      this.y2 = c2.y;
    }
    l2.update();
    l2.addDependency(c0);
    l2.addDependency(c2);
    
    this.xml.tspan('&lt');
    let tag = this.xml.tspan('ellipse ');
    let cx = this.xml.tspan('cx=');
    let cy = this.xml.tspan('cy=');
    let rx = this.xml.tspan('rx=');
    let ry = this.xml.tspan('ry=');
    this.xml.tspan('&gt;');
    // let close = this.xml.tspan('&gt;&lt;/ellipse&gt;');
    this.xml.x = 20;
    this.xml.y = this.maxY - 20;
    
    tag.style.fill = 'purple';
    cx.style.fill = '#ab6f00';
    cy.style.fill = '#ab6f00';
    rx.style.fill = '#ab6f00';
    ry.style.fill = '#ab6f00';
    
    let cxValue = cx.tspan('');
    let cyValue = cy.tspan('');
    let rxValue = rx.tspan('');
    let ryValue = ry.tspan('');
    cxValue.style.fill = '#333333';
    cyValue.style.fill = '#333333';
    rxValue.style.fill = '#333333';
    ryValue.style.fill = '#333333';
    
    cxValue.style.fill = '#333333';
    cxValue.addDependency(ellipse);
    cxValue.update = function() {
      cxValue.text = `"${ellipse.cx.toFixed(0)}" `;
    };
    cyValue.addDependency(ellipse);
    cyValue.update = function() {
      cyValue.text = `"${ellipse.cy.toFixed(0)}" `;
    };
    rxValue.addDependency(ellipse);
    rxValue.update = function() {
      rxValue.text = `"${ellipse.rx.toFixed(0)}" `;
    };
    ryValue.addDependency(ellipse);
    ryValue.update = function() {
      ryValue.text = `"${ellipse.ry.toFixed(0)}"`
    };
    ellipse.updateDependents();
    
  }

}
