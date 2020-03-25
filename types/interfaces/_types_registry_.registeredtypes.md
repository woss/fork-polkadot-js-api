[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/registry"](../modules/_types_registry_.md) › [RegisteredTypes](_types_registry_.registeredtypes.md)

# Interface: RegisteredTypes

## Hierarchy

* **RegisteredTypes**

## Index

### Properties

* [types](_types_registry_.registeredtypes.md#optional-types)
* [typesAlias](_types_registry_.registeredtypes.md#optional-typesalias)
* [typesChain](_types_registry_.registeredtypes.md#optional-typeschain)
* [typesSpec](_types_registry_.registeredtypes.md#optional-typesspec)

## Properties

### `Optional` types

• **types**? : *[RegistryTypes](../modules/_types_registry_.md#registrytypes)*

*Defined in [packages/types/src/types/registry.ts:89](https://github.com/polkadot-js/api/blob/a0979a9ce3/packages/types/src/types/registry.ts#L89)*

**`description`** Additional types used by runtime modules. This is necessary if the runtime modules
uses types not available in the base Substrate runtime.

___

### `Optional` typesAlias

• **typesAlias**? : *Record‹string, OverrideModuleType›*

*Defined in [packages/types/src/types/registry.ts:93](https://github.com/polkadot-js/api/blob/a0979a9ce3/packages/types/src/types/registry.ts#L93)*

**`description`** Alias an types, as received via the metadata, to a JS-specific type to avoid conflicts. For instance, you can rename the `Proposal` in the `treasury` module to `TreasuryProposal` as to not have conflicts with the one for democracy.

___

### `Optional` typesChain

• **typesChain**? : *Record‹string, [RegistryTypes](../modules/_types_registry_.md#registrytypes)›*

*Defined in [packages/types/src/types/registry.ts:97](https://github.com/polkadot-js/api/blob/a0979a9ce3/packages/types/src/types/registry.ts#L97)*

**`description`** Additional types that are injected based on the chain we are connecting to. There are keyed by the chain, i.e. `{ 'Kusama CC1': { ... } }`

___

### `Optional` typesSpec

• **typesSpec**? : *Record‹string, [RegistryTypes](../modules/_types_registry_.md#registrytypes)›*

*Defined in [packages/types/src/types/registry.ts:101](https://github.com/polkadot-js/api/blob/a0979a9ce3/packages/types/src/types/registry.ts#L101)*

**`description`** Additional types that are injected based on the type of node we are connecting to, as set via specName in the runtime version. There are keyed by the node, i.e. `{ 'edgeware': { ... } }`
