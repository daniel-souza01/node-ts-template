import http from 'node:http'

const { PORT } = process.env

http
  .createServer((req, res) => {
    res.end('Node ts template')
  })
  .listen(PORT, () => console.log(`HTTP Server Running on port ${PORT}!`))
