[Polkadot JS API](../README.md) › [Globals](../globals.md) › ["known/overrides"](_known_overrides_.md)

# Module: "known/overrides"

## Index

### Variables

* [TYPES_CHAIN](_known_overrides_.md#const-types_chain)
* [TYPES_META](_known_overrides_.md#const-types_meta)

### Object literals

* [TYPES_MODULES](_known_overrides_.md#const-types_modules)
* [TYPES_SPEC](_known_overrides_.md#const-types_spec)

## Variables

### `Const` TYPES_CHAIN

• **TYPES_CHAIN**: *Record‹string, OverrideVersionedType[]›*

*Defined in [packages/types/src/known/overrides.ts:132](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L132)*

___

### `Const` TYPES_META

• **TYPES_META**: *OverrideVersionedType[]* = [
  {
    // NOTE this is for support of old, e.g. Alex, old metadata and BlockNumber/Index
    // This is detected based on metadata version, since this is what we have up-front
    //   v3 = Alex
    //   v4 = v1.0 branch
    minmax: [0, 4],
    types: {
      Address: 'GenericAddress',
      BlockNumber: 'u64',
      Index: 'u64',
      EventRecord: 'EventRecordTo76',
      ValidatorPrefs: 'ValidatorPrefsTo145',
      StakingLedger: 'StakingLedgerTo223'
    }
  }
]

*Defined in [packages/types/src/known/overrides.ts:135](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L135)*

## Object literals

### `Const` TYPES_MODULES

### ▪ **TYPES_MODULES**: *object*

*Defined in [packages/types/src/known/overrides.ts:8](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L8)*

▪ **balances**: *object*

*Defined in [packages/types/src/known/overrides.ts:15](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L15)*

* **Releases**: *string* = "ReleasesBalances"

▪ **contract**: *object*

*Defined in [packages/types/src/known/overrides.ts:10](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L10)*

* **AccountInfo**: *string* = "ContractAccountInfo"

▪ **contracts**: *object*

*Defined in [packages/types/src/known/overrides.ts:18](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L18)*

* **StorageKey**: *string* = "ContractStorageKey"

▪ **identity**: *object*

*Defined in [packages/types/src/known/overrides.ts:21](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L21)*

* **Judgement**: *string* = "IdentityJudgement"

▪ **parachains**: *object*

*Defined in [packages/types/src/known/overrides.ts:24](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L24)*

* **Id**: *string* = "ParaId"

▪ **society**: *object*

*Defined in [packages/types/src/known/overrides.ts:27](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L27)*

* **Judgement**: *string* = "SocietyJudgement"

* **Vote**: *string* = "SocietyVote"

▪ **staking**: *object*

*Defined in [packages/types/src/known/overrides.ts:31](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L31)*

* **Compact**: *string* = "CompactAssignments"

* **Releases**: *string* = "ReleasesStaking"

▪ **treasury**: *object*

*Defined in [packages/types/src/known/overrides.ts:35](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L35)*

* **Proposal**: *string* = "TreasuryProposal"

___

### `Const` TYPES_SPEC

### ▪ **TYPES_SPEC**: *object*

*Defined in [packages/types/src/known/overrides.ts:154](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L154)*

###  kusama

• **kusama**: *OverrideVersionedType[]* = TYPES_KUSAMA_VERSIONED

*Defined in [packages/types/src/known/overrides.ts:155](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L155)*

###  polkadot

• **polkadot**: *OverrideVersionedType[]* = TYPES_POLKADOT_VERSIONED

*Defined in [packages/types/src/known/overrides.ts:156](https://github.com/polkadot-js/api/blob/64f64c1001/packages/types/src/known/overrides.ts#L156)*
