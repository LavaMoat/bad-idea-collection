const http = require('http')
const concat = require('concat-stream')

module.exports = createServer


function createServer ({ port=8080 } = {}) {
  const server = http.createServer((request, response) => {
    request.pipe(concat(srcBuffer => {
      try {
        // evaluate code
        const srcString = srcBuffer.toString('utf8')
        const result = eval(srcString)
        // send response
        const serializedResult = String(result)
        response.writeHead(200, 'OK', {'Content-Type': 'text/plain'})
        response.write(serializedResult)
      } catch (err) {
        response.writeHead(500, 'zoinks', {'Content-Type': 'text/plain'})
        response.write(err.stack || err.message || err)
      } finally {
        response.end()
      }
    }))
  })

  // only accept local connections so its not too dangerous
  server.listen(8080, '127.0.0.1')

  // print instructions
  console.log(`Potentially dangerous eval server listening on localhost:8080`)
  console.log(`try something like:`)
  console.log(`  "curl -d '1+1' localhost:8080"`)
  console.log(`or perhaps explore the eval environment:`)
  console.log(`  "curl -d 'Object.keys(process.env)' localhost:8080"`)

  return server
}