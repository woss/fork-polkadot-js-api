[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["democracy/referendumInfo"](_democracy_referenduminfo_.md)

# Module: "democracy/referendumInfo"

## Index

### Functions

* [referendumInfo](_democracy_referenduminfo_.md#referenduminfo)
* [retrieveInfo](_democracy_referenduminfo_.md#retrieveinfo)

## Functions

###  referendumInfo

▸ **referendumInfo**(`api`: ApiInterfaceRx): *function*

*Defined in [packages/api-derive/src/democracy/referendumInfo.ts:72](https://github.com/polkadot-js/api/blob/2071de517d/packages/api-derive/src/democracy/referendumInfo.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |

**Returns:** *function*

▸ (`index`: BN | number): *Observable‹DerivedReferendum | null›*

**Parameters:**

Name | Type |
------ | ------ |
`index` | BN &#124; number |

___

###  retrieveInfo

▸ **retrieveInfo**(`api`: ApiInterfaceRx, `index`: BN | number, `info`: Option‹ReferendumInfo | ReferendumInfoTo239›): *Observable‹DerivedReferendum | null›*

*Defined in [packages/api-derive/src/democracy/referendumInfo.ts:60](https://github.com/polkadot-js/api/blob/2071de517d/packages/api-derive/src/democracy/referendumInfo.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`api` | ApiInterfaceRx |
`index` | BN &#124; number |
`info` | Option‹ReferendumInfo &#124; ReferendumInfoTo239› |

**Returns:** *Observable‹DerivedReferendum | null›*
