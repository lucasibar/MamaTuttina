const {Users, Days, Recipes, Ingredients, Meals} = require("../../../db");


const singin = async (req, res)=>{

    try{
        
        
        res.status(200).json("await getDayMeals(date))")
    }
    catch(error){
        res.status(400).json({Error: error.message})
    } 
}


module.exports = {singin};