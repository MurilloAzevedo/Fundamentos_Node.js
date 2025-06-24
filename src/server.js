import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

//const user = []  // Iremos converter esse array em JSON para enviar ao frontend
const database = new Database

const server = http.createServer (async(request, response) => {
    const {method, url} = request

    await json(request, response)

    if(method === 'GET' && url === '/users'){
        const user = database.select('users')

        return response
        .setHeader('Content-Type', 'application/json') // Definindo o tipo de conteúdo da resposta como JSON
        .end(JSON.stringify(user)) // resposta de um node para o frontend não pode ser um array, tem que ser uma string ou objeto JSON
    }

    if(method === 'POST' && url === '/users'){
        const { name, email } = request.body

        const user ={
            id: 1,
            name,
            email,
        }

        database.insert('users', user)

        return response.writeHead(201).end()
    }

    return response.writeHead(404).end('Not Found')
})

server.listen(3333) //localhost