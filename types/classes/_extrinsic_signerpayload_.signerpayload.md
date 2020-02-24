[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["extrinsic/SignerPayload"](../modules/_extrinsic_signerpayload_.md) › [SignerPayload](_extrinsic_signerpayload_.signerpayload.md)

# Class: SignerPayload

**`name`** SignerPayload

**`description`** 
A generic signer payload that can be used for serialization between API and signer

## Hierarchy

  ↳ [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md)

  ↳ **SignerPayload**

## Implements

* [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)

## Index

### Properties

* [address](_extrinsic_signerpayload_.signerpayload.md#address)
* [blockHash](_extrinsic_signerpayload_.signerpayload.md#blockhash)
* [blockNumber](_extrinsic_signerpayload_.signerpayload.md#blocknumber)
* [encodedLength](_extrinsic_signerpayload_.signerpayload.md#encodedlength)
* [era](_extrinsic_signerpayload_.signerpayload.md#era)
* [genesisHash](_extrinsic_signerpayload_.signerpayload.md#genesishash)
* [hash](_extrinsic_signerpayload_.signerpayload.md#hash)
* [isEmpty](_extrinsic_signerpayload_.signerpayload.md#isempty)
* [method](_extrinsic_signerpayload_.signerpayload.md#method)
* [nonce](_extrinsic_signerpayload_.signerpayload.md#nonce)
* [registry](_extrinsic_signerpayload_.signerpayload.md#registry)
* [runtimeVersion](_extrinsic_signerpayload_.signerpayload.md#runtimeversion)
* [tip](_extrinsic_signerpayload_.signerpayload.md#tip)
* [version](_extrinsic_signerpayload_.signerpayload.md#version)

### Methods

* [eq](_extrinsic_signerpayload_.signerpayload.md#eq)
* [toHex](_extrinsic_signerpayload_.signerpayload.md#tohex)
* [toHuman](_extrinsic_signerpayload_.signerpayload.md#tohuman)
* [toJSON](_extrinsic_signerpayload_.signerpayload.md#tojson)
* [toPayload](_extrinsic_signerpayload_.signerpayload.md#topayload)
* [toRaw](_extrinsic_signerpayload_.signerpayload.md#toraw)
* [toRawType](_extrinsic_signerpayload_.signerpayload.md#torawtype)
* [toString](_extrinsic_signerpayload_.signerpayload.md#tostring)
* [toU8a](_extrinsic_signerpayload_.signerpayload.md#tou8a)

## Properties

###  address

• **address**: *Address*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[address](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#address)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:16](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L16)*

___

###  blockHash

• **blockHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[blockHash](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#blockhash)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:17](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L17)*

___

###  blockNumber

• **blockNumber**: *BlockNumber*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[blockNumber](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#blocknumber)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:18](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L18)*

___

###  encodedLength

• **encodedLength**: *number*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[encodedLength](../interfaces/_codec_compact_.compactencodable.md#encodedlength)*

*Defined in [packages/types/src/types/codec.ts:40](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L40)*

**`description`** The length of the value when encoded as a Uint8Array

___

###  era

• **era**: *ExtrinsicEra*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[era](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#era)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:19](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L19)*

___

###  genesisHash

• **genesisHash**: *Hash*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[genesisHash](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#genesishash)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:20](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L20)*

___

###  hash

• **hash**: *H256*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[hash](../interfaces/_codec_compact_.compactencodable.md#hash)*

*Defined in [packages/types/src/types/codec.ts:45](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L45)*

**`description`** Returns a hash of the value

___

###  isEmpty

• **isEmpty**: *boolean*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[isEmpty](../interfaces/_codec_compact_.compactencodable.md#isempty)*

*Defined in [packages/types/src/types/codec.ts:50](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L50)*

**`description`** Checks if the value is an empty value

___

###  method

• **method**: *Call*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[method](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#method)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:21](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L21)*

___

###  nonce

• **nonce**: *[Compact](_codec_compact_.compact.md)‹Index›*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[nonce](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#nonce)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:22](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L22)*

___

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[registry](../interfaces/_codec_compact_.compactencodable.md#registry)*

*Defined in [packages/types/src/types/codec.ts:55](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L55)*

**`description`** The registry associated with this object

___

###  runtimeVersion

• **runtimeVersion**: *RuntimeVersion*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[runtimeVersion](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#runtimeversion)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:23](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L23)*

___

###  tip

• **tip**: *[Compact](_codec_compact_.compact.md)‹Balance›*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[tip](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#tip)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:24](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L24)*

___

###  version

• **version**: *u8*

*Inherited from [SignerPayloadType](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md).[version](../interfaces/_extrinsic_signerpayload_.signerpayloadtype.md#version)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:25](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L25)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[eq](../interfaces/_codec_compact_.compactencodable.md#eq)*

*Defined in [packages/types/src/types/codec.ts:60](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L60)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(`isLe?`: undefined | false | true): *string*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toHex](../interfaces/_codec_compact_.compactencodable.md#tohex)*

*Defined in [packages/types/src/types/codec.ts:65](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L65)*

**`description`** Returns a hex string representation of the value. isLe returns a LE (number-only) representation

**Parameters:**

Name | Type |
------ | ------ |
`isLe?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toHuman](../interfaces/_codec_compact_.compactencodable.md#tohuman)*

*Defined in [packages/types/src/types/codec.ts:70](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L70)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toJSON](../interfaces/_codec_compact_.compactencodable.md#tojson)*

*Defined in [packages/types/src/types/codec.ts:75](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L75)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toPayload

▸ **toPayload**(): *[SignerPayloadJSON](../interfaces/_types_extrinsic_.signerpayloadjson.md)*

*Implementation of [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:52](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L52)*

**`description`** Creates an representation of the structure as an ISignerPayload JSON

**Returns:** *[SignerPayloadJSON](../interfaces/_types_extrinsic_.signerpayloadjson.md)*

___

###  toRaw

▸ **toRaw**(): *[SignerPayloadRaw](../interfaces/_types_extrinsic_.signerpayloadraw.md)*

*Implementation of [ISignerPayload](../interfaces/_types_extrinsic_.isignerpayload.md)*

*Defined in [packages/types/src/extrinsic/SignerPayload.ts:72](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/extrinsic/SignerPayload.ts#L72)*

**`description`** Creates a representation of the payload in raw Exrinsic form

**Returns:** *[SignerPayloadRaw](../interfaces/_types_extrinsic_.signerpayloadraw.md)*

___

###  toRawType

▸ **toRawType**(): *string*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toRawType](../interfaces/_codec_compact_.compactencodable.md#torawtype)*

*Defined in [packages/types/src/types/codec.ts:80](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L80)*

**`description`** Returns the base runtime type name for this instance

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toString](../interfaces/_codec_compact_.compactencodable.md#tostring)*

*Defined in [packages/types/src/types/codec.ts:85](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L85)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: [BareOpts](../modules/_types_helpers_.md#bareopts)): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Inherited from [CompactEncodable](../interfaces/_codec_compact_.compactencodable.md).[toU8a](../interfaces/_codec_compact_.compactencodable.md#tou8a)*

*Defined in [packages/types/src/types/codec.ts:91](https://github.com/polkadot-js/api/blob/bab79b647/packages/types/src/types/codec.ts#L91)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | [BareOpts](../modules/_types_helpers_.md#bareopts) | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*
