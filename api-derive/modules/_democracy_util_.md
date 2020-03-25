[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/util"](_democracy_util_.md)

# Module: "democracy/util"

## Index

### Functions

* [calcVotes](_democracy_util_.md#calcvotes)
* [compareRationals](_democracy_util_.md#comparerationals)
* [getStatus](_democracy_util_.md#getstatus)

## Functions

###  calcVotes

▸ **calcVotes**(`sqrtElectorate`: BN, `referendum`: DerivedReferendum, `votes`: DerivedReferendumVote[]): *DerivedReferendumVotes*

*Defined in [packages/api-derive/src/democracy/util.ts:117](https://github.com/polkadot-js/api/blob/8bf5e51725/packages/api-derive/src/democracy/util.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`sqrtElectorate` | BN |
`referendum` | DerivedReferendum |
`votes` | DerivedReferendumVote[] |

**Returns:** *DerivedReferendumVotes*

___

###  compareRationals

▸ **compareRationals**(`n1`: BN, `d1`: BN, `n2`: BN, `d2`: BN): *boolean*

*Defined in [packages/api-derive/src/democracy/util.ts:20](https://github.com/polkadot-js/api/blob/8bf5e51725/packages/api-derive/src/democracy/util.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`n1` | BN |
`d1` | BN |
`n2` | BN |
`d2` | BN |

**Returns:** *boolean*

___

###  getStatus

▸ **getStatus**(`info`: Option‹ReferendumInfo | ReferendumInfoTo239›): *ReferendumStatus | ReferendumInfoTo239 | null*

*Defined in [packages/api-derive/src/democracy/util.ts:129](https://github.com/polkadot-js/api/blob/8bf5e51725/packages/api-derive/src/democracy/util.ts#L129)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

**Returns:** *ReferendumStatus | ReferendumInfoTo239 | null*
