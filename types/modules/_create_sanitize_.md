[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/sanitize"](_create_sanitize_.md)

# Module: "create/sanitize"

## Index

### Functions

* [alias](_create_sanitize_.md#alias)
* [cleanupCompact](_create_sanitize_.md#cleanupcompact)
* [findClosing](_create_sanitize_.md#findclosing)
* [flattenSingleTuple](_create_sanitize_.md#flattensingletuple)
* [removeColonPrefix](_create_sanitize_.md#removecolonprefix)
* [removeGenerics](_create_sanitize_.md#removegenerics)
* [removePairOf](_create_sanitize_.md#removepairof)
* [removeTraits](_create_sanitize_.md#removetraits)
* [removeWrap](_create_sanitize_.md#removewrap)
* [sanitize](_create_sanitize_.md#sanitize)

## Functions

###  alias

▸ **alias**(`src`: string[], `dest`: string, `withChecks`: boolean): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:62](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L62)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`src` | string[] | - |
`dest` | string | - |
`withChecks` | boolean | true |

**Returns:** *Mapper*

___

###  cleanupCompact

▸ **cleanupCompact**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:77](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L77)*

**Returns:** *Mapper*

___

###  findClosing

▸ **findClosing**(`value`: string, `start`: number): *number*

*Defined in [packages/types/src/create/sanitize.ts:44](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`start` | number |

**Returns:** *number*

___

###  flattenSingleTuple

▸ **flattenSingleTuple**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:95](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L95)*

**Returns:** *Mapper*

___

###  removeColonPrefix

▸ **removeColonPrefix**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:101](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L101)*

**Returns:** *Mapper*

___

###  removeGenerics

▸ **removeGenerics**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:107](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L107)*

**Returns:** *Mapper*

___

###  removePairOf

▸ **removePairOf**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:135](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L135)*

**Returns:** *Mapper*

___

###  removeTraits

▸ **removeTraits**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:152](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L152)*

**Returns:** *Mapper*

___

###  removeWrap

▸ **removeWrap**(`_check`: string): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:173](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`_check` | string |

**Returns:** *Mapper*

___

###  sanitize

▸ **sanitize**(`value`: string): *string*

*Defined in [packages/types/src/create/sanitize.ts:194](https://github.com/polkadot-js/api/blob/27cd9b1ca4/packages/types/src/create/sanitize.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*
