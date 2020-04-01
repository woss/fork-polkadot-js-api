[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/stakerRewards"](_staking_stakerrewards_.md)

# Module: "staking/stakerRewards"

## Index

### Functions

* [stakerRewards](_staking_stakerrewards_.md#stakerrewards)
* [stakerRewardsMulti](_staking_stakerrewards_.md#stakerrewardsmulti)

## Functions

###  stakerRewards

▸ **stakerRewards**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:67](https://github.com/polkadot-js/api/blob/0dc46445bc/packages/api-derive/src/staking/stakerRewards.ts#L67)*

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

*Defined in [packages/api-derive/src/staking/stakerRewards.ts:84](https://github.com/polkadot-js/api/blob/0dc46445bc/packages/api-derive/src/staking/stakerRewards.ts#L84)*

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
