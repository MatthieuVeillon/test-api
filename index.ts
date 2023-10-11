import fastify from 'fastify'

const port = process.env.PORT || 3000;
const host = `0.0.0.0`

const server = fastify()

server.get('/ping', async (request, reply) => {
    return 'pong\n'
})


server.listen({ port:Number(port), host: '0.0.0.0' }, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
})
