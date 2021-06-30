import "./style.css";
import "vector/style/vector.css";
import "vector/style/templates.css";

import MetaSVGStructure from "./meta-svg-structure";
import MetaSVGSyntax from "./meta-svg-syntax";
import SVGCircleExample from "./svg-circle";
import SVGCoordinateSystemExample from "./svg-coordinate-system";
import SVGEllipseExample from "./svg-ellipse";
import SVGLineExample from "./svg-line";
import SVGPathArcExample from "./svg-path-arc";
import SVGPathBezierQuadraticExample from "./svg-path-bezier-quadratic";
import SVGPathBezierCubic from "./svg-path-bezier-cubic";
import SVGPathLineExample from "./svg-path-line";
import SVGRectangleExample from "./svg-rectangle";
import SVGViewPortExample from "./svg-view-port";
import SVGAspectRatioExample from "./svg-aspect-ratio";

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
	// "svg-coordinate-system" : new SVGCoordinateSystemExample(createContainer(body)),

	// "svg-aspect-ratio-16:9-fill" : new SVGAspectRatioExample(createContainer(body), 288, 144),
	// // "svg-aspect-ratio-4:3-fill" : new SVGAspectRatioExample(createContainer(body), 288, 216),
	
	// "svg-aspect-ratio-16:9-max-width" : new SVGAspectRatioExample(createContainer(body), 288, 144, 288*2),
	// "svg-aspect-ratio-4:3-max-width" : new SVGAspectRatioExample(createContainer(body), 288, 216, 288*2),
	// "svg-aspect-ratio-1:1-max-width" : new SVGAspectRatioExample(createContainer(body), 288, 288, 288*2),

	// "svg-aspect-ratio-16:9-max-width-400" : new SVGAspectRatioExample(createContainer(body), 384, 216, 600),
	// "svg-aspect-ratio-4:3-max-width-400" : new SVGAspectRatioExample(createContainer(body), 384, 288, 600),
	// "svg-aspect-ratio-2:1-max-width-600" : new SVGAspectRatioExample(createContainer(body), 400, 200, 600),
	// "svg-aspect-ratio-1:1-max-width-350" : new SVGAspectRatioExample(createContainer(body), 384, 384, 600),

	/* max-width 600 */
	// "svg-4:3-max-width-600" : new SVGAspectRatioExample(createContainer(body), 600, 450, 600),
	// "svg-3:2-max-width-600" : new SVGAspectRatioExample(createContainer(body), 600, 400, 600),
	// "svg-2:1-max-width-600" : new SVGAspectRatioExample(createContainer(body), 600, 300, 600),

	// /* max-width 400 */
	// "svg-2:1-max-width-400" : new SVGAspectRatioExample(createContainer(body), 400, 200, 400),
	// "svg-16:9-max-width-400" : new SVGAspectRatioExample(createContainer(body), 384, 216, 400),
	// "svg-4:3-max-width-400" : new SVGAspectRatioExample(createContainer(body), 384, 288, 400),
	// "svg-1:1-max-width-400" : new SVGAspectRatioExample(createContainer(body), 400, 400, 400),

	// /* max-width 768 (internal width 576) */
	// "svg-3:1-max-width-768-" : new SVGAspectRatioExample(createContainer(body), 576, 192, 768),
	// "svg-2:1-max-width-768-" : new SVGAspectRatioExample(createContainer(body), 576, 288, 768),
	// "svg-16:9-max-width-768-" : new SVGAspectRatioExample(createContainer(body), 576, 324, 768),
	// "svg-4:3-max-width-768-" : new SVGAspectRatioExample(createContainer(body), 576, 432, 768),
	// "svg-1:1-max-width-768-" : new SVGAspectRatioExample(createContainer(body), 576, 576, 768),

	// /* max-width 576 (internal width 384) */
	// /* good strategy for high quality mobile-friendly minteractives */
	// "svg-3:1-max-width-576" : new SVGAspectRatioExample(createContainer(body), 384, 128, 576),
	// "svg-2:1-max-width-576" : new SVGAspectRatioExample(createContainer(body), 384, 192, 576),
	// "svg-16:9-max-width-576" : new SVGAspectRatioExample(createContainer(body), 384, 216, 576),
	// "svg-4:3-max-width-576" : new SVGAspectRatioExample(createContainer(body), 384, 288, 576),
	// "svg-1:1-max-width-576" : new SVGAspectRatioExample(createContainer(body), 384, 384, 576),

	// /* max-width 432 (internal width 432) */
	// /* good strategy for high quality mobile-friendly minteractives */
	// "svg-4:1-max-width-432" : new SVGAspectRatioExample(createContainer(body), 432, 108, 432),
	// "svg-3:1-max-width-432" : new SVGAspectRatioExample(createContainer(body), 432, 144, 432),
	// "svg-2:1-max-width-432" : new SVGAspectRatioExample(createContainer(body), 432, 216, 432),
	// "svg-16:9-max-width-432" : new SVGAspectRatioExample(createContainer(body), 432, 243, 432),
	// "svg-4:3-max-width-432" : new SVGAspectRatioExample(createContainer(body), 432, 324, 432),
	// "svg-1:1-max-width-432" : new SVGAspectRatioExample(createContainer(body), 432, 432, 432),

	// /* max-width 576 (internal width 576) */
	"svg-3:1-max-width-576-" : new SVGAspectRatioExample(createContainer(body), 576, 192, 576),
	"svg-2:1-max-width-576-" : new SVGAspectRatioExample(createContainer(body), 576, 288, 576),
	"svg-16:9-max-width-576-" : new SVGAspectRatioExample(createContainer(body), 576, 324, 576),
	"svg-4:3-max-width-576-" : new SVGAspectRatioExample(createContainer(body), 576, 432, 576),
	"svg-1:1-max-width-576-" : new SVGAspectRatioExample(createContainer(body), 576, 576, 576),

	// /* max-width 576 (internal width 432 ) */
	"svg-3:1-max-width-576" : new SVGAspectRatioExample(createContainer(body), 432, 144, 576),
	"svg-2:1-max-width-576" : new SVGAspectRatioExample(createContainer(body), 432, 216, 576),
	"svg-16:9-max-width-576" : new SVGAspectRatioExample(createContainer(body), 432, 243, 576),
	"svg-4:3-max-width-576" : new SVGAspectRatioExample(createContainer(body), 432, 324, 576),
	"svg-1:1-max-width-576" : new SVGAspectRatioExample(createContainer(body), 432, 432, 576),

	// /* max-width 432 (internal width 288 ) */
	"svg-3:1-max-width-432" : new SVGAspectRatioExample(createContainer(body), 288, 96, 432),
	"svg-2:1-max-width-432" : new SVGAspectRatioExample(createContainer(body), 288, 144, 432),
	"svg-16:9-max-width-432" : new SVGAspectRatioExample(createContainer(body), 288, 162, 432),
	"svg-4:3-max-width-432" : new SVGAspectRatioExample(createContainer(body), 288, 216, 432),
	"svg-1:1-max-width-432" : new SVGAspectRatioExample(createContainer(body), 288, 288, 432),

	/* max-width 288 (internal width 288 ) */
	"svg-3:1-max-width-288" : new SVGAspectRatioExample(createContainer(body), 288, 96, 288),
	"svg-2:1-max-width-288" : new SVGAspectRatioExample(createContainer(body), 288, 144, 288),
	"svg-16:9-max-width-288" : new SVGAspectRatioExample(createContainer(body), 288, 162, 288),
	"svg-4:3-max-width-288" : new SVGAspectRatioExample(createContainer(body), 288, 216, 288),
	"svg-1:1-max-width-288" : new SVGAspectRatioExample(createContainer(body), 288, 288, 288),

	/* max-width 144 (internal width 144 ) */
	"svg-3:1-max-width-144" : new SVGAspectRatioExample(createContainer(body), 144, 48, 144),
	"svg-2:1-max-width-144" : new SVGAspectRatioExample(createContainer(body), 144, 72, 144),
	"svg-16:9-max-width-144" : new SVGAspectRatioExample(createContainer(body), 144, 81, 144),
	"svg-4:3-max-width-144" : new SVGAspectRatioExample(createContainer(body), 144, 108, 144),
	"svg-1:1-max-width-144" : new SVGAspectRatioExample(createContainer(body), 144, 144, 144),

	/* breakpoint 720 */
	/* breakpoint 576 */
	/* breakpoint 432 */
	/* breakpoint 288 */
	/* maybe the breakpoints take into consideration 2rem (32px) padding */

	"svg-view-port-1:1-left" : new SVGViewPortExample(createContainer(body), 288, 288, 'left'),
	"svg-view-port-1:1-mid" : new SVGViewPortExample(createContainer(body), 288, 288, 'middle'),
	"svg-view-port-1:1-right" : new SVGViewPortExample(createContainer(body), 288, 288, 'right'),
	// "svg-view-port-1:1" : new SVGViewPortExample(createContainer(body), 288, 288, 'xMidYMid meet'),
	// "svg-view-port-4:3" : new SVGViewPortExample(createContainer(body), 288, 216, 'xMidYMid meet'),
	// "svg-view-port-16:9-big" : new SVGViewPortExample(createContainer(body), 288*2, 144*2, 'xMidYMid meet'),
	// "svg-view-port-16:9-small" : new SVGViewPortExample(createContainer(body), 288*1, 144*1, 'xMidYMid meet'),

	// "svg-aspect-ratio-1:1" : new SVGViewPortExample2(createContainer(body), 280, 280, 'xMidYMid meet'),
	"meta-svg-structure" : new MetaSVGStructure(createContainer(body)),
	"meta-svg-syntax" : new MetaSVGSyntax(createContainer(body), false),
	"svg-circle" : new SVGCircleExample(createContainer(body)),
	"svg-ellipse" : new SVGEllipseExample(createContainer(body)),
	"svg-line" : new SVGLineExample(createContainer(body)),
	"svg-rectangle" : new SVGRectangleExample(createContainer(body)),
	"svg-path-bezier-line" : new SVGPathLineExample(createContainer(body)),
	"svg-path-bezier-quadratic" : new SVGPathBezierQuadraticExample(createContainer(body)),
	"svg-path-bezier-cubic" : new SVGPathBezierCubic(createContainer(body)),
	// "svg-path-bezier-arc" : new SVGPathArcExample(createContainer(body)),

};