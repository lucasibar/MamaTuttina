const {Users} = require("../../../db");
const encryptPassword = require("../utilsAuth/encryptPassword")
const jwt = require("jsonwebtoken")
const {SECRET} = require("../../../../config")



const singup = async (req, res)=>{
//ver si el usuiaro ya existe y esta registradoS
    try{
        const {name, password, email, rol, location } = req.body

        const [user, created] = await Users.findOrCreate({where: { email }});
        if(!created) res.status(200).json("Ya se genero una cuenta con este mail")
        
        const newUser={
            name,
            password: await encryptPassword(password),
            location: location,
            rol: rol
        }

        const userGeneraed = await Users.update(newUser, {
            where:{email}
          })

        const userToToken = await Users.findOne({where: { email }});

        const token =jwt.sign({id: userToToken.id, rol: userToToken.rol}, SECRET)


        res.status(200).json({token})
    }
    catch(error){
        res.status(400).json({Error: error.message})
    } 
}


module.exports = {singup};