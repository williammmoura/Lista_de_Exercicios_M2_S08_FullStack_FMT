const { Category } = require('../models/category')

class CategoryController {
    async createOneCategore (request, response) {
        const { name } = request.body
        const data = await Category.create({
            name
        })
        
        return response.status(201).send(data)
    }

    async listCategories (request, response){
        const data = await Category.findAll({
            order:[[
                "id", "ASC"
            ]]
        })

        return response.status(200).send(data)
    }
}

module.exports = new { CategoryController } 