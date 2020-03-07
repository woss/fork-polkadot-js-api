[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["codec/utils/mapToTypeMap"](_codec_utils_maptotypemap_.md)

# External module: "codec/utils/mapToTypeMap"

## Index

### Functions

* [mapToTypeMap](_codec_utils_maptotypemap_.md#maptotypemap)

## Functions

###  mapToTypeMap

▸ **mapToTypeMap**(`registry`: [Registry](../interfaces/_types_registry_.registry.md), `input`: Record‹string, keyof InterfaceTypes | [Constructor](../interfaces/_types_codec_.constructor.md)›): *Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›*

*Defined in [packages/types/src/codec/utils/mapToTypeMap.ts:12](https://github.com/polkadot-js/api/blob/6bb421dac/packages/types/src/codec/utils/mapToTypeMap.ts#L12)*

**`description`** takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`

**Parameters:**

Name | Type |
------ | ------ |
`registry` | [Registry](../interfaces/_types_registry_.registry.md) |
`input` | Record‹string, keyof InterfaceTypes &#124; [Constructor](../interfaces/_types_codec_.constructor.md)› |

**Returns:** *Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›*
