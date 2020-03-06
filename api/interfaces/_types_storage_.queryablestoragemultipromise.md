[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/storage"](../modules/_types_storage_.md) › [QueryableStorageMultiPromise](_types_storage_.queryablestoragemultipromise.md)

# Interface: QueryableStorageMultiPromise <**ApiType**>

## Type parameters

▪ **ApiType**: *[ApiTypes](../modules/_types_base_.md#apitypes)*

## Hierarchy

* **QueryableStorageMultiPromise**

## Callable

▸ <**T**>(`calls`: [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[], `callback`: Callback‹T›): *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

*Defined in [api/src/types/storage.ts:73](https://github.com/polkadot-js/api/blob/0e264a029/packages/api/src/types/storage.ts#L73)*

**Type parameters:**

▪ **T**: *Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`calls` | [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[] |
`callback` | Callback‹T› |

**Returns:** *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)*

▸ <**T**>(`calls`: [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[]): *Promise‹T›*

*Defined in [api/src/types/storage.ts:74](https://github.com/polkadot-js/api/blob/0e264a029/packages/api/src/types/storage.ts#L74)*

**Type parameters:**

▪ **T**: *Codec[]*

**Parameters:**

Name | Type |
------ | ------ |
`calls` | [QueryableStorageMultiArg](../modules/_types_storage_.md#queryablestoragemultiarg)‹ApiType›[] |

**Returns:** *Promise‹T›*
