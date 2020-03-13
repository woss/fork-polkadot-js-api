[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasExposure"](_staking_erasexposure_.md)

# External module: "staking/erasExposure"

## Index

### Functions

* [eraExposure](_staking_erasexposure_.md#eraexposure)
* [erasExposure](_staking_erasexposure_.md#erasexposure)

## Functions

###  eraExposure

▸ **eraExposure**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:38](https://github.com/polkadot-js/api/blob/affa5d390c/packages/api-derive/src/staking/erasExposure.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`era`: EraIndex): *Observable‹DeriveEraExposure›*

**Parameters:**

Name | Type |
------ | ------ |
`era` | EraIndex |

___

###  erasExposure

▸ **erasExposure**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:47](https://github.com/polkadot-js/api/blob/affa5d390c/packages/api-derive/src/staking/erasExposure.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: boolean | BN | number): *Observable‹DeriveEraExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | boolean &#124; BN &#124; number |
