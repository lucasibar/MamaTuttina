const {Users, Days, Recipes, Ingredients, Meals} = require("../../../db");
const encryptPassword = require("../utilsAuth/encryptPassword")
const jwt = require("jsonwebtoken")



const singup = async (req, res)=>{
//ver si el usuiaro ya existe y esta registradoS
    try{
        const {name, password, email, rol, location } = req.body

        const [user, created] = await Users.findOrCreate({where: { email }});
        // if(!created) res.status(200).json("Ya se genero una cuenta con este mail")
        
        const newUser={
            name,
            password: await encryptPassword(password),
            location: location||null,
            rol: rol|| null
        }

        const userGeneraed = await Users.update(newUser, {
            where:{email}
          })

        const userToToken = await Users.findOne({where: { email }});

console.log(userToToken)

        res.status(200).json(userToToken)
    }
    catch(error){
        res.status(400).json({Error: error.message})
    } 
}


module.exports = {singup};