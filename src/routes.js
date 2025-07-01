import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from "./utils/build-route-path.js"

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { search } = req.query

            const user = database.select('users', search ? {
                name: search,
                email: search
            } : null)
            
            return res.end(JSON.stringify(user)) // resposta de um node para o frontend não pode ser um array, tem que ser uma string ou objeto JSON
        }
    },

    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { name, email } = req.body
    
            const user ={
                id: randomUUID(),
                name,
                email,
            }
    
            database.insert('users', user)
    
            return res.writeHead(201).end()
        }
    },

    {
        method: 'PUT',
        path: buildRoutePath('/users/:id'), //Parametro dinamico
        handler: (req, res) => {
            const {id} = req.params
            const {name, email} = req.body

            database.update('users', id, {
                name,
                email,
            })

            return res.writeHead(204).end()
        },
    },

    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'), //Parametro dinamico
        handler: (req, res) => {
            const {id} = req.params

            database.delete('users', id)

            return res.writeHead(204).end()
        },
    }
]