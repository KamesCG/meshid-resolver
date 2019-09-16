
import didJWT from 'did-jwt';
import { Resolver } from 'did-resolver'
import WebResolverConfig from 'web-did-resolver'
import ethr from 'ethr-did-resolver'

const resolver = new Resolver({
  ethr,
  https: WebResolverConfig().web
})

const defaultOptions = {
  resolver
}

const create = async (claim, signer) => didJWT.create(claim, signer)
const signer = async key => didJWT.SimpleSigner(key)
const verify = async (jwt, options) => didJWT.verifyJWT(jwt, { ...defaultOptions, ...options })

export default didJWT;

export { create, signer, verify };
