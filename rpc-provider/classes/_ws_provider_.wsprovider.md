[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["ws/Provider"](../modules/_ws_provider_.md) › [WsProvider](_ws_provider_.wsprovider.md)

# Class: WsProvider

# @polkadot/rpc-provider/ws

**`name`** WsProvider

**`description`** The WebSocket Provider allows sending requests using WebSocket to a WebSocket RPC server TCP port. Unlike the [[HttpProvider]], it does support subscriptions and allows listening to events such as new blocks or balance changes.

**`example`** 
<BR>

```javascript
import Api from '@polkadot/api/promise';
import WsProvider from '@polkadot/rpc-provider/ws';

const provider = new WsProvider('ws://127.0.0.1:9944');
const api = new Api(provider);
```

**`see`** [[HttpProvider]]

## Hierarchy

* **WsProvider**

## Implements

* WSProviderInterface

## Index

### Constructors

* [constructor](_ws_provider_.wsprovider.md#constructor)

### Properties

* [#autoConnect](_ws_provider_.wsprovider.md##autoconnect)
* [#coder](_ws_provider_.wsprovider.md##coder)
* [#endpoint](_ws_provider_.wsprovider.md##endpoint)
* [#eventemitter](_ws_provider_.wsprovider.md##eventemitter)
* [#handlers](_ws_provider_.wsprovider.md##handlers)
* [#isConnected](_ws_provider_.wsprovider.md##isconnected)
* [#queued](_ws_provider_.wsprovider.md##queued)
* [#subscriptions](_ws_provider_.wsprovider.md##subscriptions)
* [#waitingForId](_ws_provider_.wsprovider.md##waitingforid)
* [#websocket](_ws_provider_.wsprovider.md##websocket)

### Accessors

* [hasSubscriptions](_ws_provider_.wsprovider.md#hassubscriptions)

### Methods

* [#emit](_ws_provider_.wsprovider.md##emit)
* [#onSocketClose](_ws_provider_.wsprovider.md##onsocketclose)
* [#onSocketError](_ws_provider_.wsprovider.md##onsocketerror)
* [#onSocketMessage](_ws_provider_.wsprovider.md##onsocketmessage)
* [#onSocketMessageResult](_ws_provider_.wsprovider.md##onsocketmessageresult)
* [#onSocketMessageSubscribe](_ws_provider_.wsprovider.md##onsocketmessagesubscribe)
* [#onSocketOpen](_ws_provider_.wsprovider.md##onsocketopen)
* [#resubscribe](_ws_provider_.wsprovider.md##resubscribe)
* [#sendQueue](_ws_provider_.wsprovider.md##sendqueue)
* [clone](_ws_provider_.wsprovider.md#clone)
* [connect](_ws_provider_.wsprovider.md#connect)
* [disconnect](_ws_provider_.wsprovider.md#disconnect)
* [isConnected](_ws_provider_.wsprovider.md#isconnected)
* [on](_ws_provider_.wsprovider.md#on)
* [send](_ws_provider_.wsprovider.md#send)
* [subscribe](_ws_provider_.wsprovider.md#subscribe)
* [unsubscribe](_ws_provider_.wsprovider.md#unsubscribe)

## Constructors

###  constructor

\+ **new WsProvider**(`endpoint`: string, `autoConnect`: boolean): *[WsProvider](_ws_provider_.wsprovider.md)*

*Defined in [ws/Provider.ts:83](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L83)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`endpoint` | string | defaults.WS_URL | The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944` |
`autoConnect` | boolean | true | Whether to connect automatically or not.  |

**Returns:** *[WsProvider](_ws_provider_.wsprovider.md)*

## Properties

###  #autoConnect

• **#autoConnect**: *boolean*

*Defined in [ws/Provider.ts:77](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L77)*

___

###  #coder

• **#coder**: *Coder*

*Defined in [ws/Provider.ts:65](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L65)*

___

###  #endpoint

• **#endpoint**: *string*

*Defined in [ws/Provider.ts:67](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L67)*

___

###  #eventemitter

• **#eventemitter**: *EventEmitter*

*Defined in [ws/Provider.ts:69](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L69)*

___

###  #handlers

• **#handlers**: *Record‹string, WsStateAwaiting›*

*Defined in [ws/Provider.ts:71](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L71)*

___

###  #isConnected

• **#isConnected**: *boolean* = false

*Defined in [ws/Provider.ts:79](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L79)*

___

###  #queued

• **#queued**: *Record‹string, string›*

*Defined in [ws/Provider.ts:73](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L73)*

___

###  #subscriptions

• **#subscriptions**: *Record‹string, WsStateSubscription›*

*Defined in [ws/Provider.ts:81](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L81)*

___

###  #waitingForId

• **#waitingForId**: *Record‹string, JsonRpcResponse›*

*Defined in [ws/Provider.ts:75](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L75)*

___

###  #websocket

• **#websocket**: *WebSocket | null*

*Defined in [ws/Provider.ts:83](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L83)*

## Accessors

###  hasSubscriptions

• **get hasSubscriptions**(): *boolean*

*Defined in [ws/Provider.ts:106](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L106)*

**`summary`** `true` when this provider supports subscriptions

**Returns:** *boolean*

## Methods

###  #emit

▸ **#emit**(`type`: ProviderInterfaceEmitted, ...`args`: any[]): *void*

*Defined in [ws/Provider.ts:263](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | ProviderInterfaceEmitted |
`...args` | any[] |

**Returns:** *void*

___

###  #onSocketClose

▸ **#onSocketClose**(`event`: CloseEvent): *void*

*Defined in [ws/Provider.ts:267](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | CloseEvent |

**Returns:** *void*

___

###  #onSocketError

▸ **#onSocketError**(`error`: Event): *void*

*Defined in [ws/Provider.ts:282](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L282)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Event |

**Returns:** *void*

___

###  #onSocketMessage

▸ **#onSocketMessage**(`message`: MessageEvent): *void*

*Defined in [ws/Provider.ts:287](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L287)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | MessageEvent |

**Returns:** *void*

___

###  #onSocketMessageResult

▸ **#onSocketMessageResult**(`response`: JsonRpcResponse): *void*

*Defined in [ws/Provider.ts:297](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L297)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | JsonRpcResponse |

**Returns:** *void*

___

###  #onSocketMessageSubscribe

▸ **#onSocketMessageSubscribe**(`response`: JsonRpcResponse): *void*

*Defined in [ws/Provider.ts:334](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L334)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | JsonRpcResponse |

**Returns:** *void*

___

###  #onSocketOpen

▸ **#onSocketOpen**(): *boolean*

*Defined in [ws/Provider.ts:359](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L359)*

**Returns:** *boolean*

___

###  #resubscribe

▸ **#resubscribe**(): *void*

*Defined in [ws/Provider.ts:373](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L373)*

**Returns:** *void*

___

###  #sendQueue

▸ **#sendQueue**(): *void*

*Defined in [ws/Provider.ts:397](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L397)*

**Returns:** *void*

___

###  clone

▸ **clone**(): *[WsProvider](_ws_provider_.wsprovider.md)*

*Defined in [ws/Provider.ts:113](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L113)*

**`description`** Returns a clone of the object

**Returns:** *[WsProvider](_ws_provider_.wsprovider.md)*

___

###  connect

▸ **connect**(): *Promise‹void›*

*Defined in [ws/Provider.ts:122](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L122)*

**`summary`** Manually connect

**`description`** The [WsProvider](_ws_provider_.wsprovider.md) connects automatically by default, however if you decided otherwise, you may
connect manually using this method.

**Returns:** *Promise‹void›*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [ws/Provider.ts:139](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L139)*

**`description`** Manually disconnect from the connection, clearing autoconnect logic

**Returns:** *void*

___

###  isConnected

▸ **isConnected**(): *boolean*

*Defined in [ws/Provider.ts:156](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L156)*

**`summary`** Whether the node is connected or not.

**Returns:** *boolean*

true if connected

___

###  on

▸ **on**(`type`: ProviderInterfaceEmitted, `sub`: ProviderInterfaceEmitCb): *function*

*Defined in [ws/Provider.ts:166](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L166)*

**`summary`** Listens on events after having subscribed using the [subscribe](_ws_provider_.wsprovider.md#subscribe) function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | ProviderInterfaceEmitted | Event |
`sub` | ProviderInterfaceEmitCb | Callback |

**Returns:** *function*

unsubscribe function

▸ (): *void*

___

###  send

▸ **send**(`method`: string, `params`: any[], `subscription?`: SubscriptionHandler): *Promise‹any›*

*Defined in [ws/Provider.ts:180](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L180)*

**`summary`** Send JSON data using WebSockets to configured HTTP Endpoint or queue.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`method` | string | The RPC methods to execute |
`params` | any[] | Encoded paramaters as appliucable for the method |
`subscription?` | SubscriptionHandler | Subscription details (internally used)  |

**Returns:** *Promise‹any›*

___

###  subscribe

▸ **subscribe**(`type`: string, `method`: string, `params`: any[], `callback`: ProviderInterfaceCallback): *Promise‹number›*

*Defined in [ws/Provider.ts:234](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L234)*

**`name`** subscribe

**`summary`** Allows subscribing to a specific event.

**`example`** 
<BR>

```javascript
const provider = new WsProvider('ws://127.0.0.1:9944');
const rpc = new Rpc(provider);

rpc.state.subscribeStorage([[storage.system.account, <Address>]], (_, values) => {
  console.log(values)
}).then((subscriptionId) => {
  console.log('balance changes subscription id: ', subscriptionId)
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | Subscription type |
`method` | string | Subscription method |
`params` | any[] | Parameters |
`callback` | ProviderInterfaceCallback | Callback |

**Returns:** *Promise‹number›*

Promise resolving to the dd of the subscription you can use with [unsubscribe](_ws_provider_.wsprovider.md#unsubscribe).

___

###  unsubscribe

▸ **unsubscribe**(`type`: string, `method`: string, `id`: number): *Promise‹boolean›*

*Defined in [ws/Provider.ts:243](https://github.com/polkadot-js/api/blob/dd217f82b2/packages/rpc-provider/src/ws/Provider.ts#L243)*

**`summary`** Allows unsubscribing to subscriptions made with [subscribe](_ws_provider_.wsprovider.md#subscribe).

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`method` | string |
`id` | number |

**Returns:** *Promise‹boolean›*
