[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["create/registry"](../modules/_create_registry_.md) › [TypeRegistry](_create_registry_.typeregistry.md)

# Class: TypeRegistry

## Hierarchy

* **TypeRegistry**

## Implements

* [Registry](../interfaces/_types_registry_.registry.md)

## Index

### Constructors

* [constructor](_create_registry_.typeregistry.md#constructor)

### Accessors

* [chainDecimals](_create_registry_.typeregistry.md#chaindecimals)
* [chainSS58](_create_registry_.typeregistry.md#chainss58)
* [chainToken](_create_registry_.typeregistry.md#chaintoken)
* [knownTypes](_create_registry_.typeregistry.md#knowntypes)

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
* [setKnownTypes](_create_registry_.typeregistry.md#setknowntypes)
* [setMetadata](_create_registry_.typeregistry.md#setmetadata)

## Constructors

###  constructor

\+ **new TypeRegistry**(): *[TypeRegistry](_create_registry_.typeregistry.md)*

*Defined in [packages/types/src/create/registry.ts:98](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L98)*

**Returns:** *[TypeRegistry](_create_registry_.typeregistry.md)*

## Accessors

###  chainDecimals

• **get chainDecimals**(): *number*

*Defined in [packages/types/src/create/registry.ts:116](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L116)*

**Returns:** *number*

___

###  chainSS58

• **get chainSS58**(): *number | undefined*

*Defined in [packages/types/src/create/registry.ts:122](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L122)*

**Returns:** *number | undefined*

___

###  chainToken

• **get chainToken**(): *string*

*Defined in [packages/types/src/create/registry.ts:128](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L128)*

**Returns:** *string*

___

###  knownTypes

• **get knownTypes**(): *[RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md)*

*Defined in [packages/types/src/create/registry.ts:134](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L134)*

**Returns:** *[RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md)*

## Methods

###  createClass

▸ **createClass**<**K**>(`type`: K): *[Constructor](../interfaces/_types_codec_.constructor.md)‹InterfaceTypes[K]›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:141](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L141)*

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

*Defined in [packages/types/src/create/registry.ts:148](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L148)*

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

*Defined in [packages/types/src/create/registry.ts:153](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`callIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[CallFunction](../interfaces/_types_calls_.callfunction.md)*

___

###  findMetaError

▸ **findMetaError**(`errorIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array) | DispatchErrorModule): *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

*Defined in [packages/types/src/create/registry.ts:163](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`errorIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) &#124; DispatchErrorModule |

**Returns:** *[RegistryError](../interfaces/_types_registry_.registryerror.md)*

___

###  findMetaEvent

▸ **findMetaEvent**(`eventIndex`: [Uint8Array](_codec_raw_.raw.md#static-uint8array)): *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_generic_event_.eventdata.md)›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:176](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L176)*

**Parameters:**

Name | Type |
------ | ------ |
`eventIndex` | [Uint8Array](_codec_raw_.raw.md#static-uint8array) |

**Returns:** *[Constructor](../interfaces/_types_codec_.constructor.md)‹[EventData](_generic_event_.eventdata.md)›*

___

###  get

▸ **get**<**T**>(`name`: string, `withUnknown?`: undefined | false | true): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T› | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:185](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L185)*

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

*Defined in [packages/types/src/create/registry.ts:216](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L216)*

**Returns:** *ChainProperties | undefined*

___

###  getDefinition

▸ **getDefinition**(`name`: string): *string | undefined*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:220](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string | undefined*

___

###  getOrThrow

▸ **getOrThrow**<**T**>(`name`: string, `msg?`: undefined | string): *[Constructor](../interfaces/_types_codec_.constructor.md)‹T›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:224](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L224)*

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

*Defined in [packages/types/src/create/registry.ts:234](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L234)*

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

*Defined in [packages/types/src/create/registry.ts:238](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L238)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  getSignedExtensionTypes

▸ **getSignedExtensionTypes**(): *Record‹string, keyof InterfaceTypes›*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:242](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L242)*

**Returns:** *Record‹string, keyof InterfaceTypes›*

___

###  hasClass

▸ **hasClass**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:246](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasDef

▸ **hasDef**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:250](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hasType

▸ **hasType**(`name`: string): *boolean*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:254](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  register

▸ **register**(`type`: [Constructor](../interfaces/_types_codec_.constructor.md) | [RegistryTypes](../modules/_types_registry_.md#registrytypes)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:258](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [Constructor](../interfaces/_types_codec_.constructor.md) &#124; [RegistryTypes](../modules/_types_registry_.md#registrytypes) |

**Returns:** *void*

▸ **register**(`name`: string, `type`: [Constructor](../interfaces/_types_codec_.constructor.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:261](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L261)*

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

*Defined in [packages/types/src/create/registry.ts:298](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L298)*

**Parameters:**

Name | Type |
------ | ------ |
`properties?` | ChainProperties |

**Returns:** *void*

___

###  setKnownTypes

▸ **setKnownTypes**(`knownTypes`: [RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:304](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L304)*

**Parameters:**

Name | Type |
------ | ------ |
`knownTypes` | [RegisteredTypes](../interfaces/_types_registry_.registeredtypes.md) |

**Returns:** *void*

___

###  setMetadata

▸ **setMetadata**(`metadata`: [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md)): *void*

*Implementation of [Registry](../interfaces/_types_registry_.registry.md)*

*Defined in [packages/types/src/create/registry.ts:309](https://github.com/polkadot-js/api/blob/d80d6f2a06/packages/types/src/create/registry.ts#L309)*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [RegistryMetadata](../interfaces/_types_registry_.registrymetadata.md) |

**Returns:** *void*
