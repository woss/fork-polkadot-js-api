import { Registry } from '@polkadot/types/types';
import { TypeImports } from './imports';
/** @internal */
export declare function getDerivedTypes(definitions: object, type: string, primitiveName: string, imports: TypeImports): string[];
/** @internal */
export declare function getSimilarTypes(definitions: object, registry: Registry, type: string, imports: TypeImports): string[];
