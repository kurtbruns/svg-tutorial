import { Layout } from './layout';
/**
* Renders an interactive "template" for creating responsive interactives. This
* generic template renders an interactive with a "header" and "footer" region
* for providing custom information and controls.
*/
export class HolyGrailLayout extends Layout {
    /**
    * Constructs a template within the DOM element corresponding to the id. If
    * user configuration is provided, the user configuration is prioritized over
    * the default configuration stored in the Template.config variable.
    */
    constructor(idOrElement, options = {}) {
        super(idOrElement);
        // combine the default configuration with the user's configuration
        let config = { ...HolyGrailLayout.config, ...options };
        this.root = document.createElement('div');
        this.root.classList.add('holy-grail');
        this.header = document.createElement('div');
        this.left = document.createElement('div');
        this.main = document.createElement('div');
        this.right = document.createElement('div');
        this.footer = document.createElement('div');
        this.header.classList.add('header-region');
        this.left.classList.add('left-region');
        this.main.classList.add('main-region');
        this.right.classList.add('right-region');
        this.footer.classList.add('footer-region');
        this.footer.style.display = 'flex';
        this.footer.style.flexDirection = 'column';
        this.container.append(this.root);
        this.root.append(this.header, this.left, this.main, this.right, this.footer);
        // Create or append the existing interactive into the main area
        // if( !config.interactive ) {
        //   this.interactive = new Interactive(this.main);
        // } else {
        //   this.interactive = config.interactive;
        //   this.main.append(config.interactive.root);
        // }
        // this.interactive.root.classList.add('template-footer-region');
    }
}
/**
* Default configuration for all templates.
*/
HolyGrailLayout.config = {};
