const { connection } = require('../database/connection');
const { STRING, DATE } = require('sequelize');

const Category = connection.define("Category", {
    // Colunas do banco de dados
    // Não é necessário incrementar o "id"
    name: STRING,
    created_at: DATE,
    updated_at: DATE,
});

module.exports = { Category }