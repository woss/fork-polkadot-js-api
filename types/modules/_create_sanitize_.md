[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/sanitize"](_create_sanitize_.md)

# Module: "create/sanitize"

## Index

### Functions

* [alias](_create_sanitize_.md#alias)
* [cleanupCompact](_create_sanitize_.md#cleanupcompact)
* [findClosing](_create_sanitize_.md#findclosing)
* [flattenSingleTuple](_create_sanitize_.md#flattensingletuple)
* [removeColons](_create_sanitize_.md#removecolons)
* [removeGenerics](_create_sanitize_.md#removegenerics)
* [removePairOf](_create_sanitize_.md#removepairof)
* [removeTraits](_create_sanitize_.md#removetraits)
* [removeWrap](_create_sanitize_.md#removewrap)
* [sanitize](_create_sanitize_.md#sanitize)

## Functions

###  alias

▸ **alias**(`src`: string[], `dest`: string, `withChecks`: boolean): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:60](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L60)*

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

*Defined in [packages/types/src/create/sanitize.ts:75](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L75)*

**Returns:** *Mapper*

___

###  findClosing

▸ **findClosing**(`value`: string, `start`: number): *number*

*Defined in [packages/types/src/create/sanitize.ts:42](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |
`start` | number |

**Returns:** *number*

___

###  flattenSingleTuple

▸ **flattenSingleTuple**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:93](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L93)*

**Returns:** *Mapper*

___

###  removeColons

▸ **removeColons**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:99](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L99)*

**Returns:** *Mapper*

___

###  removeGenerics

▸ **removeGenerics**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:123](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L123)*

**Returns:** *Mapper*

___

###  removePairOf

▸ **removePairOf**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:151](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L151)*

**Returns:** *Mapper*

___

###  removeTraits

▸ **removeTraits**(): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:168](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L168)*

**Returns:** *Mapper*

___

###  removeWrap

▸ **removeWrap**(`_check`: string): *Mapper*

*Defined in [packages/types/src/create/sanitize.ts:187](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`_check` | string |

**Returns:** *Mapper*

___

###  sanitize

▸ **sanitize**(`value`: string): *string*

*Defined in [packages/types/src/create/sanitize.ts:208](https://github.com/polkadot-js/api/blob/0bdbf4b7a7/packages/types/src/create/sanitize.ts#L208)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *string*
