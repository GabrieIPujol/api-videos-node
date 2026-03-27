// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Teste')

//     return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.post('/videos', () => {
    return 'Cria video'
})

server.get('/videos', () => {
    return 'Visualiza o video'
})

server.put('/videos/:id', () => {
    return 'Edita o video'
})

server.delete('/videos/:id', () => {
    return 'Deleta video'
})

server.listen({
    port: 3333,
})