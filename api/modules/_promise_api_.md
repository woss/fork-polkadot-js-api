[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/Api"](_promise_api_.md)

# Module: "promise/Api"

## Index

### Classes

* [ApiPromise](../classes/_promise_api_.apipromise.md)

### Functions

* [decorateMethod](_promise_api_.md#decoratemethod)

## Functions

###  decorateMethod

▸ **decorateMethod**<**Method**>(`method`: Method, `options?`: [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md)): *[StorageEntryPromiseOverloads](../interfaces/_types_storage_.storageentrypromiseoverloads.md)*

*Defined in [api/src/promise/Api.ts:64](https://github.com/polkadot-js/api/blob/f71211f5dc/packages/api/src/promise/Api.ts#L64)*

**`description`** Decorate method for ApiPromise, where the results are converted to the Promise equivalent

**Type parameters:**

▪ **Method**: *AnyFunction*

**Parameters:**

Name | Type |
------ | ------ |
`method` | Method |
`options?` | [DecorateMethodOptions](../interfaces/_types_base_.decoratemethodoptions.md) |

**Returns:** *[StorageEntryPromiseOverloads](../interfaces/_types_storage_.storageentrypromiseoverloads.md)*
