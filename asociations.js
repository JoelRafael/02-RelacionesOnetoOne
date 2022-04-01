const User = require ('./Models/User')
const Addres = require ('./Models/Address')

User.hasOne(Addres)

Addres.belongsTo(User);