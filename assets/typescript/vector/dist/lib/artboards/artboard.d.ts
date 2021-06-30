import { SVG } from '../elements/svg/svg';
import { Element } from '../elements/svg/element';
import { Group } from '../elements/svg/group';
import { Button } from '../elements/input/button';
import { CheckBox } from '../elements/input/check-box';
import { Control } from '../elements/input/control';
import { RadioControl } from '../elements/input/radio-control';
import { DropdownControl } from '../elements/input/dropdown-control';
import { Scrubber, ScrubberOptions } from '../elements/input/scrubber';
import { Slider, SliderOptions } from '../elements/input/slider';
import { HoverBox } from '../elements/input/hover-box';
import { Label } from '../elements/visual/label';
import { Definitions } from '../elements/svg/definitions';
import { Marker } from '../elements/svg/marker';
export declare type alignment = 'left' | 'center' | 'right';
export interface Configuration {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    maxWidth?: number;
    origin?: string;
    responsive?: boolean;
    align?: string | alignment;
}
/**
* This class exposes the high level functionality of our library. Elements can
* created and related together
*
* By default input elements are added to a SVG "controls" group and visual
* elements are added to the "background" group. This ensures that controls will
* alwaysbe focusable, despite the order in which elements are created.
*/
export declare class Artboard extends SVG {
    /**
    * The container element for this interactive.
    */
    container: HTMLElement;
    /**
    * The input groups sits on top of the background group and ensures that
    * input elements will always visually appear above background elements.
    */
    input: Group;
    /**
    * The background is where everything that is not a primary control is drawn.
    */
    background: Group;
    /**
    * This group contains symbols that can be reused within this interactive.
    */
    private symbols;
    /**
    * Maps icon names to ids.
    */
    private icons;
    private _definitions;
    /**
    * Constructs a new interactive object and appends it into the DOM. If the
    * provided argument is an HTMLElement appends the interactive within that
    * element. If the provided a value is a string, appends the interactive within
    * the HTML element with the corresponding ID. If no element is found throws an
    * error.
    */
    constructor(container: string | HTMLElement, config?: Configuration);
    /**
    * Returns definitions for this interactive. If undefined, creates and appends
    * a new element.
    *
    * TODO: move this up to the SVG level?
    */
    get definitions(): Definitions;
    /**
    * Appends the element within the interactive. If the element is an "input"
    * element, places the element in the input group so that visually the element
    * is always placed above other graphical elements.
    */
    appendChild<T extends Element>(child: T): T;
    /**
     * Adds an arrow marker element to the defintions.
     */
    arrow(): Marker;
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    button(x: number, y: number, label: string): Button;
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    checkBox(x: number, y: number, label: string, value: boolean): CheckBox;
    /**
    * Creates a checkbox input at the position (x,y) within this interactive.
    */
    radioControl(x: number, y: number, labels: string[], index?: number): RadioControl;
    /**
    * Creates a dropdown input at the position (x,y) within this interactive.
    */
    dropdownControl(x: number, y: number, optionLabels: string[], defaultIndex: number): DropdownControl;
    /**
    * Creates a control point within this interactive at the position (x,y).
    */
    control(x: number, y: number): Control;
    /**
    * Creates a control point within this interactive at the position (x,y).
    */
    controlCircle(x: number, y: number): Control;
    hoverBox(str: string): HoverBox;
    label(x: number, y: number, str: string): Label;
    /**
    * Creates a slider input within this interactive
    */
    slider(x: number, y: number, options: SliderOptions): Slider;
    /**
    * Creates a scrubber with a play and pause button at the position (x,y).
    */
    scrubber(x: number, y: number, options: ScrubberOptions): Scrubber;
}
