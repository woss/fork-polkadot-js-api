[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/util"](_democracy_util_.md)

# Module: "democracy/util"

## Index

### Functions

* [approxChanges](_democracy_util_.md#approxchanges)
* [calcPassing](_democracy_util_.md#calcpassing)
* [calcVotes](_democracy_util_.md#calcvotes)
* [compareRationals](_democracy_util_.md#comparerationals)
* [getStatus](_democracy_util_.md#getstatus)
* [parseImage](_democracy_util_.md#parseimage)

## Functions

###  approxChanges

▸ **approxChanges**(`threshold`: VoteThreshold, `sqrtElectorate`: BN, `votedAye`: BN, `votedNay`: BN, `votedTotal`: BN): *Approx*

*Defined in [packages/api-derive/src/democracy/util.ts:102](https://github.com/polkadot-js/api/blob/a241bd1c38/packages/api-derive/src/democracy/util.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`threshold` | VoteThreshold |
`sqrtElectorate` | BN |
`votedAye` | BN |
`votedNay` | BN |
`votedTotal` | BN |

**Returns:** *Approx*

___

###  calcPassing

▸ **calcPassing**(`threshold`: VoteThreshold, `sqrtElectorate`: BN, `votedAye`: BN, `votedNay`: BN, `votedTotal`: BN): *boolean*

*Defined in [packages/api-derive/src/democracy/util.ts:62](https://github.com/polkadot-js/api/blob/a241bd1c38/packages/api-derive/src/democracy/util.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`threshold` | VoteThreshold |
`sqrtElectorate` | BN |
`votedAye` | BN |
`votedNay` | BN |
`votedTotal` | BN |

**Returns:** *boolean*

___

###  calcVotes

▸ **calcVotes**(`sqrtElectorate`: BN, `referendum`: DeriveReferendum, `votes`: DeriveReferendumVote[]): *DeriveReferendumVotes*

*Defined in [packages/api-derive/src/democracy/util.ts:199](https://github.com/polkadot-js/api/blob/a241bd1c38/packages/api-derive/src/democracy/util.ts#L199)*

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

*Defined in [packages/api-derive/src/democracy/util.ts:35](https://github.com/polkadot-js/api/blob/a241bd1c38/packages/api-derive/src/democracy/util.ts#L35)*

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

*Defined in [packages/api-derive/src/democracy/util.ts:211](https://github.com/polkadot-js/api/blob/a241bd1c38/packages/api-derive/src/democracy/util.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

**Returns:** *ReferendumStatus | ReferendumInfoTo239 | null*

___

###  parseImage

▸ **parseImage**(`api`: ApiInterfaceRx, `imageOpt`: Option‹OldPreimage› | Option‹PreimageStatus›): *DeriveProposalImage | undefined*

*Defined in [packages/api-derive/src/democracy/util.ts:240](https://github.com/polkadot-js/api/blob/a241bd1c38/packages/api-derive/src/democracy/util.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`imageOpt` | Option‹OldPreimage› &#124; Option‹PreimageStatus› |

**Returns:** *DeriveProposalImage | undefined*
