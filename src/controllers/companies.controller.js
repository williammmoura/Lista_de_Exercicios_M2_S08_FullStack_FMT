const { Companies } = require('../models/companies')

class CompaniesController{
    async createOneCompanies(request, response){
        try{
            const{
                cnpj, 
                company_name, 
                contact, 
                cep, 
                address, 
                neighborhood, 
                city, 
                state, 
                number, 
                complement, 
                rh_analyst_name, 
                supervisor_name 
            } = request.body;

            const data = await Companies.create({
                cnpj, 
                company_name, 
                contact, 
                cep, 
                address, 
                neighborhood, 
                city, 
                state, 
                number, 
                complement, 
                rh_analyst_name, 
                supervisor_name
            })

            return response.status(201).send(data)
        } catch(error){
            console.error(error.message)
            return response.status(400).send({message: "Não foi possível criar um novo registro.", cause: error.message })
        }
    }

    async listCompanies(request, response){
        const data = await Companies.findAll()

        return response.status(200).send(data)
    }
}

module.exports = new CompaniesController()