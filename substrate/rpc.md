## JSON-RPC

The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit.

- **[account](#account)**

- **[author](#author)**

- **[babe](#babe)**

- **[chain](#chain)**

- **[contracts](#contracts)**

- **[engine](#engine)**

- **[offchain](#offchain)**

- **[payment](#payment)**

- **[rpc](#rpc)**

- **[state](#state)**

- **[system](#system)**


___


## account
 
### nextIndex(accountId: `AccountId`): `Index`
- **jsonrpc**: `account_nextIndex`
- **interface**: `api.rpc.account.nextIndex`
- **summary**: Retrieves the next accountIndex as available on the node

___


## author
 
### hasKey(publicKey: `Bytes`, keyType: `Text`): `bool`
- **jsonrpc**: `author_hasKey`
- **interface**: `api.rpc.author.hasKey`
- **summary**: Returns true if the keystore has private keys for the given public key and key type.
 
### hasSessionKeys(sessionKeys: `Bytes`): `bool`
- **jsonrpc**: `author_hasSessionKeys`
- **interface**: `api.rpc.author.hasSessionKeys`
- **summary**: Returns true if the keystore has private keys for the given session public keys.
 
### insertKey(keyType: `Text`, suri: `Text`, publicKey: `Bytes`): `Bytes`
- **jsonrpc**: `author_insertKey`
- **interface**: `api.rpc.author.insertKey`
- **summary**: Insert a key into the keystore.
 
### pendingExtrinsics(): `Vec<Extrinsic>`
- **jsonrpc**: `author_pendingExtrinsics`
- **interface**: `api.rpc.author.pendingExtrinsics`
- **summary**: Returns all pending extrinsics, potentially grouped by sender
 
### removeExtrinsic(bytesOrHash: `Vec<ExtrinsicOrHash>`): `Vec<Hash>`
- **jsonrpc**: `author_removeExtrinsic`
- **interface**: `api.rpc.author.removeExtrinsic`
- **summary**: Remove given extrinsic from the pool and temporarily ban it to prevent reimporting
 
### rotateKeys(): `Bytes`
- **jsonrpc**: `author_rotateKeys`
- **interface**: `api.rpc.author.rotateKeys`
- **summary**: Generate new session keys and returns the corresponding public keys
 
### submitAndWatchExtrinsic(extrinsic: `Extrinsic`): `ExtrinsicStatus`
- **jsonrpc**: `author_submitAndWatchExtrinsic`
- **interface**: `api.rpc.author.submitAndWatchExtrinsic`
- **summary**: Submit and subscribe to watch an extrinsic until unsubscribed
 
### submitExtrinsic(extrinsic: `Extrinsic`): `Hash`
- **jsonrpc**: `author_submitExtrinsic`
- **interface**: `api.rpc.author.submitExtrinsic`
- **summary**: Submit a fully formatted extrinsic for block inclusion

___


## babe
 
### epochAuthorship(): `HashMap<AuthorityId, EpochAuthorship>`
- **jsonrpc**: `babe_epochAuthorship`
- **interface**: `api.rpc.babe.epochAuthorship`
- **summary**: Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore

___


## chain
 
### getBlock(hash?: `BlockHash`): `SignedBlock`
- **jsonrpc**: `chain_getBlock`
- **interface**: `api.rpc.chain.getBlock`
- **summary**: Get header and body of a relay chain block
 
### getBlockHash(blockNumber?: `BlockNumber`): `BlockHash`
- **jsonrpc**: `chain_getBlockHash`
- **interface**: `api.rpc.chain.getBlockHash`
- **summary**: Get the block hash for a specific block
 
### getFinalizedHead(): `BlockHash`
- **jsonrpc**: `chain_getFinalizedHead`
- **interface**: `api.rpc.chain.getFinalizedHead`
- **summary**: Get hash of the last finalized block in the canon chain
 
### getHeader(hash?: `BlockHash`): `Header`
- **jsonrpc**: `chain_getHeader`
- **interface**: `api.rpc.chain.getHeader`
- **summary**: Retrieves the header for a specific block
 
### subscribeAllHeads(): `Header`
- **jsonrpc**: `chain_subscribeAllHeads`
- **interface**: `api.rpc.chain.subscribeAllHeads`
- **summary**: Retrieves the newest header via subscription
 
### subscribeFinalizedHeads(): `Header`
- **jsonrpc**: `chain_subscribeFinalizedHeads`
- **interface**: `api.rpc.chain.subscribeFinalizedHeads`
- **summary**: Retrieves the best finalized header via subscription
 
### subscribeNewHeads(): `Header`
- **jsonrpc**: `chain_subscribeNewHeads`
- **interface**: `api.rpc.chain.subscribeNewHeads`
- **summary**: Retrieves the best header via subscription

___


## contracts
 
### call(callRequest: `ContractCallRequest`, at?: `BlockHash`): `ContractExecResult`
- **jsonrpc**: `contracts_call`
- **interface**: `api.rpc.contracts.call`
- **summary**: Executes a call to a contract
 
### getStorage(address: `AccountId`, key: `H256`, at?: `BlockHash`): `Option<Bytes>`
- **jsonrpc**: `contracts_getStorage`
- **interface**: `api.rpc.contracts.getStorage`
- **summary**: Returns the value under a specified storage key in a contract
 
### rentProjection(address: `AccountId`, at?: `BlockHash`): `Option<BlockNumber>`
- **jsonrpc**: `contracts_rentProjection`
- **interface**: `api.rpc.contracts.rentProjection`
- **summary**: Returns the projected time a given contract will be able to sustain paying its rent

___


## engine
 
### createBlock(createEmpty: `bool`, finalize: `bool`, parentHash?: `BlockHash`): `CreatedBlock`
- **jsonrpc**: `engine_createBlock`
- **interface**: `api.rpc.engine.createBlock`
- **summary**: Instructs the manual-seal authorship task to create a new block
 
### finalizeBlock(hash: `BlockHash`, justification?: `Justification`): `bool`
- **jsonrpc**: `engine_finalizeBlock`
- **interface**: `api.rpc.engine.finalizeBlock`
- **summary**: Instructs the manual-seal authorship task to finalize a block

___


## offchain
 
### localStorageGet(kind: `StorageKind`, key: `Bytes`): `Option<Bytes>`
- **jsonrpc**: `offchain_localStorageGet`
- **interface**: `api.rpc.offchain.localStorageGet`
- **summary**: Get offchain local storage under given key and prefix
 
### localStorageSet(kind: `StorageKind`, key: `Bytes`, value: `Bytes`): `Null`
- **jsonrpc**: `offchain_localStorageSet`
- **interface**: `api.rpc.offchain.localStorageSet`
- **summary**: Set offchain local storage under given key and prefix

___


## payment
 
### queryInfo(extrinsic: `Bytes`, at?: `BlockHash`): `RuntimeDispatchInfo`
- **jsonrpc**: `payment_queryInfo`
- **interface**: `api.rpc.payment.queryInfo`
- **summary**: Retrieves the fee information for an encoded extrinsic

___


## rpc
 
### methods(): `RpcMethods`
- **jsonrpc**: `rpc_methods`
- **interface**: `api.rpc.rpc.methods`
- **summary**: Retrieves the list of RPC methods that are exposed by the node

___


## state
 
### call(method: `Text`, data: `Bytes`, at?: `BlockHash`): `Bytes`
- **jsonrpc**: `state_call`
- **interface**: `api.rpc.state.call`
- **summary**: Perform a call to a builtin on the chain
 
### getChildKeys(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **jsonrpc**: `state_getChildKeys`
- **interface**: `api.rpc.state.getChildKeys`
- **summary**: Retrieves the keys with prefix of a specific child storage
 
### getChildStorage(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `StorageData`
- **jsonrpc**: `state_getChildStorage`
- **interface**: `api.rpc.state.getChildStorage`
- **summary**: Retrieves the child storage for a key
 
### getChildStorageHash(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `Hash`
- **jsonrpc**: `state_getChildStorageHash`
- **interface**: `api.rpc.state.getChildStorageHash`
- **summary**: Retrieves the child storage hash
 
### getChildStorageSize(childStorageKey: `StorageKey`, childDefinition: `StorageKey`, childType: `u32`, key: `StorageKey`, at?: `BlockHash`): `u64`
- **jsonrpc**: `state_getChildStorageSize`
- **interface**: `api.rpc.state.getChildStorageSize`
- **summary**: Retrieves the child storage size
 
### getKeys(key: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **jsonrpc**: `state_getKeys`
- **interface**: `api.rpc.state.getKeys`
- **summary**: Retrieves the keys with a certain prefix
 
### getKeysPaged(key: `StorageKey`, count: `u32`, startKey?: `StorageKey`, at?: `BlockHash`): `Vec<StorageKey>`
- **jsonrpc**: `state_getKeysPaged`
- **interface**: `api.rpc.state.getKeysPaged`
- **summary**: Returns the keys with prefix with pagination support.
 
### getMetadata(at?: `BlockHash`): `Metadata`
- **jsonrpc**: `state_getMetadata`
- **interface**: `api.rpc.state.getMetadata`
- **summary**: Returns the runtime metadata
 
### getPairs(prefix: `StorageKey`, at?: `BlockHash`): `Vec<KeyValue>`
- **jsonrpc**: `state_getPairs`
- **interface**: `api.rpc.state.getPairs`
- **summary**: Returns the keys with prefix, leave empty to get all the keys
 
### getRuntimeVersion(at?: `BlockHash`): `RuntimeVersion`
- **jsonrpc**: `state_getRuntimeVersion`
- **interface**: `api.rpc.state.getRuntimeVersion`
- **summary**: Get the runtime version
 
### getStorage(key: `StorageKey`, at?: `BlockHash`): `StorageData`
- **jsonrpc**: `state_getStorage`
- **interface**: `api.rpc.state.getStorage`
- **summary**: Retrieves the storage for a key
 
### getStorageHash(key: `StorageKey`, at?: `BlockHash`): `Hash`
- **jsonrpc**: `state_getStorageHash`
- **interface**: `api.rpc.state.getStorageHash`
- **summary**: Retrieves the storage hash
 
### getStorageSize(key: `StorageKey`, at?: `BlockHash`): `u64`
- **jsonrpc**: `state_getStorageSize`
- **interface**: `api.rpc.state.getStorageSize`
- **summary**: Retrieves the storage size
 
### queryStorage(keys: `Vec<StorageKey>`, fromBlock: `Hash`, toBlock?: `BlockHash`): `Vec<StorageChangeSet>`
- **jsonrpc**: `state_queryStorage`
- **interface**: `api.rpc.state.queryStorage`
- **summary**: Query historical storage entries (by key) starting from a start block
 
### queryStorageAt(keys: `Vec<StorageKey>`, at?: `BlockHash`): `Vec<StorageChangeSet>`
- **jsonrpc**: `state_queryStorageAt`
- **interface**: `api.rpc.state.queryStorageAt`
- **summary**: Query storage entries (by key) starting at block hash given as the second parameter
 
### subscribeRuntimeVersion(): `RuntimeVersion`
- **jsonrpc**: `state_subscribeRuntimeVersion`
- **interface**: `api.rpc.state.subscribeRuntimeVersion`
- **summary**: Retrieves the runtime version via subscription
 
### subscribeStorage(keys: `Vec<StorageKey>`): `StorageChangeSet`
- **jsonrpc**: `state_subscribeStorage`
- **interface**: `api.rpc.state.subscribeStorage`
- **summary**: Subscribes to storage changes for the provided keys

___


## system
 
### addReservedPeer(peer: `Text`): `Text`
- **jsonrpc**: `system_addReservedPeer`
- **interface**: `api.rpc.system.addReservedPeer`
- **summary**: Adds a reserved peer
 
### chain(): `Text`
- **jsonrpc**: `system_chain`
- **interface**: `api.rpc.system.chain`
- **summary**: Retrieves the chain
 
### health(): `Health`
- **jsonrpc**: `system_health`
- **interface**: `api.rpc.system.health`
- **summary**: Return health status of the node
 
### name(): `Text`
- **jsonrpc**: `system_name`
- **interface**: `api.rpc.system.name`
- **summary**: Retrieves the node name
 
### networkState(): `NetworkState`
- **jsonrpc**: `system_networkState`
- **interface**: `api.rpc.system.networkState`
- **summary**: Returns current state of the network
 
### nodeRoles(): `Vec<NodeRole>`
- **jsonrpc**: `system_nodeRoles`
- **interface**: `api.rpc.system.nodeRoles`
- **summary**: Returns the roles the node is running as
 
### peers(): `Vec<PeerInfo>`
- **jsonrpc**: `system_peers`
- **interface**: `api.rpc.system.peers`
- **summary**: Returns the currently connected peers
 
### properties(): `ChainProperties`
- **jsonrpc**: `system_properties`
- **interface**: `api.rpc.system.properties`
- **summary**: Get a custom set of properties as a JSON object, defined in the chain spec
 
### removeReservedPeer(peerId: `Text`): `Text`
- **jsonrpc**: `system_removeReservedPeer`
- **interface**: `api.rpc.system.removeReservedPeer`
- **summary**: Remove a reserved peer
 
### version(): `Text`
- **jsonrpc**: `system_version`
- **interface**: `api.rpc.system.version`
- **summary**: Retrieves the version of the node
