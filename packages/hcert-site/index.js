const express = require('express')
const bwipjs = require('bwip-js')
const hcert = require('../hcert')
const payload = require('./typical.json')

const app = express()

const signer = {
  key: {
    d: Buffer.from('6c1382765aec5358f117733d281c1c7bdc39884d04a45a1e6c67c858bc206c19', 'hex')
  }
}

const headers = {
  p: { alg: 'ES256' },
  u: { kid: '11' }
}

app.use('/demo', async (req, res) => {
  const qr = await hcert.generate(payload, headers, signer)
  const png = await bwipjs.toBuffer({
    bcid: 'azteccode', // Barcode type
    text: JSON.stringify(qr, null, 0), // Text to encode
    scale: 2
  })
  res.end(png)
})

app.listen(process.env.PORT || 3000, () => console.log(`listening on port ${process.env.PORT || 3000}`))
