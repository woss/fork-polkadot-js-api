[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [SignerPayloadRaw](_types_extrinsic_.signerpayloadraw.md)

# Interface: SignerPayloadRaw

## Hierarchy

* [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md)

  ↳ **SignerPayloadRaw**

## Index

### Properties

* [address](_types_extrinsic_.signerpayloadraw.md#address)
* [data](_types_extrinsic_.signerpayloadraw.md#data)
* [type](_types_extrinsic_.signerpayloadraw.md#type)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:188](https://github.com/polkadot-js/api/blob/110c9d199d/packages/types/src/types/extrinsic.ts#L188)*

**`description`** The ss-58 encoded address

___

###  data

• **data**: *string*

*Inherited from [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md).[data](_types_extrinsic_.signerpayloadrawbase.md#data)*

*Defined in [packages/types/src/types/extrinsic.ts:176](https://github.com/polkadot-js/api/blob/110c9d199d/packages/types/src/types/extrinsic.ts#L176)*

**`description`** The hex-encoded data for this request

___

###  type

• **type**: *"bytes" | "payload"*

*Overrides [SignerPayloadRawBase](_types_extrinsic_.signerpayloadrawbase.md).[type](_types_extrinsic_.signerpayloadrawbase.md#optional-type)*

*Defined in [packages/types/src/types/extrinsic.ts:193](https://github.com/polkadot-js/api/blob/110c9d199d/packages/types/src/types/extrinsic.ts#L193)*

**`description`** The type of the contained data
