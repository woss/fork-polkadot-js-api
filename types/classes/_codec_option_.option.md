[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/Option"](../modules/_codec_option_.md) › [Option](_codec_option_.option.md)

# Class: Option <**T**>

**`name`** Option

**`description`** 
An Option is an optional field. Basically the first byte indicates that there is
is value to follow. If the byte is `1` there is an actual value. So the Option
implements that - decodes, checks for optionality and wraps the required structure
with a value if/as required/found.

## Type parameters

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

## Hierarchy

* [Base](_codec_base_.base.md)‹T›

  ↳ **Option**

## Implements

* [Codec](../interfaces/_types_codec_.codec.md)

## Index

### Constructors

* [constructor](_codec_option_.option.md#constructor)

### Properties

* [registry](_codec_option_.option.md#registry)

### Accessors

* [encodedLength](_codec_option_.option.md#encodedlength)
* [hash](_codec_option_.option.md#hash)
* [isEmpty](_codec_option_.option.md#isempty)
* [isNone](_codec_option_.option.md#isnone)
* [isSome](_codec_option_.option.md#issome)
* [value](_codec_option_.option.md#value)

### Methods

* [eq](_codec_option_.option.md#eq)
* [toHex](_codec_option_.option.md#tohex)
* [toHuman](_codec_option_.option.md#tohuman)
* [toJSON](_codec_option_.option.md#tojson)
* [toRawType](_codec_option_.option.md#torawtype)
* [toString](_codec_option_.option.md#tostring)
* [toU8a](_codec_option_.option.md#tou8a)
* [unwrap](_codec_option_.option.md#unwrap)
* [unwrapOr](_codec_option_.option.md#unwrapor)
* [unwrapOrDefault](_codec_option_.option.md#unwrapordefault)
* [with](_codec_option_.option.md#static-with)

## Constructors

###  constructor

\+ **new Option**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `Type`: [Constructor](../interfaces/_types_codec_.constructor.md)‹T› | keyof InterfaceTypes, `value?`: any): *[Option](_codec_option_.option.md)*

*Defined in [packages/types/src/codec/Option.ts:48](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`Type` | [Constructor](../interfaces/_types_codec_.constructor.md)‹T› &#124; keyof InterfaceTypes |
`value?` | any |

**Returns:** *[Option](_codec_option_.option.md)*

## Properties

###  registry

• **registry**: *[Registry](../interfaces/_types_registry_.registry.md)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md).[registry](../interfaces/_types_codec_.codec.md#registry)*

*Inherited from [Base](_codec_base_.base.md).[registry](_codec_base_.base.md#registry)*

*Defined in [packages/types/src/codec/Base.ts:17](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Base.ts#L17)*

## Accessors

###  encodedLength

• **get encodedLength**(): *number*

*Overrides [Base](_codec_base_.base.md).[encodedLength](_codec_base_.base.md#encodedlength)*

*Defined in [packages/types/src/codec/Option.ts:69](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L69)*

**`description`** The length of the value when encoded as a Uint8Array

**Returns:** *number*

___

###  hash

• **get hash**(): *H256*

*Inherited from [Base](_codec_base_.base.md).[hash](_codec_base_.base.md#hash)*

*Defined in [packages/types/src/codec/Base.ts:36](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Base.ts#L36)*

**`description`** returns a hash of the contents

**Returns:** *H256*

___

###  isEmpty

• **get isEmpty**(): *boolean*

*Overrides [Base](_codec_base_.base.md).[isEmpty](_codec_base_.base.md#isempty)*

*Defined in [packages/types/src/codec/Option.ts:77](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L77)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isNone

• **get isNone**(): *boolean*

*Defined in [packages/types/src/codec/Option.ts:84](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L84)*

**`description`** Checks if the Option has no value

**Returns:** *boolean*

___

###  isSome

• **get isSome**(): *boolean*

*Defined in [packages/types/src/codec/Option.ts:91](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L91)*

**`description`** Checks if the Option has a value

**Returns:** *boolean*

___

###  value

• **get value**(): *[Codec](../interfaces/_types_codec_.codec.md)*

*Defined in [packages/types/src/codec/Option.ts:98](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L98)*

**`description`** The actual value for the Option

**Returns:** *[Codec](../interfaces/_types_codec_.codec.md)*

## Methods

###  eq

▸ **eq**(`other?`: any): *boolean*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Overrides [Base](_codec_base_.base.md).[eq](_codec_base_.base.md#eq)*

*Defined in [packages/types/src/codec/Option.ts:105](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L105)*

**`description`** Compares the value of the input to see if there is a match

**Parameters:**

Name | Type |
------ | ------ |
`other?` | any |

**Returns:** *boolean*

___

###  toHex

▸ **toHex**(): *string*

*Overrides [Base](_codec_base_.base.md).[toHex](_codec_base_.base.md#tohex)*

*Defined in [packages/types/src/codec/Option.ts:116](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L116)*

**`description`** Returns a hex string representation of the value

**Returns:** *string*

___

###  toHuman

▸ **toHuman**(`isExtended?`: undefined | false | true): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toHuman](_codec_base_.base.md#tohuman)*

*Defined in [packages/types/src/codec/Base.ts:64](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Base.ts#L64)*

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

**Parameters:**

Name | Type |
------ | ------ |
`isExtended?` | undefined &#124; false &#124; true |

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toJSON

▸ **toJSON**(): *[AnyJson](../modules/_types_helpers_.md#anyjson)*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toJSON](_codec_base_.base.md#tojson)*

*Defined in [packages/types/src/codec/Base.ts:71](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Base.ts#L71)*

**`description`** Converts the Object to JSON, typically used for RPC transfers

**Returns:** *[AnyJson](../modules/_types_helpers_.md#anyjson)*

___

###  toRawType

▸ **toRawType**(`isBare?`: undefined | false | true): *string*

*Overrides [Base](_codec_base_.base.md).[toRawType](_codec_base_.base.md#torawtype)*

*Defined in [packages/types/src/codec/Option.ts:127](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L127)*

**`description`** Returns the base runtime type name for this instance

**Parameters:**

Name | Type |
------ | ------ |
`isBare?` | undefined &#124; false &#124; true |

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Codec](../interfaces/_types_codec_.codec.md)*

*Inherited from [Base](_codec_base_.base.md).[toString](_codec_base_.base.md#tostring)*

*Defined in [packages/types/src/codec/Base.ts:78](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Base.ts#L78)*

**`description`** Returns the string representation of the value

**Returns:** *string*

___

###  toU8a

▸ **toU8a**(`isBare?`: undefined | false | true): *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

*Overrides [Base](_codec_base_.base.md).[toU8a](_codec_base_.base.md#tou8a)*

*Defined in [packages/types/src/codec/Option.ts:139](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L139)*

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`isBare?` | undefined &#124; false &#124; true | true when the value has none of the type-specific prefixes (internal)  |

**Returns:** *[Uint8Array](_codec_raw_.raw.md#static-uint8array)*

___

###  unwrap

▸ **unwrap**(): *T*

*Defined in [packages/types/src/codec/Option.ts:157](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L157)*

**`description`** Returns the value that the Option represents (if available), throws if null

**Returns:** *T*

___

###  unwrapOr

▸ **unwrapOr**<**O**>(`defaultValue`: O): *T | O*

*Defined in [packages/types/src/codec/Option.ts:169](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L169)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`defaultValue` | O | The value to return if the option isNone  |

**Returns:** *T | O*

___

###  unwrapOrDefault

▸ **unwrapOrDefault**(): *T*

*Defined in [packages/types/src/codec/Option.ts:179](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L179)*

**`description`** Returns the value that the Option represents (if available) or defaultValue if none

**Returns:** *T*

___

### `Static` with

▸ **with**<**O**>(`Type`: [Constructor](../interfaces/_types_codec_.constructor.md)‹O› | keyof InterfaceTypes): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Option](_codec_option_.option.md)‹O››*

*Defined in [packages/types/src/codec/Option.ts:58](https://github.com/polkadot-js/api/blob/c3c77ffe4/packages/types/src/codec/Option.ts#L58)*

**Type parameters:**

▪ **O**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`Type` | [Constructor](../interfaces/_types_codec_.constructor.md)‹O› &#124; keyof InterfaceTypes |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[Option](_codec_option_.option.md)‹O››*
