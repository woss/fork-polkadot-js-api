[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/helpers"](_types_helpers_.md)

# External module: "types/helpers"

## Index

### Type aliases

* [AnyFunction](_types_helpers_.md#anyfunction)
* [AnyJson](_types_helpers_.md#anyjson)
* [AnyNumber](_types_helpers_.md#anynumber)
* [AnyString](_types_helpers_.md#anystring)
* [AnyU8a](_types_helpers_.md#anyu8a)
* [ArrayElementType](_types_helpers_.md#arrayelementtype)
* [BareOpts](_types_helpers_.md#bareopts)
* [Callback](_types_helpers_.md#callback)
* [InterfaceTypes](_types_helpers_.md#interfacetypes)

## Type aliases

###  AnyFunction

Ƭ **AnyFunction**: *function*

*Defined in [packages/types/src/types/helpers.ts:13](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L13)*

#### Type declaration:

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  AnyJson

Ƭ **AnyJson**: *string | number | boolean | null | undefined | AnyJsonArray | object*

*Defined in [packages/types/src/types/helpers.ts:18](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L18)*

___

###  AnyNumber

Ƭ **AnyNumber**: *BN | BigInt | [Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number | string*

*Defined in [packages/types/src/types/helpers.ts:20](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L20)*

___

###  AnyString

Ƭ **AnyString**: *string | string*

*Defined in [packages/types/src/types/helpers.ts:22](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L22)*

___

###  AnyU8a

Ƭ **AnyU8a**: *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array) | number[] | string*

*Defined in [packages/types/src/types/helpers.ts:24](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L24)*

___

###  ArrayElementType

Ƭ **ArrayElementType**: *T extends ReadonlyArray<infer ElementType> ? ElementType : never*

*Defined in [packages/types/src/types/helpers.ts:27](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L27)*

___

###  BareOpts

Ƭ **BareOpts**: *boolean | Record‹string, boolean›*

*Defined in [packages/types/src/types/helpers.ts:31](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L31)*

___

###  Callback

Ƭ **Callback**: *function*

*Defined in [packages/types/src/types/helpers.ts:33](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L33)*

#### Type declaration:

▸ (`result`: T): *void | Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`result` | T |

___

###  InterfaceTypes

Ƭ **InterfaceTypes**: *keyof InterfaceRegistry*

*Defined in [packages/types/src/types/helpers.ts:9](https://github.com/polkadot-js/api/blob/790deca695/packages/types/src/types/helpers.ts#L9)*
