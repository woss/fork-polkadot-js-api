[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasSlashes"](_staking_erasslashes_.md)

# External module: "staking/erasSlashes"

## Index

### Functions

* [eraSlashes](_staking_erasslashes_.md#eraslashes)
* [erasSlashes](_staking_erasslashes_.md#erasslashes)

## Functions

###  eraSlashes

▸ **eraSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:32](https://github.com/polkadot-js/api/blob/f942510309/packages/api-derive/src/staking/erasSlashes.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraSlashes›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasSlashes

▸ **erasSlashes**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasSlashes.ts:43](https://github.com/polkadot-js/api/blob/f942510309/packages/api-derive/src/staking/erasSlashes.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: boolean | BN | number): *Observable‹DeriveEraSlashes[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | boolean &#124; BN &#124; number |
