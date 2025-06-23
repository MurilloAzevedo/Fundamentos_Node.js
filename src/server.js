import http from 'node:http'
import { json } from './middlewares/json.js'

const user = []  // Iremos converter esse array em JSON para enviar ao frontend

const server = http.createServer (async(request, response) => {
    const {method, url} = request

    await json(request, response)

    if(method === 'GET' && url === '/users'){
        return response
        .setHeader('Content-Type', 'application/json') // Definindo o tipo de conteúdo da resposta como JSON
        .end(JSON.stringify(user)) // resposta de um node para o frontend não pode ser um array, tem que ser uma string ou objeto JSON
    }

    if(method === 'POST' && url === '/users'){
        const { name, email } = request.body

        user.push({
            id: 1,
            name,
            email,
        })

        return response.writeHead(201).end()
    }

    return response.writeHead(404).end('Not Found')
})

server.listen(3333) //localhost