import { Rectangle } from '../svg/rectangle';
import { Text } from '../svg/text';
import { Input } from './input';
/**
* A checkbox with an label. The can be checked, unchecked, and related to other
* elements.
*/
export class CheckBox extends Input {
    /**
    * Constructs a control at the position (x,y)
    */
    constructor(x, y, text, value) {
        super();
        /**
        * The state of the checkbox
        */
        this._value = false;
        this.root.setAttribute('transform', `translate(${x},${y})`);
        this.box = new Rectangle(-6.5, -6.5, 13, 13);
        this.box.root.setAttribute('rx', '2px');
        this.label = new Text(18, 1, text);
        this.label.root.setAttribute('alignment-baseline', 'middle');
        this.root.appendChild(this.box.root);
        this.root.appendChild(this.label.root);
        let temp = this;
        this.value = value;
        this.box.root.onmousedown = function () {
            temp.toggle();
        };
        this.addDependency(this.box);
    }
    /**
    * Sets the value to true and visually checks the box.
    */
    set value(value) {
        if (this._value = value) {
            this.box.style.fill = '#404040';
        }
        else {
            this.box.style.fill = '';
        }
        this.onchange();
    }
    /**
    * Returns true if the box is checked, false if it is not.
    */
    get value() {
        return this._value;
    }
    /**
    * Converts the current true/false state of the checkbox to a zero or one.
    */
    number() {
        return this.value ? 1 : 0;
    }
    /**
    * Toggles the state of this check box.
    */
    toggle() {
        this.value = !this.value;
    }
}
