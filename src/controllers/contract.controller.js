const { Contract } = require('../models/contract')

class ContractController {
    async createOneContract(request, response) {
        try {
            const {
                traineeId,
                categoryId,
                companyId,
                startValidity,
                endValidity,
                status,
                remuneration,
                extra
            } = request.body;

            const data = await Contract.create({
                traineeId,
                categoryId,
                companyId,
                startValidity,
                endValidity,
                status,
                remuneration,
                extra
            })

            return response.status(201).send(data)
        } catch (error) {
            console.error(error.message)
            return response.status(400).send({ message: "Não foi possível criar um registro de contrato.", cause: error.message })
        }
    }

    async listContracts(request, response) {
        const data = await Contract.findAll()

        return response.status(200).send(data)
    }

    async listOneContract(request, response) {
        const { id } = request.params
        const data = await Contract.findByPk(id)

        return response.status(200).send(data)
    }
}

module.exports = new ContractController()