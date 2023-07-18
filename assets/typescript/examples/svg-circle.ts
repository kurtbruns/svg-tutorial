/**
* @title Interactive SVG Circle
* @description This interactive demonstrates the basic properties of the SVG Circle Element.
* @tags [svg]
*/
import { SVGExample } from "./svg-example";

export class SVGCircleExample extends SVGExample {
	
	constructor(idOrElement) {
		super(idOrElement);
		let text = this.xml;
		let circle = this.circle(0,0,0);
		circle.classList.add('default');
		let l1 = this.line( 0, 0, 0, 0);
		l1.stroke = 'cornflowerblue';

		let centerControl = this.control( 150, 125);
		let radiusControl = this.control( 225, 125);

		circle.update = function() {
			this.cx = centerControl.x;
			this.cy = centerControl.y;
			this.r = Math.abs(radiusControl.x - centerControl.x);
		}
		circle.update();
		circle.addDependency(centerControl);
		circle.addDependency(radiusControl);

		radiusControl.update = function() {
			this.x += centerControl.dx;
			this.y += centerControl.dy;
		}
		radiusControl.addDependency(centerControl);
		radiusControl.constrainToX();

		l1.update = function() {
			this.x1 = centerControl.x;
			this.y1 = centerControl.y;
			this.x2 = radiusControl.x;
			this.y2 = radiusControl.y;
		}
		l1.update();
		l1.addDependency(centerControl);
		l1.addDependency(radiusControl);

		// TODO: this is rather hacky, and probably best replaced by implementing the
		// tspan element in our SVG wrapper class.
		let lt = text.tspan('&lt;');
		text.tspan('circle').style.fill = 'purple';
		text.tspan(' cx').style.fill = 'var(--syntax-attribute)';
		let cx = text.tspan('');
		text.tspan(' cy').style.fill = 'var(--syntax-attribute)';
		let cy = text.tspan('');
		text.tspan(' r').style.fill = 'var(--syntax-attribute)';
		let r = text.tspan('');
		let gt = text.tspan('&gt;');

		r.update = () => {
			r.text = `="${circle.r.toFixed(0)}"`;
		};
		cy.update = () => {
			cy.text = `="${circle.cy.toFixed(0)}"`;
		};
		cx.update = () => {
			cx.text = `="${circle.cx.toFixed(0)}"`;
		};

		cy.addDependency(circle);
		cx.addDependency(circle);
		r.addDependency(circle);
		circle.updateDependents();

		// text.update = function() {
		//   let tag = `<tspan style="fill:purple">circle</tspan>`;
		//   let cx = `<tspan style="fill:#ab6f00">cx</tspan>`;
		//   let cy = `<tspan style="fill:#ab6f00">cy</tspan>`;
		//   let r = `<tspan style="fill:#ab6f00">r</tspan>`;
		//   this.contents = `&lt;${tag} ${cx}="${circle.cx.toFixed(0)}"
		//                               ${cy}="${circle.cy.toFixed(0)}"
		//                               ${r}="${circle.r.toFixed(0)}"&gt`;
		// }
		// text.update();
	}
}
