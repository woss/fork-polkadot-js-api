[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["promise/Combinator"](../modules/_promise_combinator_.md) › [Combinator](_promise_combinator_.combinator.md)

# Class: Combinator

## Hierarchy

* **Combinator**

## Index

### Constructors

* [constructor](_promise_combinator_.combinator.md#constructor)

### Properties

* [#allHasFired](_promise_combinator_.combinator.md##allhasfired)
* [#callback](_promise_combinator_.combinator.md##callback)
* [#fired](_promise_combinator_.combinator.md##fired)
* [#fns](_promise_combinator_.combinator.md##fns)
* [#isActive](_promise_combinator_.combinator.md##isactive)
* [#results](_promise_combinator_.combinator.md##results)
* [#subscriptions](_promise_combinator_.combinator.md##subscriptions)

### Methods

* [unsubscribe](_promise_combinator_.combinator.md#unsubscribe)

## Constructors

###  constructor

\+ **new Combinator**(`fns`: [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) | [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][], `callback`: [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)): *[Combinator](_promise_combinator_.combinator.md)*

*Defined in [api/src/promise/Combinator.ts:28](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`fns` | [CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md) &#124; [[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md), any][] |
`callback` | [CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback) |

**Returns:** *[Combinator](_promise_combinator_.combinator.md)*

## Properties

###  #allHasFired

• **#allHasFired**: *boolean* = false

*Defined in [api/src/promise/Combinator.ts:16](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L16)*

___

###  #callback

• **#callback**: *[CombinatorCallback](../modules/_promise_combinator_.md#combinatorcallback)*

*Defined in [api/src/promise/Combinator.ts:18](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L18)*

___

###  #fired

• **#fired**: *boolean[]* = []

*Defined in [api/src/promise/Combinator.ts:20](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L20)*

___

###  #fns

• **#fns**: *[CombinatorFunction](../interfaces/_promise_combinator_.combinatorfunction.md)[]* = []

*Defined in [api/src/promise/Combinator.ts:22](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L22)*

___

###  #isActive

• **#isActive**: *boolean* = true

*Defined in [api/src/promise/Combinator.ts:24](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L24)*

___

###  #results

• **#results**: *any[]* = []

*Defined in [api/src/promise/Combinator.ts:26](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L26)*

___

###  #subscriptions

• **#subscriptions**: *[UnsubscribePromise](../modules/_types_base_.md#unsubscribepromise)[]* = []

*Defined in [api/src/promise/Combinator.ts:28](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L28)*

## Methods

###  unsubscribe

▸ **unsubscribe**(): *void*

*Defined in [api/src/promise/Combinator.ts:76](https://github.com/polkadot-js/api/blob/62f46359e/packages/api/src/promise/Combinator.ts#L76)*

**Returns:** *void*
