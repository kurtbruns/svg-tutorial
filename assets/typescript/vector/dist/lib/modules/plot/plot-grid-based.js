import { GridArtboard } from "../../artboards/grid";
/**
 * A plot visualizes one or more one-to-one functinos.
 */
export class Plot extends GridArtboard {
    constructor(container, config) {
        // default configuration
        let defaultConfig = {
            grid: true
        };
        // choose users config over default
        config = { ...defaultConfig, ...config };
        super(container, config);
        if (config.grid) {
            this.drawGridLines();
        }
        this.fnGroup = this.group();
        this.functionPaths = [];
        this.functions = [];
        this.setAttribute('preserveAspectRatio', 'none');
        this.addFunction(config.f);
        this.draw();
    }
    addFunction(f) {
        let path = this.fnGroup.path('');
        path.classList.add('non-scaling-stroke');
        this.functions.push(f);
        this.functionPaths.push(path);
        return path;
    }
    /**
     * Calls the function inverting the y-coordinate and removing non-finite output.
     */
    call(fn, input) {
        let output = -fn(input);
        if (isFinite(output)) {
            return output;
        }
        else {
            return 0;
        }
    }
    /**
     * Draws the plot of the function for all x-values in the view ports range
     */
    draw() {
        let spacing = 0;
        let bbox = this.root.getBoundingClientRect();
        let x1 = bbox.x + spacing;
        let x2 = bbox.x + bbox.width - spacing;
        let ctm = this.getInternalSVG().root.getScreenCTM();
        let inverse = ctm.inverse();
        let point = this.getInternalSVG().root.createSVGPoint();
        for (let i = 0; i < this.functions.length; i++) {
            let fn = this.functions[i];
            point.x = x1;
            point.y = 0;
            let p = point.matrixTransform(inverse);
            let d = `M ${p.x} ${this.call(fn, p.x)}`;
            // Loop through each pixel, convert the x-position to the internal coordinates, call the 
            // function and add to the path
            for (let x = x1; x < x2; x++) {
                point.x = x;
                p = point.matrixTransform(inverse);
                d += `L ${p.x} ${this.call(fn, p.x)}`;
                // TODO: trim huge y values
            }
            this.functionPaths[i].d = d;
        }
    }
}
