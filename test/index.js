import { assert } from 'chai';
import { verify } from '../src';

describe('Functions Tests', () => {
  it('should test the verify function', () => {
    assert.typeOf(verify, 'function', 'Verify Exists');
  });
});
