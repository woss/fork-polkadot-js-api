[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/stakerRewards"](_staking_stakerrewards_.md)

# External module: "staking/stakerRewards"

## Index

### Functions

* [stakerRewards](_staking_stakerrewards_.md#stakerrewards)
* [stakerRewardsMulti](_staking_stakerrewards_.md#stakerrewardsmulti)

## Functions

###  stakerRewards

▸ **stakerRewards**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:61](https://github.com/polkadot-js/api/blob/e86fe5bab0/packages/api-derive/src/staking/stakerRewards.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string, `startEra`: BN | number): *Observable‹DeriveStakerReward[]›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
`startEra` | BN &#124; number |

___

###  stakerRewardsMulti

▸ **stakerRewardsMulti**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:77](https://github.com/polkadot-js/api/blob/e86fe5bab0/packages/api-derive/src/staking/stakerRewards.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (...`params`: [Uint8Array | string, BN | number][]): *Observable‹DeriveStakerReward[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`...params` | [Uint8Array &#124; string, BN &#124; number][] |
