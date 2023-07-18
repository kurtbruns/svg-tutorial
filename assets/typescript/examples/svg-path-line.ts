/**
* @title SVG Path Element Line Command
* @description This interactive demonstrates the line command for the SVG path element. There are two controls that allow the user to control the start and end points of the line. There is also a checkbox that allows the user to toggle between relative and absolute commands
* @date May 3, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from './svg-example';
import { PancakeLayout } from '@kurtbruns/vector';

export class SVGPathLineExample extends SVGExample {
  constructor(idOrElement) {

    let template = new PancakeLayout(idOrElement);
    super(template.main);
    template.main.style.marginBottom = '1rem';
    let interactive = this;
    let text = this.xml;

    let path = interactive.path('');
    path.classList.add('default');
    let start = interactive.control( 50, 50);
    let end = interactive.control( 225, 175);

    let relative = template.addCheckbox(template.footer, false, 'relative');
    relative.onchange = () => {
      path.update();
      path.updateDependents();
    };

    path.update = function() {
      if( relative.checked ) {
        path.d = `m ${start.x.toFixed(0)} ${start.y.toFixed(0)} l ${(end.x - start.x).toFixed(0)} ${(end.y - start.y).toFixed(0)}`;
      } else {
        path.d = `M ${start.x.toFixed(0)} ${start.y.toFixed(0)} L ${end.x.toFixed(0)} ${end.y.toFixed(0)}`;
      }

    }
    path.update();
    path.addDependency(start);
    path.addDependency(end);
    // path.addDependency(toggle);

    this.xml.tspan('&lt');
    let tag = this.xml.tspan('path ');
    let d = this.xml.tspan('d=');
    d.style.fill = 'var(--syntax-attribute)';
    this.xml.tspan('&gt;');
    // let close = this.xml.tspan('&gt;&lt;/ellipse&gt;');

    this.xml.x = 20;
    this.xml.y = this.maxY - 20;
    tag.style.fill = 'var(--syntax-tag)';

    let dValue = d.tspan('');
    dValue.style.fill = 'var(--syntax-string)';

    dValue.addDependency(path);
    dValue.update = function () {
      dValue.text = `"${path.d}" `;
    };

    this.xml.addDependency(path);
    path.updateDependents();

  }
}
