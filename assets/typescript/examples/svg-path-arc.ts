import { SideBarLayout } from '@kurtbruns/vector';
import { SVGExample } from "./svg-example";

/**
* @title SVG Path Arc Command
* @description This interactive demonstrates the Path Element's Arc command. At a high level the command draws an arc using the shape of an ellipse between two points.
* @author Kurt Bruns
* @tags [svg]
*/
export class SVGPathArcExample extends SVGExample {

  constructor(idOrElement) {

    let template = new SideBarLayout(idOrElement, {right:true});
    super(template.main);
    let interactive = this;
    let text = this.xml;
    this.root.parentElement.style.marginBottom = '0.5rem';

    let path = interactive.path('');
    path.classList.add('default');
    let start = interactive.control( 75, 75);
    let control = interactive.control( 225, 150);

    let rx = template.addSlider(template.sidebar, 1, 150, 100, 'Horizontal Radius');
    let ry = template.addSlider(template.sidebar, 1, 150, 75, 'Vertical Radius');
    let xAxisRotation = template.addSlider(template.sidebar, 0, 180, 0, 'Rotation');
    let largeArcFlag = template.addCheckbox(template.sidebar, false, 'large-arc');
    let sweepFlag = template.addCheckbox(template.sidebar, false, 'sweep');
    let showEllipsis = template.addCheckbox(template.sidebar, true, 'show ellipsis');
    let group = this.group();
    group.root.style.strokeOpacity = '0.3';
    function draw( ) {
      path.update();
      path1.update();
      path2.update();
      path3.update();
      path4.update();
      path.updateDependents();
      if( showEllipsis.checked ) {
        group.root.style.strokeOpacity = '0.3';
      } else {
        group.root.style.strokeOpacity = '0';
      }
    }
    rx.oninput = draw;
    ry.oninput = draw;
    xAxisRotation.oninput = draw;
    largeArcFlag.onchange = draw;
    sweepFlag.onchange = draw;
    showEllipsis.onchange = draw;


    // let largeArcFlag = template.addContainer(template.sidebar).checkBox(margin, 20, "large-arc-flag", false);
    // let sweepFlag = template.addContainer(template.sidebar).checkBox(margin, 20, "sweep-flag", false);
    // let showEllipsis = template.addContainer(template.sidebar).checkBox(margin, 20, "show-ellipsis", true);
    // largeArcFlag.label.classList.add('monospace');
    // sweepFlag.label.classList.add('monospace');
    // showEllipsis.label.classList.add('monospace');

    path.update = function() {
      this.d = `M ${start.x} ${start.y} A ${rx.value} ${ry.value} ${xAxisRotation.value} ${largeArcFlag.checked ? '1' : '0'} ${sweepFlag.checked ? '1' : '0'} ${control.x} ${control.y}`;
    }
    path.update();
    path.addDependency(start);
    path.addDependency(control);
    // path.addDependency(rx);
    // path.addDependency(ry);
    // path.addDependency(xAxisRotation);
    // path.addDependency(largeArcFlag);
    // path.addDependency(sweepFlag);

    // TODO: this is rather hacky, and probably best replaced by implementing the
    // tspan element in our SVG wrapper class.
    text.update = function() {
      let tag = `<tspan style="fill:purple">path</tspan>`;
      let d = `<tspan style="fill:#ab6f00">d</tspan>`;
      this.contents = `&lt;${tag} ${d}="M ${start.x.toFixed(0)} ${start.y.toFixed(0)} A ${rx.value} ${ry.value} ${xAxisRotation.value} ${largeArcFlag.checked ? '1' : '0'} ${sweepFlag.checked ? '1' : '0'} ${control.x.toFixed(0)} ${control.y.toFixed(0)}"&gt`;
    }
    text.update();
    text.addDependency(path);

    // Code under this point is additional paths showsing all the different options
    // for the flags. TODO: move the paths into a group and change the opacity of
    // the group instead of for each individual p
    let createPath = (rotation, largeArc:boolean, sweep:boolean) => {
      let p = group.path('');
      p.classList.add('default');
      p.addDependency(start);
      p.addDependency(control);
      p.update = function() {
        this.d = `M ${start.x} ${start.y} A ${rx.value} ${ry.value} ${rotation.value} ${largeArc ? '1' : '0'} ${sweep ? '1' : '0'} ${control.x} ${control.y}`;
      };
      p.update();
      return p
    }

    // Create four paths will all flag options
    let path1 = createPath(xAxisRotation, false, false);
    let path2 = createPath(xAxisRotation,false, true);
    let path3 = createPath(xAxisRotation,true, false);
    let path4 = createPath(xAxisRotation,true, true);
  }
}