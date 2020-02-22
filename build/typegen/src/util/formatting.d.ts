import { TypeDef } from '@polkadot/types/create/types';
import { TypeImports } from './imports';
export declare const HEADER = "// Auto-generated via `yarn polkadot-types-from-defs`, do not edit\n/* eslint-disable @typescript-eslint/no-empty-interface */\n\n";
export declare const FOOTER = "\n";
/** @internal */
export declare function createImportCode(header: string, imports: TypeImports, checks: {
    file: string;
    types: string[];
}[]): string;
/** @internal */
export declare function exportInterface(name: string | undefined, base: string, body?: string): string;
/** @internal */
export declare function exportType(name: string | undefined, base: string): string;
/**
 * Correctly format a given type
 */
/** @internal */
export declare function formatType(definitions: object, type: string | TypeDef, imports: TypeImports): string;
/**
 * Indent a string with `n` spaces before.
 */
/** @internal */
export declare function indent(n: number, char?: string): (str: string) => string;
