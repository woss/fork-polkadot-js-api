import { EventRecord, H256, SignedBlock } from '@polkadot/types/interfaces';
export default function filterEvents(extHash: H256, { block: { extrinsics, header } }: SignedBlock, allEvents: EventRecord[]): EventRecord[] | undefined;
