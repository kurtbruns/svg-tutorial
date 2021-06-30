import { alignment } from "./artboard";
import { ResponsiveArtboard } from "./responsive";
import { Rectangle } from "../elements/svg/rectangle";
import { Group } from "../elements/svg/group";
import { SVG } from "../elements/svg/svg";
/**
 * Configuration passed the the plot constructor
 */
export interface GridConfiguration {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    maxWidth?: number;
    internalX?: number;
    internalY?: number;
    internalWidth?: number;
    internalHeight?: number;
    responsive?: boolean;
    title?: string;
    align?: alignment;
    origin?: string;
    border?: boolean;
}
/**
 * A grid object allows a user to specify an internal coordinate system used for drawing.
 */
export declare class GridArtboard extends ResponsiveArtboard {
    /**
     * Contains the grid lines
     */
    gridGroup: Group;
    /**
     * Contains the axis lines
     */
    axisGroup: Group;
    /**
     * Foreground
     */
    foreground: Group;
    /**
     *
     */
    border: Rectangle;
    /**
     * Nested SVG to fix firefox bug with viewbox
     */
    private internalSVG;
    private internalViewBox;
    /**
     * Contructs a SVG plot within the corresponding HTML Element and draws a plot of the function.
     */
    constructor(container: string | HTMLElement, config: GridConfiguration);
    getInternalSVG(): SVG;
    /**
     * Converts a point in the SVG's coordinate system to the screen's coordinate system.
     */
    screenToSVG(screenX: number, screenY: number): DOMPoint;
    /**
     * Converts a point in the screen's coordinate system to the SVG's coordinate system.
     */
    SVGToScreen(svgX: number, svgY: number): DOMPoint;
    /**
     * Converts a point in the screen's coordinate system to the SVG's coordinate system.
     */
    SVGToRelative(svgX: number, svgY: number): DOMPoint;
    /**
     * Draws a border around the plot SVG that does not change the dimensions of the plot object.
     */
    drawBorder(): void;
    drawGridLines(): void;
    drawGridLinesTest(step1: any, step2: any, step3: any): void;
}
