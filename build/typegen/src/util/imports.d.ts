declare type TypeExist = Record<string, boolean>;
declare type TypeExistMap = Record<string, TypeExist>;
export interface TypeImports {
    codecTypes: TypeExist;
    extrinsicTypes: TypeExist;
    genericTypes: TypeExist;
    ignoredTypes: string[];
    localTypes: TypeExistMap;
    primitiveTypes: TypeExist;
    typesTypes: TypeExist;
    definitions: object;
    typeToModule: Record<string, string>;
    moduleToPackage: Record<string, string>;
}
/** @internal */
export declare function setImports(allDefs: object, imports: TypeImports, types: string[]): void;
/** @internal */
export declare function createImports(importDefinitions: Record<string, object>, { types }?: {
    types: Record<string, any>;
}): TypeImports;
export {};
