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

        return new Response('404!')
    }
})

console.log(`Escutando na PORTA http://localhost:${server.port}`)