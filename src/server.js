const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const { connection } = require('./database/connection') // Configuração de acesso ao banco de dados

class Server {
    constructor (server = express()) { // Argumento do constructor auto iniciado da aplicação para usarmos as devidas funções do express.
        this.middlewares(server) // Esse método configura os middlewares do Express.
        this.database() // Esse método é responsável por autenticar a conexão com o banco de dados.
        this.initializeServer(server) // Esse método inicia o servidor web e faz com que ele escute na porta 3333.
    }

    async middlewares(app) {
        app.use(cors()) // Utilização da função cors dentro do servidor
        app.use(express.json()) // Habilitar entrada de dados como json no servidor
    }

    async database(){
        try{
            await connection.authenticate() // Tentativa de conexão com o banco de dados
            console.log('Conexão autenticada com sucesso.')
        }catch(error){
            throw error
        }
    }

    async initializeServer(app) {
        const PORT = 3333
        app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`))
    }
}

module.exports = { Server }
