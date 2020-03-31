[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/util"](_democracy_util_.md)

# Module: "democracy/util"

## Index

### Functions

* [calcVotes](_democracy_util_.md#calcvotes)
* [compareRationals](_democracy_util_.md#comparerationals)
* [getStatus](_democracy_util_.md#getstatus)
* [parseImage](_democracy_util_.md#parseimage)

## Functions

###  calcVotes

▸ **calcVotes**(`sqrtElectorate`: BN, `referendum`: DeriveReferendum, `votes`: DeriveReferendumVote[]): *DeriveReferendumVotes*

*Defined in [packages/api-derive/src/democracy/util.ts:119](https://github.com/polkadot-js/api/blob/71c1d16dc4/packages/api-derive/src/democracy/util.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`sqrtElectorate` | BN |
`referendum` | DeriveReferendum |
`votes` | DeriveReferendumVote[] |

**Returns:** *DeriveReferendumVotes*

___

###  compareRationals

▸ **compareRationals**(`n1`: BN, `d1`: BN, `n2`: BN, `d2`: BN): *boolean*

*Defined in [packages/api-derive/src/democracy/util.ts:22](https://github.com/polkadot-js/api/blob/71c1d16dc4/packages/api-derive/src/democracy/util.ts#L22)*

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

*Defined in [packages/api-derive/src/democracy/util.ts:131](https://github.com/polkadot-js/api/blob/71c1d16dc4/packages/api-derive/src/democracy/util.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

**Returns:** *ReferendumStatus | ReferendumInfoTo239 | null*

___

###  parseImage

▸ **parseImage**(`api`: ApiInterfaceRx, `imageOpt`: Option‹ITuple‹[Bytes, AccountId, Balance, BlockNumber]››): *DeriveProposalImage | undefined*

*Defined in [packages/api-derive/src/democracy/util.ts:148](https://github.com/polkadot-js/api/blob/71c1d16dc4/packages/api-derive/src/democracy/util.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`imageOpt` | Option‹ITuple‹[Bytes, AccountId, Balance, BlockNumber]›› |

**Returns:** *DeriveProposalImage | undefined*
