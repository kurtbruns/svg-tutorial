/**
* @title SVG Path Element Line Command
* @description This interactive demonstrates the line command for the SVG path element. There are two controls that allow the user to control the start and end points of the line. There is also a checkbox that allows the user to toggle between relative and absolute commands
* @date May 3, 2019
* @author Kurt Bruns
* @tags [svg]
*/

import { SVGExample } from './svg-example';
import { OverflowArtboard, PancakeLayout } from '../vector/dist/lib/index';

export default class SVGPathCloseCommand extends OverflowArtboard {
  constructor(idOrElement) {

    super(idOrElement, {
      width:400,
      height:300,
      align:'left'
    });

    this.container.classList.add('hard-border')

    let interactive = this;

    let clipPath = interactive.clipPath();
    let image = interactive.image('https://source.unsplash.com/ykH6Zx7ZKXQ/1600x900', 720, 405);
    let path = clipPath.path('');
    path.classList.add('default');
    path.style.fill = '#dddddd';
    path.style.fillOpacity = '0.5';

    let c1 = interactive.control( 50, 50);
    let c2 = interactive.control( 250, 50);
    let c3 = interactive.control( 250, 250);
    let c4 = interactive.control( 50, 250);

    path.update = function() {
        path.d = `M ${c1.x.toFixed(0)} ${c1.y.toFixed(0)} L ${c2.x.toFixed(0)} ${c2.y.toFixed(0)} L ${c3.x.toFixed(0)} ${c3.y.toFixed(0)} L ${c4.x.toFixed(0)} ${c4.y.toFixed(0)} Z`;
    }
    path.update();
    path.addDependency(c1, c2, c3, c4);

    
    image.setAttribute('clip-path', `url(#${clipPath.id})`);

  }
}
