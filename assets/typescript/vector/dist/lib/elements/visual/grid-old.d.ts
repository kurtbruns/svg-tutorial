/**
* A grid is
*/
export default class Grid {
    constructor();
    /**
    * Sets the top-left x position of the grid.
    */
    set x(x: number);
    /**
    * Returns the top-left x position of the grid.
    */
    get x(): number;
    /**
    * Sets the top-left y position of the grid.
    */
    set y(x: number);
    /**
    * Returns the top-left y position of the grid.
    */
    get y(): number;
    /**
    * Returns the width of the grid measured from left to right.
    */
    get width(): number;
    /**
    * Returns the height of the grid measured from top to bottom.
    */
    get height(): number;
    /**
    * Sets the horizontal scaling of the grid object.
    */
    set scaleX(scale: number);
    /**
    * Returns the horizontal scaling of the grid object.
    */
    get scaleX(): number;
    /**
    * Sets the vertical scaling of the grid object.
    */
    set scaleY(scale: number);
    /**
    * Returns the vertical scaling of the grid object.
    */
    get scaleY(): number;
    /**
    * Sets the x position of the origin of the grid.
    */
    set originX(scale: number);
    /**
    * Returns the x position of the origin of the grid.
    */
    get originX(): number;
    /**
    * Sets the y position of the origin of the grid. NOTE: While the coordinate
    * system of the grid is measured in typical math orientation where up is
    * positive, this measurement is a top down measurement to the origin.
    */
    set originY(scale: number);
    /**
    * Returns the y position of the origin of the grid. NOTE: While the coordinate
    * system of the grid is measured in typical math orientation where up is
    * positive, this measurement is a top down measurement to the origin.
    */
    get originY(): number;
}
