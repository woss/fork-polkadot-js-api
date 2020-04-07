[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/account"](_staking_account_.md)

# Module: "staking/account"

## Index

### Functions

* [account](_staking_account_.md#account)

## Functions

###  account

▸ **account**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:76](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/api-derive/src/staking/account.ts#L76)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹DeriveStakingAccount›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
