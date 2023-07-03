const { createOneCompanies } = require('../controllers/companies.controller');
const { Router } = require('express')

class CompaniesRouter{
    routesFromCompanies(){
        const companiesRoutes = Router()
        companiesRoutes.post('/createOneCompanies', createOneCompanies)
        companiesRoutes.get()
    }
}