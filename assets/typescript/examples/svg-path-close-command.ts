/**
* @title SVG Path Element Line Command
* @description This interactive demonstrates the line command for the SVG path element. There are two controls that allow the user to control the start and end points of the line. There is also a checkbox that allows the user to toggle between relative and absolute commands
* @date May 3, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from './svg-example';
import { PancakeLayout } from '../vector/dist/lib/index';

export default class SVGPathCloseCommand extends SVGExample {
  constructor(idOrElement) {

    let template = new PancakeLayout(idOrElement);
    super(template.main);
    template.main.style.marginBottom = '1rem';
    let interactive = this;
    let text = this.xml;

    let path = interactive.path('');
    path.classList.add('default');
    path.style.fill = '#dddddd';
    path.style.fillOpacity = '0.5';

    let c1 = interactive.control( 50, 50);
    let c2 = interactive.control( 150, 50);
    let c3 = interactive.control( 150, 150);

    path.update = function() {
        path.d = `M ${c1.x.toFixed(0)} ${c1.y.toFixed(0)} L ${c2.x.toFixed(0)} ${c2.y.toFixed(0)} L ${c3.x.toFixed(0)} ${c3.y.toFixed(0)} Z`;
    }
    path.update();
    path.addDependency(c1, c2, c3);

    // TODO: this is rather hacky, and probably best replaced by implementing the
    // tspan element in our SVG wrapper class.
    text.update = function() {
      let tag = `<tspan style="fill:purple">path</tspan>`;
      let d = `<tspan style="fill:#ab6f00">d</tspan>`;
      this.contents = `&lt;${tag} ${d}="${path.d}"&gt`;
    }
    text.update();
    text.addDependency(path);

  }
}
