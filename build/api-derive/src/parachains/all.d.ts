import { DeriveParachain } from '../types';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
export declare function all(api: ApiInterfaceRx): () => Observable<DeriveParachain[]>;
