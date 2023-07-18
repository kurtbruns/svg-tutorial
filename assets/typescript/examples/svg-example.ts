import { OverflowArtboard, Text } from '@kurtbruns/vector';

export class SVGExample extends OverflowArtboard {

    xml : Text;

    static margin = 16;

    /**
     * 
     * 
     * @param idOrElement Container element to render the interactive within
     */
    constructor(idOrElment:string|HTMLElement) {

        super(idOrElment, {
            width:400,
            height:300,
            align:'left'
        });

        this.root.style.overflow = 'visible';
        this.drawGrid(false, false);
        this.xml = this.text(SVGExample.margin, this.maxY - SVGExample.margin, '');
        this.xml.classList.add('monospace');
        this.xml.root.style.userSelect = 'none';
        
        // If the user passes in a string identifier check to see if such an
        // element exists in the current document.
        let element:HTMLElement= null;
        if (typeof idOrElment == "string") {
            element = document.getElementById(idOrElment);
            if( element === null || element === undefined ) {
                throw new Error(`There is no HTML element with the id: ${idOrElment}`);
            }
        } else {
            element = idOrElment;
        }

        element.classList.add('overflow-container', 'hard-border')
        element.appendChild(this.root);
  
    }
}