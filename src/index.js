
import didJWT from 'did-jwt';
import httpsResolver from 'https-did-resolver';
import muportResolver from 'muport-did-resolver'

httpsResolver();
muportResolver();

const defaultAwesomeFunction = (name) => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

const verify = async (jwt) => {
  const proof = await didJWT.verifyJWT(jwt);
  console.log(proof);
  return proof;
};

export default didJWT;

export { verify };
