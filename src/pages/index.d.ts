/**
 * This is a file to keep all common typescript declarations
 */

/**
 * This is require to let typescript understand non-typescript
 * style require. Eg: var module = require("module");
 * 
 * https://github.com/TypeStrong/ts-loader#loading-other-resources-and-code-splitting
 */
declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};
