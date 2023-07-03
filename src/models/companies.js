const { connection } = require('../database/connection')

const Companies = connection.define("companies", {
    cnpj:{
        type: STRING,
        validate: {
            len: {
                args: [14, 14],
                msg: "Este campo deve ter exatamente 14 caracteres."
            }
        }
    }, 
    company_name: STRING,
    contact: STRING,
    cep:{
        type: STRING,
        validate: {
            len: {
                args: [8, 8],
                msg: "Este campo deve ter exatamente 8 caracteres."
            }
        }
    },
    address:STRING, 
    neighborhood: STRING,
    city: STRING,
    state: STRING,
    number: STRING,
    complement: STRING,
    rh_analyst_name: STRING,
    supervisor_name: STRING,
    created_at: DATE,
    updated_at: DATE,
}, {underscored: true, paranoid: true})

module.exports = { Companies }