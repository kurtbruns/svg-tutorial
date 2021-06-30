import { Artboard, Configuration } from "./artboard";
/**
 * A responsive SVG document that is optimized to prevent cumulative layout shift in the browser
 * and draw SVG documents within a horizontally constrained vertical layout.
 */
export declare class ResponsiveArtboard extends Artboard {
    private _grid;
    private _lines1;
    private _lines2;
    private _lines3;
    static lightStroke: string;
    static mediumStroke: string;
    static darkStroke: string;
    /**
     * Constructs a responsive SVG Document that is optimized to prevent cumulative layout shift in
     * the browser. The width and height measurements are used to define 1) the aspect ratio of the
     * rendered SVG and 2) the internal coordinate system used for drawing. The maxWidth argument
     * optionally specifies the maximum display width of the SVG, otherwise the default is to fill
     * the availablespace.
     */
    constructor(container: string | HTMLElement, config?: Configuration);
    /**
     * This helper method draws a grid to visualize the coordinate system used for drawing SVG
     * ELements.
     */
    drawGrid(border?: boolean, origin?: boolean): void;
}
