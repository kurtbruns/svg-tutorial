import { Scrubber } from '../elements/input/scrubber';
import { Artboard } from '../index';
import { Layout } from './layout';
export interface Configuration {
    width?: number;
    min?: number;
    max?: number;
    value?: number;
    loop?: boolean;
}
/**
* Renders a "playable" interactive within the HTML element with the provided ID.
* A playable interactive contains a
*/
export declare class PlayerLayout extends Layout {
    root: HTMLDivElement;
    main: HTMLDivElement;
    canvas: HTMLDivElement;
    controls: HTMLDivElement;
    footer: HTMLDivElement;
    scrubberInteractive: Artboard;
    scrubber: Scrubber;
    min: number;
    max: number;
    value: number;
    loop: boolean;
    constructor(idOrElement: string | HTMLElement, options?: Configuration);
}
