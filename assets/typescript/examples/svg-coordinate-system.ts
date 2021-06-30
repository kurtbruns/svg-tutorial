/**
* @title SVG Coordinate System
* @description This interactive demonstrates the properties of the SVG coordinate system.
* @date July 11, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { Control, Text } from '../vector/dist/lib/index';
import { SVGExample } from './svg-example';

/**
 * 
 */
export default class SVGCoordinateSystem extends SVGExample {
	
	/**
	 * 
	 * @param element 
	 */
	constructor( idOrElement:HTMLElement ) {

		super(idOrElement);

		let control = new Control(100,100);
		this.appendChild(control);

		let text = new Text(115, 115, `(${control.x}, ${control.y})`);
		text.setAttribute('dominant-baseline', 'hanging');
		text.classList.add('monospace');
		text.addDependency(control);
		text.update = () => {
			text.x = control.x + 15;
			text.y = control.y + 15;
			text.contents = `(${control.x.toFixed(0)}, ${control.y.toFixed(0)})`;
		}
		this.appendChild(text);
	}
}