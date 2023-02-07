var express = require('express');
var router = express.Router();
const { UserController } = require('../controllers/users.controller');
const {validate} = require('../middlewares/validation.middleware')
const { insertUserSchemas } = require('../validations/schemas/insertuser.schemas');
const userController = new UserController

router.get('/users', userController.getUsers)
router.post('/users', validate(insertUserSchemas), userController.insertUsers)

module.exports = router