/**
* @title SVG Path Element Line Command
* @description This interactive demonstrates the line command for the SVG path element. There are two controls that allow the user to control the start and end points of the line. There is also a checkbox that allows the user to toggle between relative and absolute commands
* @date May 3, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from './svg-example';
import { OverflowArtboard, PancakeLayout } from '@kurtbruns/vector';

export class SVGClipPathExample extends OverflowArtboard {
  constructor(idOrElement) {

    super(idOrElement, {
      width:400,
      height:300,
      align:'left'
    });

    this.container.classList.add('hard-border')

    let interactive = this;

    // let defs = interactive.defs();
    // let gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    // gradient.setAttribute('id', 'gradient')

    // let stop1 = document.createElement('stop');
    // stop1.setAttribute('stop-color', '#000000');
    // stop1.setAttribute('offset', '0%');
    // gradient.appendChild(stop1)
    // let stop2 = document.createElement('stop');
    // stop2.setAttribute('stop-color', '#FFFFFF');
    // stop2.setAttribute('offset', '100%');
    // gradient.appendChild(stop2);
    // defs.root.appendChild(gradient);

    let clipPath = interactive.clipPath();

    let rect = interactive.rect(0,0, 720, 300);
    rect.root.setAttribute('fill', 'url(#gradient)')
    // let image = interactive.image('./gradient.jpg', 720, 405);

    
    let path = clipPath.path('');

    let c1 = interactive.control( 50, 50);
    let c2 = interactive.control( 250, 50);
    let c3 = interactive.control( 250, 250);
    let c4 = interactive.control( 50, 250);

    path.update = function() {
        path.d = `M ${c1.x.toFixed(0)} ${c1.y.toFixed(0)} L ${c2.x.toFixed(0)} ${c2.y.toFixed(0)} L ${c3.x.toFixed(0)} ${c3.y.toFixed(0)} L ${c4.x.toFixed(0)} ${c4.y.toFixed(0)} Z`;
    }
    path.update();
    path.addDependency(c1, c2, c3, c4);
    

    (rect as any).setAttribute('clip-path', `url(#${clipPath.id})`);

  }
}
