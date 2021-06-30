import { Layout } from './layout';
/**
* Renders an interactive "template" for creating responsive interactives. This
* generic template renders an interactive with a "header" and "footer" region
* for providing custom information and controls.
*/
export class SideBarLayout extends Layout {
    /**
    * Constructs a template within the DOM element corresponding to the id. If
    * user configuration is provided, the user configuration is prioritized over
    * the default configuration stored in the Template.config variable.
    */
    constructor(idOrElement, config = {}) {
        super(idOrElement);
        // combine the default configuration with the user's configuration
        config = { ...SideBarLayout.config, ...config };
        this.root = document.createElement('div');
        this.root.classList.add((config.right ? 'right-side-bar' : 'left-side-bar'));
        this.sidebar = document.createElement('div');
        this.main = document.createElement('div');
        this.sidebar.classList.add('side-bar-region');
        this.main.classList.add('main-region');
        this.container.append(this.root);
        this.root.append(this.main, this.sidebar);
    }
}
/**
* Default configuration for all templates.
*/
SideBarLayout.config = {
    right: false
};
