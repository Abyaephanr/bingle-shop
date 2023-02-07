const errorResponse = require('../helpers/error.helper')
const Response = require("../helpers/response.helper")
const {Users} = require("../database/models")

class UserController {
    async getUsers(req, res, next) {
        try {
            const {page='1', limit='3'} = req.query

        const pageInt = Number(page)
        const limitInt = Number(limit)
        const offset = (pageInt - 1) * limitInt
        
        const data = await Users.findAll({
            attributes: ['id', 'name_user', 'age_user', 'address_user'],
            limit: limitInt,
            offset: offset
        })

        if (data.length === 0) {
            throw new errorResponse(404, "Data tidak ditemukan")
        }

        return new Response(res, 200, data)
            
        } catch (error) {
            next(error)
        }
        
        // const data = [
        //     {
        //         user_id: 1,
        //         user_name: 'Tomi'
        //     },
        //     {
        //         user_id: 2,
        //         user_name: 'Budi'
        //     }
        // ]
    }
    
    insertUsers(req, res, next) {
        try {
            console.log(req.body)
             //logic insert ke database
        
             const data = {
                user_id: 3,
                user_name: req.body.user_name
             }
    
            return new Response(res, 201, data)
        } catch (error) {
            next (error)
            
        }
    }
}


module.exports = {
    UserController
}