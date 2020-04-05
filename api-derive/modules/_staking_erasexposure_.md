[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/erasExposure"](_staking_erasexposure_.md)

# Module: "staking/erasExposure"

## Index

### Functions

* [eraExposure](_staking_erasexposure_.md#eraexposure)
* [erasExposure](_staking_erasexposure_.md#erasexposure)

## Functions

###  eraExposure

▸ **eraExposure**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/erasExposure.ts:37](https://github.com/polkadot-js/api/blob/f71211f5dc/packages/api-derive/src/staking/erasExposure.ts#L37)*

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

*Defined in [packages/api-derive/src/staking/erasExposure.ts:45](https://github.com/polkadot-js/api/blob/f71211f5dc/packages/api-derive/src/staking/erasExposure.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`withActive?`: undefined | false | true): *Observable‹DeriveEraExposure[]›*

**Parameters:**

Name | Type |
------ | ------ |
`withActive?` | undefined &#124; false &#124; true |
