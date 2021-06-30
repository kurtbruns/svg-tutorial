import { BaseElement } from "../elements/base-element";
import { Input } from "../elements/input/input";
import { Artboard } from "../index";
interface Configuration {
    artboard?: Artboard;
}
/**
 *
 */
export declare class Layout extends BaseElement {
    artboard: Artboard;
    container: HTMLElement;
    static inputCount: number;
    constructor(idOrElment: string | HTMLElement, config?: Configuration);
    /**
     * Returns the HTML element associated with the id or element, throws error otherwise
     * @param idOrElement
     */
    static getContainer(idOrElement: any): HTMLElement;
    addRegion(): HTMLDivElement;
    addCustomVariableDisplay(region: any, variable: any, valueFunction: any): HTMLDivElement;
    addContainer(region: HTMLDivElement): HTMLDivElement;
    /**
     *
     */
    addButton(region: HTMLDivElement, name: string): HTMLButtonElement;
    /**
     *
     */
    addCheckbox(region: HTMLDivElement, value: boolean, name: string): HTMLInputElement;
    /**
     *
     */
    addSlider(region: HTMLDivElement, min: number, max: number, value: number, label: string): HTMLInputElement;
    addVariableDisplay(region: HTMLDivElement, variable: string, control: Input, accuracy?: number): HTMLDivElement;
}
export {};
