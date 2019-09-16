import { assert, should } from 'chai';
import didJWT, { verify } from '../src';

describe('Functions Tests', () => {
  it('should test the verify function', () => {
    assert.typeOf(verify, 'object', 'Verify Exists');
  });
});
