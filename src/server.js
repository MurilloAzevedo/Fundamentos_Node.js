import http from 'node:http'

const server = http.createServer ((request, response) => {
    return response.end('ooi')
})

server.listen(3333) //localhost