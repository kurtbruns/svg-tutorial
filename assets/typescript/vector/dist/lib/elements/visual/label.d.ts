import { Rectangle } from "../svg/rectangle";
import { Group } from "../svg/group";
import { Text } from "../svg/text";
export declare class Label extends Group {
    textElement: Text;
    backgroundRectangle: Rectangle;
    constructor(x: number, y: number, str: string);
    drawBackgroundRectangle(): void;
}
