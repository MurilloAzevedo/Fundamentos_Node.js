import http from 'node:http'

const server = http.createServer ((request, response) => {
    const {method, url} = request

    if(method === 'GET' && url === '/users'){
        return response.end('Listagem de usuarios')
    }

    if(method === 'POST' && url === '/users'){
        return response.end('Criação de usuario')
    }

    return response.end('ooie')
})

server.listen(3333) //localhost