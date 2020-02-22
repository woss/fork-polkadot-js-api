import { MetaRegistryItem, MetaRegistryJson, MetaType, MetaTypeDefEnumVariantStruct, MetaTypeDefStruct, MetaTypeIdCustom, Registry, StringIndex, TypeDef, TypeIndex } from '@polkadot/types/types';
declare class MetadataRegistryLookup {
    readonly registry: Registry;
    protected _strings: string[];
    protected _types: MetaType[];
    typeDefs: TypeDef[];
    constructor(registry: Registry, { registry: { strings, types } }: MetaRegistryJson);
    protected hasItemAt(index: number, variant: MetaRegistryItem): boolean;
    protected itemAt(index: number, variant: MetaRegistryItem): any;
    protected itemsAt(indices: number[], variant: MetaRegistryItem): any[];
    protected stringAt(index: StringIndex): string;
    stringsAt(indices: StringIndex[]): string[];
    typeAt(index: TypeIndex): MetaType;
    typesAt(indices: TypeIndex[]): MetaType[];
    hasTypeDefAt(index: TypeIndex): boolean;
    typeDefAt(index: TypeIndex, extra?: Pick<TypeDef, never>): TypeDef;
}
export default class MetaRegistry extends MetadataRegistryLookup {
    constructor(registry: Registry, json: MetaRegistryJson);
    setTypeDefAtIndex(typeIndex: TypeIndex): void;
    private typeDefIdFields;
    private typeDefDefFields;
    typeDefFromMetaType(metaType: MetaType, typeIndex?: TypeIndex): TypeDef;
    typeDefFromMetaTypeAt(typeIndex: TypeIndex): TypeDef;
    private typeDefForEnumVariant;
    private typeDefForBuiltinPlain;
    private typeDefForBuiltinTuple;
    private typeDefForBuiltinVec;
    private typeDefForBuiltinVecFixed;
    private typeDefForEnum;
    private typeDefForClikeEnum;
    typeDefForOption(id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any>;
    typeDefForResult(id: MetaTypeIdCustom, typeIndex?: TypeIndex): Pick<TypeDef, any>;
    typeDefForStruct(def: MetaTypeDefStruct | MetaTypeDefEnumVariantStruct): Pick<TypeDef, any>;
    private typeDefForTupleStruct;
}
export {};
