import { Element, CoreAttributes } from './element';
declare type ScriptAttributes = 'type' | 'crossorigin' | 'href';
export declare class Script extends Element {
    root: SVGScriptElement;
    /**
    * Constructs a new sript element.
    */
    constructor();
    setAttribute(name: ScriptAttributes | CoreAttributes, value: string): this;
    getAttribute(name: ScriptAttributes | CoreAttributes): string;
}
export {};
