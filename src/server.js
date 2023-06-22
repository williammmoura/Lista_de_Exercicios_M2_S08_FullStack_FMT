const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const { connection } = require('./database/connection') // Configuração de acesso ao banco de dados

class Server {
    constructor (server = express()) {
        this.middlewares(server) // Esse método configura os middlewares do Express.
        this.database() // Esse método é responsável por autenticar a conexão com o banco de dados.
        this.initializeServer(server) // Esse método inicia o servidor web e faz com que ele escute na porta 3333.
    }

    async middlewares(app) {
        app.use(cors())
        app.use(express.json())
    }

    async initializeServer(app) {
        const PORT = 3333
        app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`))
    }

    async database(){
        try{
            await connection.authenticate()
            console.log('Conexão autenticada com sucesso.')
        }catch(error){
            throw error
        }
    }
}

module.exports = { Server }
