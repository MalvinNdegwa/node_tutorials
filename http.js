const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.end("Home page")
    }
    res.end(`
    <h1>OOps wrong page !!</h1>
    <a href = '/'> back home </a>
    `)

})

server.listen(5000)