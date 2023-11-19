import figlet from "figlet"

const server = Bun.serve({
    port: 3000,
    fetch(req){
        const url = new URL(req.url)

        if (url.pathname === "/") {
            const body = figlet.textSync("VideoMaker")
            return new Response(body)

        }

        if (url.pathname === "/about") {
            return new Response("Sobre mim!")
        }

        if (url.pathname === "/contact") {
            return new Response("Entre em contato")
        }

        if (url.pathname === "/feed") {
            throw new Error("Não foi possível retornar o feed!")
        }

        return new Response('404!')
    },
    error(error) {
        return new Response (`<pre>${error} \n ${error.stack}</pre>`, {
            headers: {
                'Content-Type': 'text/html'
            }
        })
    }
})

console.log(`Escutando na PORTA http://localhost:${server.port}`)