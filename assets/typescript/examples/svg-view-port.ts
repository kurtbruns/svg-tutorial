/**
* @title Interactive SVG Circle
* @description This interactive demonstrates the basic properties of the SVG Circle Element.
* @tags [svg]
*/
import { SVG, Rectangle, ResponsiveArtboard } from '@kurtbruns/vector';
// import ResizeObserver from 'resize-observer-polyfill';

export class SVGViewPortExample {

	minWidth = 288;

	ratio;


	constructor(element:HTMLElement, width:number, height:number, align:string = 'left') {
		let svg = new SVG();
		element.appendChild(svg.root);
		let rect = new Rectangle(-width/2, -height/2, width, height);
		svg.setViewBox(rect.x, rect.y, rect.width, rect.height);
		svg.root.setAttribute('width', `${width}`);
		svg.root.setAttribute('height', `${height}`);
		// svg.classList.add('scale');
		// svg.setAttribute('preserveAspectRatio', preserveAspectRatio);
		svg.root.style.display = 'block';
		svg.root.style.maxWidth = '100%';
		svg.root.style.height = 'auto';

		switch(align) {
			case 'middle':
				svg.root.style.margin = 'auto';
				break;
			case 'right':
				svg.root.style.marginLeft = 'auto';
				break;
		}

		// svg.root.style.margin = 'auto';
		svg.root.style.overflow = 'visible';
		svg.root.parentElement.style.overflow = 'hidden';

		this.ratio = width/height;
		// svg.root.parentElement.style.height = `${height}px`;
		// svg.root.parentElement.style.height = `auto`;
		// svg.root.parentElement.classList.add('fixed-height');
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
		// let circle = svg.circle(0,0,150);
		// circle.style.fill = 'none';
		// circle.style.stroke = '#404040';
		// circle.style.strokeWidth = '1px';
	
		let origin = svg.circle(0,0,3);
		origin.style.fill = '#81cfd9';
		origin.style.stroke = '#485bfc';
		origin.style.strokeWidth = '1px';
	
		// let point = svg.circle(0,0,3);
		// point.style.fill = 'red';
		// point.addDependency(svg);
		// point.update = () => {
		// 	let bbox = svg.root.getBoundingClientRect();
		// 	let p = svg.root.createSVGPoint();
		// 	p.x = bbox.x + bbox.width;
		// 	p.y = bbox.y + bbox.height/2;
		// 	let p2 = p.matrixTransform(svg.root.getScreenCTM().inverse());
		// 	point.cx = p2.x;
		// };
	
		// let target = svg.root.parentElement;
		// const observer = new ResizeObserver((entries, observer) => {
		// 	for (const entry of entries) {
		// 		if( target === entry.target ){
		// 			let bbox = target.getBoundingClientRect();
		// 			if( width > bbox.width ) {
		// 				svg.root.setAttribute('height', '100%');
		// 			} else {
		// 				svg.root.setAttribute('height', `${height}px`);
		// 			}
		// 			// svg.updateDependents();
		// 		}
		// 	}
		// });
		// observer.observe(target);
	
		let border = 1;
		rect.x += .5;
		rect.y += .5;
		rect.width -= 1;
		rect.height -= 1;
		svg.appendChild(rect);
		rect.style.stroke = '#0366EE';
		rect.style.strokeWidth = `${border}px`;
		rect.style.fill = 'none';
		// rect.x += border;
		// rect.y += border;
		// rect.width -= 2*border;
		// rect.height -= 2*border;
	
		// svg.style.border = '1px solid purple';
	
		// svg.root.style.overflow = 'visible';
	}
}