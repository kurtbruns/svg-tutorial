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
export declare class HolyGrailLayout extends Layout {
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
    * The left side bar region of the template
    */
    left: HTMLDivElement;
    /**
    * The main region of the template
    */
    main: HTMLDivElement;
    /**
    * The right side bar region of the template
    */
    right: HTMLDivElement;
    footer: HTMLDivElement;
    /**
    * Default configuration for all templates.
    */
    static config: Configuration;
    /**
    * Constructs a template within the DOM element corresponding to the id. If
    * user configuration is provided, the user configuration is prioritized over
    * the default configuration stored in the Template.config variable.
    */
    constructor(idOrElement: string | HTMLElement, options?: Configuration);
}
