import { Rectangle } from "../../index";
import { ResponsiveArtboard } from "../../artboards/responsive";
import { Group } from "../../elements/svg/group";
import { Path } from "../../elements/svg/path";
/**
 * Configuration passed the the plot constructor
 */
export interface PlotConfiguration {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    internalX?: number;
    internalY?: number;
    internalWidth?: number;
    internalHeight?: number;
    responsive?: boolean;
    origin?: string;
    title?: string;
}
/**
 * A plot
 *
 * The viewport is defined by a position (x,y) relative to its parent, which only applies to nested
 * SVGs.
 */
export declare class Plot extends ResponsiveArtboard {
    /**
     * A one-to-one function
     */
    fn: (x: number) => number;
    /**
     * The path used to draw the function
     */
    fnPath: Path;
    /**
     * The group (layer) used to place the path above the grid and such
     */
    fnGroup: Group;
    /**
     * Contains the axis to sit above the grid
     */
    axisGroup: Group;
    /**
     * Contains the axis to sit above the grid
     */
    gridGroup: Group;
    /**
     * Rectangle used to draw the border
     */
    border: Rectangle;
    /**
     * Nested SVG to fix firefox bug with viewbox
     */
    private internalSVG;
    /**
     * Contructs a SVG plot within the corresponding HTML Element and draws a plot of the function.
     */
    constructor(container: string | HTMLElement, fn: (x: number) => number, config: PlotConfiguration);
    /**
     * Converts a point in the SVG's coordinate system to the screen's coordinate system.
     */
    screenToSVG(screenX: any, screenY: any): DOMPoint;
    /**
     * Converts a point in the screen's coordinate system to the SVG's coordinate system.
     */
    SVGToScreen(svgX: any, svgY: any): DOMPoint;
    /**
     * Converts a point in the screen's coordinate system to the SVG's coordinate system.
     */
    SVGToRelative(svgX: number, svgY: number): DOMPoint;
    call(input: number): number;
    /**
     * Draws the plot of the function for all x-values in the view ports range
     */
    draw(): void;
    /**
     * Draws a border around the plot SVG that does not change the dimensions of the plot object.
     */
    drawBorder(): void;
}
/**
 * An extension of the plot object that specializes in drawing a tau scaled coordinate system
 */
export declare class TrigPlot extends Plot {
    constructor(e: any, f: any, c?: {});
    drawCustomGrid(): void;
    drawCustomGrid2(): void;
    drawCustomGrid3(): void;
}
