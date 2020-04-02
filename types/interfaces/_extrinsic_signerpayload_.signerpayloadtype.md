[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/SignerPayload"](../modules/_extrinsic_signerpayload_.md) › [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md)

# Interface: SignerPayloadType

## Hierarchy

* [Codec](_types_codec_.codec.md)

  ↳ **SignerPayloadType**

  ↳ [SignerPayload](../classes/_extrinsic_signerpayload_.signerpayload.md)

## Index

### Properties

* [address](_extrinsic_signerpayload_.signerpayloadtype.md#address)
* [blockHash](_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)
* [blockNumber](_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)
* [encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)
* [era](_extrinsic_signerpayload_.signerpayloadtype.md#era)
* [genesisHash](_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)
* [hash](_extrinsic_signerpayload_.signerpayloadtype.md#hash)
* [isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#isempty)
* [method](_extrinsic_signerpayload_.signerpayloadtype.md#method)
* [nonce](_extrinsic_signerpayload_.signerpayloadtype.md#nonce)
* [registry](_extrinsic_signerpayload_.signerpayloadtype.md#registry)
* [runtimeVersion](_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)
* [tip](_extrinsic_signerpayload_.signerpayloadtype.md#tip)
* [version](_extrinsic_signerpayload_.signerpayloadtype.md#version)

### Methods

* [eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)
* [toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)
* [toHuman](_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)
* [toJSON](_extrinsic_signerpayload_.signerpayloadtype.md#tojson)
* [toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)
* [toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)
* [toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)

## Properties

###  address

• **address**: *Address*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:15](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L15)*

___

###  blockHash

• **blockHash**: *Hash*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L16)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L17)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[encodedLength](_extrinsic_signerpayload_.signerpayloadtype.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:40](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *ExtrinsicEra*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L18)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L19)*

___

###  hash

• **hash**: *H256*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[hash](_extrinsic_signerpayload_.signerpayloadtype.md#hash)*

*Defined in [packages/types/src/types/codec.ts:45](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L45)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[isEmpty](_extrinsic_signerpayload_.signerpayloadtype.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:50](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L50)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *Call*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L20)*

___

###  nonce

• **nonce**: *[Compact](../classes/_codec_compact_.compact.md)‹Index›*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L21)*

___

###  registry

• **registry**: *[Registry](_types_registry_.registry.md)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[registry](_extrinsic_signerpayload_.signerpayloadtype.md#registry)*

*Defined in [packages/types/src/types/codec.ts:55](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L55)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L22)*

___

###  tip

• **tip**: *[Compact](../classes/_codec_compact_.compact.md)‹Balance›*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L23)*

___

###  version

• **version**: *u8*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:24](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/extrinsic/SignerPayload.ts#L24)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[eq](_extrinsic_signerpayload_.signerpayloadtype.md#eq)*

*Defined in [packages/types/src/types/codec.ts:60](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHex](_extrinsic_signerpayload_.signerpayloadtype.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:65](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L65)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toHuman](_extrinsic_signerpayload_.signerpayloadtype.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:70](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L70)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toJSON](_extrinsic_signerpayload_.signerpayloadtype.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:75](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L75)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toRawType](_extrinsic_signerpayload_.signerpayloadtype.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:80](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L80)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toString](_extrinsic_signerpayload_.signerpayloadtype.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:85](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L85)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*

*Inherited from [SignerPayloadType](_extrinsic_signerpayload_.signerpayloadtype.md).[toU8a](_extrinsic_signerpayload_.signerpayloadtype.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:91](https://github.com/polkadot-js/api/blob/114ac59707/packages/types/src/types/codec.ts#L91)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](../classes/_codec_raw_.raw.md#static-uint8array)*
