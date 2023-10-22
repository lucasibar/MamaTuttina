const {Users} = require("../../../db");
const comparePassword = require("../utilsAuth/comparePassword")
const jwt = require("jsonwebtoken")
const {SECRET} = require("../../../../config")

const singin = async (req, res)=>{

    try{
        const { password, email } = req.body

        const userToToken = await Users.findOne({where: { email }});
        if(!userToToken) res.status(200).json("Usuario inexistente") 

        const encryptedPassword = await comparePassword(password, userToToken.password)
        if(!encryptedPassword) res.status(200).json("Password incorrecta")

        const token =jwt.sign({id: userToToken.id, rol: userToToken.rol}, SECRET) 

        res.status(200).json({token})
    }
    catch(error){
        res.status(400).json({Error: error.message})
    } 
}


module.exports = {singin};