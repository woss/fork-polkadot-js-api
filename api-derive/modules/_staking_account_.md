[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/account"](_staking_account_.md)

# Module: "staking/account"

## Index

### Functions

* [account](_staking_account_.md#account)

## Functions

###  account

▸ **account**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/account.ts:90](https://github.com/polkadot-js/api/blob/8bf5e51725/packages/api-derive/src/staking/account.ts#L90)*

**`description`** From a stash, retrieve the controllerId and fill in all the relevant staking details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹DerivedStakingAccount›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |
