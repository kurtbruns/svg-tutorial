import { Node } from './node';
import { Line } from '../../elements/svg/line';
/**
* Creates a line connecting two edges, with an arrow if directed.
*/
export declare class Edge extends Line {
    directed: boolean;
    nodeFrom: Node;
    nodeTo: Node;
    root: SVGLineElement;
    /**
    * Constructs a line frmo the edge of the two circle elements.
    */
    constructor(nodeFrom: Node, nodeTo: Node, directed: boolean);
    redraw(): void;
    /**
    * Function to find where the line connecting two circles should go. return an Array
    * containing [x1, y1, x2, y2] of the line.
    */
    static calculateLinePosition(nodeFrom: Node, nodeTo: Node): number[];
    static calculateLinePositionEllipse(nodeFrom: Node, nodeTo: Node): number[];
}
