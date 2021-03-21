const cbor = require('cbor')
const cose = require('cose-js')
const pako = require('pako') // zlib
const base45 = require('base45')
const payload = require('./example.json')

const generate = async (payload, secret) => {
  const mappedPayload = cbor.encode(payload)
  const mac = await cose.mac.create({ p: { alg: 'SHA-256_64' } }, mappedPayload, { key: secret })
  const zipped = pako.deflate(String(mac))
  const encoded = base45.encode(zipped)
  return zipped
}

const decode = async (payload, secret) => {
  console.log('payload', payload)
  const decoded = base45.decode(payload)
  try {
    const unzipped = pako.inflate(payload, { to: 'string' })
    console.log('unzipped', unzipped.toString())
    const unmapped = cbor.decode(unzipped)
    console.log('unmapped', unmapped)
    return unmapped
  } catch (err) {
    console.error('err unzipping', err)
  }
}

generate(payload, 'very-very-secret-key')
  .then(encoded => decode(encoded))
  .then(decoded => console.log('decoded', decoded))
