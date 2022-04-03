import { ResponsiveArtboard } from "./responsive";
import { Rectangle } from "../elements/svg/rectangle";
import { SVG } from "../elements/svg/svg";
/**
 * A grid object allows a user to specify an internal coordinate system used for drawing.
 */
export class GridArtboard extends ResponsiveArtboard {
    /**
     * Contructs a SVG plot within the corresponding HTML Element and draws a plot of the function.
     */
    constructor(container, config) {
        // Default values 
        let defaultConfig = {
            // view port
            x: 0,
            y: 0,
            width: 600,
            height: 300,
            // internal coordinates
            internalX: -300,
            internalY: -150,
            internalWidth: 600,
            internalHeight: 300,
            align: 'left',
            origin: 'default',
            responsive: true,
            border: true
        };
        // choose users config over default
        config = { ...defaultConfig, ...config };
        // if no max-width specified, default to specified width if responsive is set to false
        if (!config.maxWidth && !config.responsive) {
            config.maxWidth = config.width;
        }
        ;
        super(container, config);
        this.classList.add('grid');
        this.x = config.x;
        this.y = config.y;
        // Create an internal SVG to do the heavy lifting
        this.setViewBox(config.internalX, config.internalY, config.internalWidth, config.internalHeight);
        let svg = this.appendChild(new SVG());
        this.internalViewBox = this.root.viewBox;
        // Store a reference to fix firefox viewbox issue
        if (navigator.userAgent.indexOf("Firefox") > -1) {
            this.internalSVG = svg.appendChild(new SVG());
        }
        else {
            this.internalSVG = svg;
        }
        this.classList.add('outline');
        this.gridGroup = this.group();
        this.axisGroup = this.group();
        this.foreground = this.group();
        // TODO: draw axis
    }
    getInternalSVG() {
        return this.internalSVG;
    }
    /**
     * Converts a point in the SVG's coordinate system to the screen's coordinate system.
     */
    screenToSVG(screenX, screenY) {
        let svg = this.internalSVG.root;
        let p = svg.createSVGPoint();
        p.x = screenX;
        p.y = screenY;
        return p.matrixTransform(svg.getScreenCTM().inverse());
    }
    /**
     * Converts a point in the screen's coordinate system to the SVG's coordinate system.
     */
    SVGToScreen(svgX, svgY) {
        let svg = this.internalSVG.root;
        let p = svg.createSVGPoint();
        p.x = svgX;
        p.y = svgY;
        return p.matrixTransform(svg.getScreenCTM());
    }
    /**
     * Converts a point in the screen's coordinate system to the SVG's coordinate system.
     */
    SVGToRelative(svgX, svgY) {
        let bbox = this.root.getBoundingClientRect();
        let svg = this.internalSVG.root;
        let p = svg.createSVGPoint();
        p.x = svgX;
        p.y = svgY;
        let point = p.matrixTransform(svg.getScreenCTM());
        point.x -= bbox.left;
        point.y -= bbox.top;
        return point;
    }
    drawBackground(fill = '#ffffff') {
        let viewbox = this.root.viewBox.baseVal;
        let background = this.prependChild(this.rectangle(viewbox.x, viewbox.y, viewbox.width, viewbox.height));
        background.style.fill = fill;
        background.style.stroke = 'none';
    }
    /**
     * Draws a border around the plot SVG that does not change the dimensions of the plot object.
     */
    drawBorder() {
        // Or use clipping path
        let spacing = 0;
        let viewbox = this.root.viewBox.baseVal;
        this.border = new Rectangle(viewbox.x, viewbox.y, viewbox.width, viewbox.height);
        this.border.appendSelfWithin(this.root);
        this.border.root.setAttribute('vector-effect', 'non-scaling-stroke');
        this.border.style.strokeWidth = '2';
    }
    /**
     * Draws grid lines
     */
    drawGridLines() {
        let viewBox = this.internalViewBox.baseVal;
        let group3 = this.gridGroup.group();
        let group2 = this.gridGroup.group();
        let group1 = this.gridGroup.group();
        // group3.style.opacity = '0.08'
        // group2.style.opacity = '0.16'
        // group1.style.opacity = '0.24'
        group3.style.opacity = '0.15';
        group2.style.opacity = '0.25';
        group1.style.opacity = '0.4';
        // group3.style.stroke = '#f8f8f8'
        // group2.style.stroke = '#f0f0f0'
        // group1.style.stroke = '#dddddd'
        let x1 = Math.floor(viewBox.x);
        let y1 = Math.floor(viewBox.y);
        let x2 = Math.ceil(viewBox.x + viewBox.width);
        let y2 = Math.ceil(viewBox.y + viewBox.height);
        let major = 10;
        let minor = 5;
        let tic = 1;
        for (let x = x1; x <= x2; x += tic) {
            if (x % major === 0) {
                group1.line(x, y1, x, y2);
            }
            else if (x % minor === 0) {
                group2.line(x, y1, x, y2);
            }
            else {
                group3.line(x, y1, x, y2);
            }
        }
        for (let y = y1; y <= y2; y += tic) {
            if (y % major === 0) {
                group1.line(x1, y, x2, y);
            }
            else if (y % minor === 0) {
                group2.line(x1, y, x2, y);
            }
            else {
                group3.line(x1, y, x2, y);
            }
        }
    }
}
