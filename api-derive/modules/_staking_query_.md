[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["staking/query"](_staking_query_.md)

# Module: "staking/query"

## Index

### Functions

* [query](_staking_query_.md#query)
* [queryMulti](_staking_query_.md#querymulti)

## Functions

###  query

▸ **query**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/query.ts:88](https://github.com/polkadot-js/api/blob/b3a6b3dcb5/packages/api-derive/src/staking/query.ts#L88)*

**`description`** From a stash, retrieve the controllerId and all relevant details

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`accountId`: Uint8Array | string): *Observable‹DerivedStakingQuery›*

**Parameters:**

Name | Type |
------ | ------ |
`accountId` | Uint8Array &#124; string |

___

###  queryMulti

▸ **queryMulti**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/staking/query.ts:105](https://github.com/polkadot-js/api/blob/b3a6b3dcb5/packages/api-derive/src/staking/query.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (...`accountIds`: string | Uint8Array‹›[]): *Observable‹DerivedStakingQuery[]›*

**Parameters:**

Name | Type |
------ | ------ |
`...accountIds` | string &#124; Uint8Array‹›[] |
