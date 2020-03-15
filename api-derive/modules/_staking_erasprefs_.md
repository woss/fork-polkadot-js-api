[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasPrefs"](_staking_erasprefs_.md)

# External module: "staking/erasPrefs"

## Index

### Functions

* [eraPrefs](_staking_erasprefs_.md#eraprefs)
* [erasPrefs](_staking_erasprefs_.md#erasprefs)

## Functions

###  eraPrefs

▸ **eraPrefs**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPrefs.ts:28](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/api-derive/src/staking/erasPrefs.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraPrefs›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasPrefs

▸ **erasPrefs**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasPrefs.ts:36](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/api-derive/src/staking/erasPrefs.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: boolean | BN | number): *Observable‹DeriveEraPrefs[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | boolean &#124; BN &#124; number |
