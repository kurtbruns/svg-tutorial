

import { ResponsiveArtboard, Text, TSpan, Group } from '@kurtbruns/vector';

/**
 * 
 */
export class MetaSVGSyntaxExample {
	
	colors = {
		'tag':'#404040',
		'attribute':'#404040',
		'value':'#404040',
	}

	colors2 = {
		'tag':'#1c23a3',
		'attribute':'cornflowerblue',
		'value':'purple',
	}

	temp = {
		'tag':'purple',
		'attribute':'#ab6f00',
		'value':'#1c23a3',
	}

	interactive:ResponsiveArtboard;
	background:Group;

	/**
	 * 
	 * @param element 
	 */
	constructor( element:string|HTMLElement, structure:boolean = false ) {

		let interactive = new ResponsiveArtboard(element);
		interactive.height = 125;
		interactive.root.setAttribute('width', '100%');
		this.background = interactive.group();
		let tagName = 'circle';

		let text = interactive.text(0,0, '');
		text.classList.add('monospace');


		let openingTag = text.tspan();
		openingTag.style.fill = this.colors['tag'];
		openingTag.tspan('&lt;')
		let openingTagName = openingTag.tspan(tagName)
		openingTagName

		openingTag.tspan(' ');

		let attributes = openingTag.tspan('');
		this.addAttribute(attributes, 'cx', '50')
		attributes.tspan(' ');
		this.addAttribute(attributes, 'cy', '50')
		attributes.tspan(' ');
		this.addAttribute(attributes, 'r', '15')

		openingTag.tspan('&gt;');

		let children = text.tspan('...');

		let closingTag = text.tspan();
		closingTag.style.fill = this.colors['tag'];
		closingTag.tspan('&lt;/')
		let closingTagName = closingTag.tspan(tagName);
		closingTag.tspan('&gt;');
		
		let margin = 8;
		let bbox = text.root.getBBox();
		interactive.setViewBox( bbox.x - margin, bbox.y - margin, bbox.width + 2*margin, bbox.height + 2*margin);
		interactive.height = 2*(bbox.height + 2*margin);
		interactive.root.setAttribute('preserveAspectRatio', 'xMinYMid meet');
		interactive.classList.add('border');

		this.interactive = interactive;
		// this.annotate(openingTag, 'lightgreen','opening tag');
		// this.annotate(children, 'cornflowerblue','children');
		// this.annotate(closingTag, 'lightgreen','closing tag');

		document.onload = () => {
			if( structure ) {
				this.annotate(children, 'green');
				// this.annotate(openingTag, 'green');
				// this.annotate(closingTag, 'green');
			} else {
				this.annotate(openingTagName, 'purple');
				this.annotate(attributes, 'blue');
				this.annotate(closingTagName, 'purple');
			}
		}
	}
	
	addAttribute( target:Text|TSpan, name:string, value, update?) {
		target.tspan(name).style.fill = this.colors['attribute'];
		target.tspan('=');
		target.tspan(`"${value}"`).style.fill = this.colors['value'];
	}

	annotate( target:Text|TSpan, color, str?) {
		let spacing = 0;
		let bbox = target.root.getBBox();
		let rect = this.background.rectangle(bbox.x - spacing, bbox.y - spacing, bbox.width + 2*spacing, bbox.height + 2*spacing);
		rect.classList.add(color)

		// rect.style.opacity = '0.5';
		return rect;
	}


}