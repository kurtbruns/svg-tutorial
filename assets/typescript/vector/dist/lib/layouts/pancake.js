import { Layout } from './layout';
/**
* Renders an interactive "template" for creating responsive interactives. This
* generic template renders an interactive with a "header" and "footer" region
* for providing custom information and controls.
*/
export class PancakeLayout extends Layout {
    /**
    * Constructs a template within the DOM element corresponding to the id. If
    * user configuration is provided, the user configuration is prioritized over
    * the default configuration stored in the Template.config variable.
    */
    constructor(idOrElement, options = {}) {
        super(idOrElement);
        let defaultConfig = {};
        // combine the default configuration with the user's configuration
        let config = { ...defaultConfig, ...options };
        this.root = document.createElement('div');
        this.root.classList.add('pancake');
        this.header = document.createElement('div');
        this.main = document.createElement('div');
        this.footer = document.createElement('div');
        this.header.classList.add('header-region');
        this.main.classList.add('main-region');
        this.footer.classList.add('footer-region');
        this.footer.style.display = 'flex';
        this.footer.style.flexDirection = 'column';
        this.container.append(this.root);
        this.root.append(this.header, this.main, this.footer);
    }
}
/**
* Default configuration for all templates.
*/
PancakeLayout.config = {};
