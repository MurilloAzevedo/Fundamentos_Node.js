import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: '/users',
        handler: (req, res) => {
            const user = database.select('users')
            
            return response
            .setHeader('Content-Type', 'application/json') // Definindo o tipo de conteúdo da resposta como JSON
            .end(JSON.stringify(user)) // resposta de um node para o frontend não pode ser um array, tem que ser uma string ou objeto JSON
        }
    },

    {
        method: 'POST',
        path: '/users',
        handler: (req, res) => {
            const { name, email } = request.body
    
            const user ={
                id: randomUUID(),
                name,
                email,
            }
    
            database.insert('users', user)
    
            return response.writeHead(201).end()
        }
    }
]