import { Rectangle } from '../svg/rectangle';
import { Text } from '../svg/text';
import { Input } from './input';
/**
* A button that when pressed fires an onclick event.
*/
export declare class HoverBox extends Input {
    box: Rectangle;
    label: Text;
    _x: number;
    _xBound: number;
    _y: number;
    _yBound: number;
    constructor(str: string);
    set x(value: number);
    set y(value: number);
    setBounds(x: number, y: number): void;
    setText(str: string): void;
    updatePosition(x: number, y: number): void;
    showHoverBox(): void;
    hideHoverBox(): void;
}
