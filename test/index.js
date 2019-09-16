import { assert } from 'chai';
import { Resolver } from 'did-resolver'
import { verify } from '../src';

describe('Functions Tests', () => {
  it('should test the verify function', () => {
    assert.typeOf(verify, 'function', 'Verify Exists');
  });
  it('should test the DIDResolver functions', () => {
    assert.typeOf(Resolver, 'function', 'Constructor');
  });
});
