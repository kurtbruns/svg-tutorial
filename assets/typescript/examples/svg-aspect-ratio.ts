/**
* @title Interactive SVG Circle
* @description This interactive demonstrates the basic properties of the SVG Circle Element.
* @tags [svg]
*/
import {SVG, Rectangle} from '@kurtbruns/vector';

interface Configuration {
	width:number;
	height:number;
	maxWidth:number;
}

export class SVGAspectRatioExample {

	config = {

	}

	constructor(element:HTMLElement, width:number, height:number, maxWidth?:number) {

		let svg = new SVG();
		element.appendChild(svg.root);

		// Fill the available space, maintaining the aspect ratio
		svg.root.setAttribute('width', `${width}`);
		svg.root.setAttribute('height', `${height}`);
		svg.classList.add('scale');

		// Define the viewbox of the internal coordinate system
		// let rect = new Rectangle(-width/2, -height/2, width, height); // x y centered origin
		// let rect = new Rectangle(0, -height/2, width, height); // y centered origin
		let rect = new Rectangle(0, 0, width, height); // default origin
		svg.setViewBox(rect.x, rect.y, rect.width, rect.height);

		if( maxWidth ) {
			svg.root.style.maxWidth = `${maxWidth}px`;
			svg.root.style.display = `block`;
			svg.root.style.margin = `auto`;
		}


		// svg.setAttribute('preserveAspectRatio', preserveAspectRatio);
		// svg.root.parentElement.style.maxHeight = `${height}px`;
		// svg.root.parentElement.style.height = `auto`;
		// svg.root.parentElement.classList.add('fixed-height')
		// svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
	
		let group3 = svg.group();
		let group2 = svg.group();
		let group1 = svg.group();

		group3.style.stroke = '#fafafa';
		group2.style.stroke = '#eeeeee';
		group1.style.stroke = '#dcdcdc';

		let MAX =  1000;
		let MIN = -1000;
		for( let i = MIN; i < MAX; i+=10) {
			if( i % 100 === 0) {
				group1.line(i, MIN, i, MAX);
			} else if( i % 10 === 0 ) {
				group2.line(i, MIN, i, MAX);
			} else {
				group3.line(i, MIN, i, MAX);
			}
		}

		for( let i = MIN; i < MAX; i+=10) {
			if( i % 100 === 0) {
				group1.line(MIN, i, MAX, i);
			} else if( i % 10 === 0 ) {
				group2.line(MIN, i, MAX, i);
			} else {
				group3.line(MIN, i, MAX, i);
			}
		}
	
		// let ellipse = svg.ellipse(0, 0, 150, 50);
		// ellipse.style.fill = 'blue';
		// ellipse.style.opacity = '0.2';
	
	
		let border = 2;
		svg.appendChild(rect);
		rect.style.stroke = '#485bfc';
		rect.style.strokeWidth = `${border}px`;
		rect.style.fill = 'none';
		// rect.x += border;
		// rect.y += border;
		// rect.width -= 2*border;
		// rect.height -= 2*border;
	
		// svg.style.border = '1px solid purple';
	
		// svg.root.style.overflow = 'visible';

		// let circle = svg.circle(0,0,height/2);
		// circle.style.fill = 'none';
		// circle.style.stroke = '#404040';
		// circle.style.strokeWidth = '1px';
		let origin = svg.circle(0,0,3);
		origin.style.fill = '#81cfd9';
		origin.style.stroke = '#485bfc';
		origin.style.strokeWidth = '1px';

	}
}