import { DependencyGraph } from './dependency-graph';
import { BaseElement } from '../elements/base-element';
/**
* This controller manages the dependencies between elements.
*/
export declare class Controller {
    /**
    * Contains a map of unique identifiers to elements
    */
    elements: Map<string, BaseElement>;
    /**
    * Contains the dependencies between elements
    */
    dependencyGraph: DependencyGraph<BaseElement>;
    /**
    * Constructs a controller
    */
    constructor();
    /**
    * Clears all the elements from this controller.
    */
    clear(): void;
    /**
    * Adds an element to this controller.
    */
    add(element: BaseElement): void;
    /**
    * Removes an element from this controller.
    */
    remove(element: BaseElement): void;
    /**
    * Returns the element corresponding to the unique string identifier
    */
    get(id: string): BaseElement;
    /**
    * Updates this element and all of its dependents
    */
    update(element: BaseElement): void;
}
