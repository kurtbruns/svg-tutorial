import { Layout } from './layout';
import { Artboard } from '../index';
export interface Configuration {
    artboard?: Artboard;
}
/**
* Renders an interactive "template" for creating responsive interactives. This
* generic template renders an interactive with a "header" and "footer" region
* for providing custom information and controls.
*/
export declare class PancakeLayout extends Layout {
    /**
    * The HTMLElement which the template is rendered within.
    */
    parent: HTMLElement;
    /**
    * The root of the template
    */
    root: HTMLDivElement;
    /**
    * The header region of the template
    */
    header: HTMLDivElement;
    /**
    * The main region of the template
    */
    main: HTMLDivElement;
    footer: HTMLDivElement;
    /**
    * The interactive element
    */
    artboard: Artboard;
    /**
    * Default configuration for all templates.
    */
    static config: {};
    /**
    * Constructs a template within the DOM element corresponding to the id. If
    * user configuration is provided, the user configuration is prioritized over
    * the default configuration stored in the Template.config variable.
    */
    constructor(idOrElement: string | HTMLElement, options?: Configuration);
}
