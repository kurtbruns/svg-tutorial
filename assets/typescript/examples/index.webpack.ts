import "./style.css";
import "vector/style/vector.css";
import "vector/style/templates.css";

// import MetaSVGStructure from "./meta-svg-structure";
// import MetaSVGSyntax from "./meta-svg-syntax";
import SVGCircleExample from "./svg-circle";
import SVGCoordinateSystemExample from "./svg-coordinate-system";
import SVGEllipseExample from "./svg-ellipse";
import SVGLineExample from "./svg-line";
// import SVGPathArcExample from "./svg-path-arc";
import SVGPathBezierQuadraticExample from "./svg-path-bezier-quadratic";
import SVGPathBezierCubic from "./svg-path-bezier-cubic";
import SVGPathLineExample from "./svg-path-line";
import SVGRectangleExample from "./svg-rectangle";
// import SVGViewPortExample from "./svg-view-port";
// import SVGAspectRatioExample from "./svg-aspect-ratio";

let body = document.getElementsByTagName("body")[0];

/**
 * Creates a container within the specified HTML element
 * @param element
 */
// function createContainer( element:HTMLElement ) : HTMLDivElement {
// 	let sectionContainer = document.createElement('div');
// 	let area = document.createElement("div");
// 	let exampleSection = document.createElement("div");
// 	let container = document.createElement("div");
// 	let parent = document.createElement("div");

// 	sectionContainer.classList.add('section-container');
// 	exampleSection.classList.add('ex-section');
// 	area.classList.add('ex-area');
// 	container.classList.add('ex-container');
// 	parent.classList.add('parent');

// 	element.appendChild(document.createElement('section'))
// 		.appendChild(sectionContainer)
// 		.appendChild(exampleSection)
// 		.appendChild(area)
// 		.appendChild(container)
// 		.appendChild(parent);

// 	return parent;
// }
function createContainer( element:HTMLElement ) : HTMLDivElement {
	let container = element.appendChild(document.createElement('div'));
	container.classList.add('simple-container');
	return container;
}

(window as any).figures = {

	// "meta-svg-structure" : new MetaSVGStructure(createContainer(body)),
	// "meta-svg-syntax" : new MetaSVGSyntax(createContainer(body), false),
	"svg-coordinate-system" : new SVGCoordinateSystemExample(createContainer(body)),
	"svg-circle" : new SVGCircleExample(createContainer(body)),
	"svg-ellipse" : new SVGEllipseExample(createContainer(body)),
	"svg-line" : new SVGLineExample(createContainer(body)),
	"svg-rectangle" : new SVGRectangleExample(createContainer(body)),
	"svg-path-bezier-line" : new SVGPathLineExample(createContainer(body)),
	"svg-path-bezier-quadratic" : new SVGPathBezierQuadraticExample(createContainer(body)),
	"svg-path-bezier-cubic" : new SVGPathBezierCubic(createContainer(body)),
	// "svg-path-bezier-arc" : new SVGPathArcExample(createContainer(body)),

};