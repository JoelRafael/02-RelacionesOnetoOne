'use strict'
const express = require ("express"),
      Routes = express.Router(),
      UserController = require('../Controllers/UserController'),
      AddreesController = require('../Controllers/AddressController')

      Routes
      .get('/alluser', UserController.GetAllUser)
      .get('/get/:id', UserController.GetUser)
      .post('/insert', UserController.PostUser)
      .put('/update/:id', UserController.UpdateUser)
      .delete('/delete/:id', UserController.DeleteUser)
      .get('/getaddrres',  AddreesController.GetAddrresUser)

      module.exports = Routes;