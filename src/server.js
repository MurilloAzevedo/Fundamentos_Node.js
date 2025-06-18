import http from 'node:http'

const user = []  // Iremos converter esse array em JSON para enviar ao frontend

const server = http.createServer ((request, response) => {
    const {method, url} = request

    if(method === 'GET' && url === '/users'){
        return response
        .setHeader('Content-Type', 'application/json') // Definindo o tipo de conteúdo da resposta como JSON
        .end(JSON.stringify(user)) // resposta de um node para o frontend não pode ser um array, tem que ser uma string ou objeto JSON
    }

    if(method === 'POST' && url === '/users'){

        user.push({
            id: 1,
            name: 'teste',
            email: 'teste@example.com',
        })

        return response.end('Criação de usuario')
    }

    return response.end('ooie')
})

server.listen(3333) //localhost