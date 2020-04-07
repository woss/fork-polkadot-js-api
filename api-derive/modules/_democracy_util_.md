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

*Defined in [packages/api-derive/src/democracy/util.ts:126](https://github.com/polkadot-js/api/blob/6d95eb418d/packages/api-derive/src/democracy/util.ts#L126)*

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

*Defined in [packages/api-derive/src/democracy/util.ts:29](https://github.com/polkadot-js/api/blob/6d95eb418d/packages/api-derive/src/democracy/util.ts#L29)*

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

*Defined in [packages/api-derive/src/democracy/util.ts:138](https://github.com/polkadot-js/api/blob/6d95eb418d/packages/api-derive/src/democracy/util.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

**Returns:** *ReferendumStatus | ReferendumInfoTo239 | null*

___

###  parseImage

▸ **parseImage**(`api`: ApiInterfaceRx, `imageOpt`: Option‹OldPreimage› | Option‹PreimageStatus›): *DeriveProposalImage | undefined*

*Defined in [packages/api-derive/src/democracy/util.ts:167](https://github.com/polkadot-js/api/blob/6d95eb418d/packages/api-derive/src/democracy/util.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`imageOpt` | Option‹OldPreimage› &#124; Option‹PreimageStatus› |

**Returns:** *DeriveProposalImage | undefined*
