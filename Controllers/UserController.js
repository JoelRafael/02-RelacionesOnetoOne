'use strict'
const ModelUser = require('../Models/User')
const addreess = require ('../Models/Address')

var UserController =()=>{};


UserController.GetAllUser=(req, res)=>{
    //Se puede hacer de varias manera si quiero que me traiga todos los datos de la tabla 
    //relacionada hago simeplemente;
    //include:'addreess'
ModelUser.findAll({
    include:{
        model:addreess,
        attributes:['street']
    },
    attributes:['name', 'age']
}).then(user=>{
    res.json(user);
})
}

UserController.GetUser=(req, res)=>{
ModelUser.findByPk(req.params.id).then(user=>{
    res.json(user)
})
 }
 UserController.PostUser=(req, res)=>{
 ModelUser.create({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        role: req.body.role
        
    }).then(use=>{
        res.json(use)
    },error=>{
        res.json(error.errors[0].message)
    })
 }
 UserController.UpdateUser=(req, res)=>{
 ModelUser.update({
        name: req.body.name,
        apellido: req.body.apellido
     },{
     where:{
         id: req.params.id
     }
     }).then(user=>{
         if(user !=null){
             res.json("Se ha actualizado un registro")
         }else{
            res.status(500).json("Hubo un problema al actualizar el usuario")
         }
     })
 }
UserController.DeleteUser=(req, res)=>{
ModelUser.destroy({
where :{id:req.params.id}
}).then(user=>{
    user?res.json("Usuario eliminado"):res.status(500).json("Hubo un problema en el servidor")
})
 }

 module.exports = UserController;