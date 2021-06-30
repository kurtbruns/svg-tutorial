import { Group } from '../svg/group';
/**
* An object that takes in user input in the form of user events.
*/
export class Input extends Group {
    /**
    * Constructs a new input group.
    */
    constructor() {
        super();
        // set the default behavior of the onchange function
        let input = this;
        input._onchange = function () {
            input.updateDependents();
        };
    }
    pushOnChange(func) {
        let temp = this;
        let fn = temp._onchange;
        temp.onchange = () => {
            func();
            fn();
        };
    }
    /**
    * This function is called whenever the state of an input element changes. The
    * default behavior of this function is to update the dependents of this
    * element. WARNING: changing this function can have unintented side effects.
    */
    set onchange(func) {
        this._onchange = func;
    }
    get onchange() {
        return this._onchange;
    }
}
