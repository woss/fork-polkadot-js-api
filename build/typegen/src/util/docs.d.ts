import { Text } from '@polkadot/types';
declare type AnyString = Text | string;
declare type Arg = [AnyString, AnyString];
export declare function createDocComments(spaces: number, docs: AnyString[], args?: Arg[]): string;
export {};
