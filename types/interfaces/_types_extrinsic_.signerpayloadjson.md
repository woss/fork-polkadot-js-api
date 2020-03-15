[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["types/extrinsic"](../modules/_types_extrinsic_.md) › [SignerPayloadJSON](_types_extrinsic_.signerpayloadjson.md)

# Interface: SignerPayloadJSON

## Hierarchy

* **SignerPayloadJSON**

## Index

### Properties

* [address](_types_extrinsic_.signerpayloadjson.md#address)
* [blockHash](_types_extrinsic_.signerpayloadjson.md#blockhash)
* [blockNumber](_types_extrinsic_.signerpayloadjson.md#blocknumber)
* [era](_types_extrinsic_.signerpayloadjson.md#era)
* [genesisHash](_types_extrinsic_.signerpayloadjson.md#genesishash)
* [method](_types_extrinsic_.signerpayloadjson.md#method)
* [nonce](_types_extrinsic_.signerpayloadjson.md#nonce)
* [specVersion](_types_extrinsic_.signerpayloadjson.md#specversion)
* [tip](_types_extrinsic_.signerpayloadjson.md#tip)
* [version](_types_extrinsic_.signerpayloadjson.md#version)

## Properties

###  address

• **address**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:124](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L124)*

**`description`** The ss-58 encoded address

___

###  blockHash

• **blockHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:129](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L129)*

**`description`** The checkpoint hash of the block, in hex

___

###  blockNumber

• **blockNumber**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:134](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L134)*

**`description`** The checkpoint block number, in hex

___

###  era

• **era**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:139](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L139)*

**`description`** The era for this transaction, in hex

___

###  genesisHash

• **genesisHash**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:144](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L144)*

**`description`** The genesis hash of the chain, in hex

___

###  method

• **method**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:149](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L149)*

**`description`** The encoded method (with arguments) in hex

___

###  nonce

• **nonce**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:154](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L154)*

**`description`** The nonce for this transaction, in hex

___

###  specVersion

• **specVersion**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:159](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L159)*

**`description`** The current spec version for  the runtime

___

###  tip

• **tip**: *string*

*Defined in [packages/types/src/types/extrinsic.ts:164](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L164)*

**`description`** The tip for this transaction, in hex

___

###  version

• **version**: *number*

*Defined in [packages/types/src/types/extrinsic.ts:169](https://github.com/polkadot-js/api/blob/908d0fcf52/packages/types/src/types/extrinsic.ts#L169)*

**`description`** The version of the extrinsic we are dealing with
