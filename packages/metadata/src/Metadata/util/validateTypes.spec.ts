// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { extractTypes } from './validateTypes';

describe('extractTypes', (): void => {
  it('handles BTreeSet', (): void => {
    expect(extractTypes(['BTreeSet<u32>'])).toEqual([['u32']]);
  });

  it('handles HashMap', (): void => {
    expect(extractTypes(['HashMap<u32, u64>'])).toEqual([['u32', 'u64']]);
  });
});
