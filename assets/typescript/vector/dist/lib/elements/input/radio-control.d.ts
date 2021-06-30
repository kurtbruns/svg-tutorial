import { Input } from './input';
import { CheckBox } from './check-box';
/**
*  Radio Buttons with labels. Only one of the checkboxes will be checked at any given time.
*/
export declare class RadioControl extends Input {
    list: CheckBox[];
    index: number;
    constructor(x: number, y: number, labels: string[], index?: number);
    get value(): string;
    getCurrentValue(): import("../..").Text;
    handleMouseDown(index: number): void;
}
