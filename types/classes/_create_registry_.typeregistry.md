[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/registry"](../modules/_create_registry_.md) › [TypeRegistry](_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_types_registry_.registry.md)

## Index

### Constructors

* [constructor](_create_registry_.typeregistry.md#constructor)

### Properties

* [#chainProperties](_create_registry_.typeregistry.md#optional-#chainproperties)
* [#classes](_create_registry_.typeregistry.md##classes)
* [#definitions](_create_registry_.typeregistry.md##definitions)
* [#metadataCalls](_create_registry_.typeregistry.md##metadatacalls)
* [#metadataErrors](_create_registry_.typeregistry.md##metadataerrors)
* [#metadataEvents](_create_registry_.typeregistry.md##metadataevents)
* [#metadataExtensions](_create_registry_.typeregistry.md##metadataextensions)
* [#unknownTypes](_create_registry_.typeregistry.md##unknowntypes)

### Accessors

* [chainDecimals](_create_registry_.typeregistry.md#chaindecimals)
* [chainSS58](_create_registry_.typeregistry.md#chainss58)
* [chainToken](_create_registry_.typeregistry.md#chaintoken)

### Methods

* [createClass](_create_registry_.typeregistry.md#createclass)
* [createType](_create_registry_.typeregistry.md#createtype)
* [findMetaCall](_create_registry_.typeregistry.md#findmetacall)
* [findMetaError](_create_registry_.typeregistry.md#findmetaerror)
* [findMetaEvent](_create_registry_.typeregistry.md#findmetaevent)
* [get](_create_registry_.typeregistry.md#get)
* [getChainProperties](_create_registry_.typeregistry.md#getchainproperties)
* [getDefinition](_create_registry_.typeregistry.md#getdefinition)
* [getOrThrow](_create_registry_.typeregistry.md#getorthrow)
* [getOrUnknown](_create_registry_.typeregistry.md#getorunknown)
* [getSignedExtensionExtra](_create_registry_.typeregistry.md#getsignedextensionextra)
* [getSignedExtensionTypes](_create_registry_.typeregistry.md#getsignedextensiontypes)
* [hasClass](_create_registry_.typeregistry.md#hasclass)
* [hasDef](_create_registry_.typeregistry.md#hasdef)
* [hasType](_create_registry_.typeregistry.md#hastype)
* [register](_create_registry_.typeregistry.md#register)
* [setChainProperties](_create_registry_.typeregistry.md#setchainproperties)
* [setMetadata](_create_registry_.typeregistry.md#setmetadata)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/create/registry.ts:95](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L95)*

**Returns:** *[TypeRegistry](_create_registry_.typeregistry.md)*

## Properties

### `Optional` #chainProperties

• **#chainProperties**? : *ChainProperties*

*Defined in [packages/types/src/create/registry.ts:93](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L93)*

___

###  #classes

• **#classes**: *[Map](_codec_struct_.struct.md#static-map)‹string, [Constructor](../interfaces/_types_codec_.constructor.md)›* = new Map()

*Defined in [packages/types/src/create/registry.ts:81](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L81)*

___

###  #definitions

• **#definitions**: *[Map](_codec_struct_.struct.md#static-map)‹string, string›* = new Map()

*Defined in [packages/types/src/create/registry.ts:83](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L83)*

___

###  #metadataCalls

• **#metadataCalls**: *Record‹string, [CallFunction](../interfaces/_types_calls_.callfunction.md)›*

*Defined in [packages/types/src/create/registry.ts:85](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L85)*

___

###  #metadataErrors

• **#metadataErrors**: *Record‹string, [RegistryError](../interfaces/_types_registry_.registryerror.md)›*

*Defined in [packages/types/src/create/registry.ts:87](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L87)*

___

###  #metadataEvents

• **#metadataEvents**: *Record‹string, [Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_generic_event_.eventdata.md)››*

*Defined in [packages/types/src/create/registry.ts:89](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L89)*

___

###  #metadataExtensions

• **#metadataExtensions**: *string[]* = defaultExtensions

*Defined in [packages/types/src/create/registry.ts:95](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L95)*

___

###  #unknownTypes

• **#unknownTypes**: *[Map](_codec_struct_.struct.md#static-map)‹string, boolean›* = new Map()

*Defined in [packages/types/src/create/registry.ts:91](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L91)*

## Accessors

###  chainDecimals

• **get chainDecimals**(): *number*

*Defined in [packages/types/src/create/registry.ts:113](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L113)*

**Returns:** *number*

___

###  chainSS58

• **get chainSS58**(): *number | undefined*

*Defined in [packages/types/src/create/registry.ts:119](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L119)*

**Returns:** *number | undefined*

___

###  chainToken

• **get chainToken**(): *string*

*Defined in [packages/types/src/create/registry.ts:125](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L125)*

**Returns:** *string*

## Methods

###  createClass

▸ **createClass**<**K**>(`type`: K): *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceTypes[K]›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:134](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L134)*

**`describe`** Creates an instance of the class

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceTypes[K]›*

___

###  createType

▸ **createType**<**K**>(`type`: K, ...`params`: any[]): *InterfaceTypes[K]*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:141](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L141)*

**`description`** Creates an instance of a type as registered

**Type parameters:**

▪ **K**: *keyof InterfaceTypes*

**Parameters:**

Name | Type |
------ | ------ |
`type` | K |
`...params` | any[] |

**Returns:** *InterfaceTypes[K]*

___

###  findMetaCall

▸ **findMetaCall**(`callIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[CallFunction](../interfaces/_types_calls_.callfunction.md)*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:146](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](../interfaces/_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | DispatchErrorModule): *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

*Defined in [packages/types/src/create/registry.ts:156](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; DispatchErrorModule |

**Returns:** *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:169](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L169)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:178](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L178)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`withUnknown?` | undefined &#124; false &#124; true |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T› | undefined*

___

###  getChainProperties

▸ **getChainProperties**(): *ChainProperties | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:209](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L209)*

**Returns:** *ChainProperties | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:213](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L213)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:217](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L217)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`msg?` | undefined &#124; string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

___

###  getOrUnknown

▸ **getOrUnknown**<**T**>(`name`: string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:227](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L227)*

**Type parameters:**

▪ **T**: *[Codec](../interfaces/_types_codec_.codec.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

___

###  getSignedExtensionExtra

▸ **getSignedExtensionExtra**(): *Record‹string, keyof InterfaceTypes›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:231](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L231)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, keyof InterfaceTypes›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:235](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L235)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:239](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L239)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:243](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:247](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L247)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:251](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L251)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_codec_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:254](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`type` | [Constructor](../interfaces/_types_codec_.constructor.md) |

**Returns:** *void*

___

###  setChainProperties

▸ **setChainProperties**(`properties?`: ChainProperties): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:291](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L291)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | ChainProperties |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:298](https://github.com/polkadot-js/api/blob/bc2b0d513/packages/types/src/create/registry.ts#L298)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md) |

**Returns:** *void*
