/**
 * A class of static utility functions for managing client-side
 */
export declare class File {
    /**
    * Returns the filename portion of a file path.
    */
    static parseName(path: string, trimExtension?: boolean): string;
    /**
    * Returns the current script name.
    */
    static getScriptName(trimExtension?: boolean): string;
    /**
    * Downloads the current drawing as an svg file.
    */
    static download(id: string, filename: String, stylesheet: string): Promise<any>;
    static processRule(rule: any): string;
    static saveSVG(filename: any, data: string): void;
    /**
    * Returns a promise containing the response object.
    */
    static getURL(url: string): Promise<string>;
    /**
    * Gets the URL parameters of the current session.
    */
    static getUrlParams(str: string): Map<string, string>;
    static setUrlParams(param: string, value: string): void;
    /**
    * Loads the interactive script at the provided url into the provided HTMLElement.
    */
    static loadScript(url: string, element: HTMLElement): Promise<string>;
}
