import { TypeImports } from '../util';
/** @internal */
export declare function createGetter(definitions: object, name: string | undefined, type: string, imports: TypeImports): string;
/** @internal */
export declare function generateTsDef(importDefinitions: {
    [importPath: string]: object;
}, outputDir: string, generatingPackage: string): void;
/** @internal */
export default function generateTsDefDefault(): void;
