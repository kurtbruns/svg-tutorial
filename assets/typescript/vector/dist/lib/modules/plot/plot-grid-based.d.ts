import { GridArtboard } from "../../artboards/grid";
import { Group } from "../../elements/svg/group";
import { Path } from "../../elements/svg/path";
declare type FunctionType = (x: number) => number;
/**
 * Configuration passed the the plot constructor
 */
interface Configuration {
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
    grid?: boolean;
    border?: boolean;
    f: FunctionType;
}
/**
 * A plot visualizes one or more one-to-one functinos.
 */
export declare class Plot extends GridArtboard {
    /**
     * Array of functions paths
     */
    functionPaths: Path[];
    /**
     * Array of functions
     */
    functions: FunctionType[];
    /**
     * The group (layer) used to place the path above the grid and such
     */
    fnGroup: Group;
    constructor(container: string | HTMLElement, config: Configuration);
    addFunction(f: FunctionType): Path;
    /**
     * Calls the function inverting the y-coordinate and removing non-finite output.
     */
    call(fn: FunctionType, input: number): number;
    /**
     * Draws the plot of the function for all x-values in the view ports range
     */
    draw(): void;
}
export {};
