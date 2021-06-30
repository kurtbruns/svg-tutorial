import { Slider } from './slider';
import { SliderOptions } from './slider';
import { Group } from '../svg/group';
export interface ScrubberOptions extends SliderOptions {
    loop: boolean;
}
/**
* A scubber element has
*/
export declare class Scrubber extends Slider {
    /**
    * Represents weather the scrubber is active and animating.
    */
    active: boolean;
    /**
    * If set to true starts the scrubber at the beginning when it reaches the end.
    */
    loop: boolean;
    /**
    * Set to true if the scrubber reaches the end of the animation
    */
    done: boolean;
    /**
    * Play button group
    */
    playButton: Group;
    /**
    * Pause button group
    */
    pauseButton: Group;
    requestID: number;
    /**
    * Constructs a new scrubber element at the (x,y) position.
    */
    constructor(x: number, y: number, options: ScrubberOptions);
    setValue(n: number): void;
    getValue(): number;
    play(): void;
    pause(): void;
}
