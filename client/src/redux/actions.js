import axios from 'axios'
export const SET_INITIAL_STATE= "SET_INITIAL_STATE"
export const GET_DAYS= "GET_DAYS"
export const GET_RECIPES= "GET_RECIPES" 
export const GET_INGREDIENTS= "GET_INGREDIENTS" 
export const GET_OBJETIVES= "GET_OBJETIVES" 
export const POST_FOOD= "POST_FOOD" 
export const LISTS_PURCHASES= "LISTS_PURCHASES" 
// export const CHANGE_AMOUNT_INGREDIENT_PURCHASES= "CHANGE_AMOUNT_INGREDIENT_PURCHASES" 
export const CHANGE_AMOUNT= "CHANGE_AMOUNT" 


//PURCHASES CRUD
export const changeAmount = (listID, nameIngredient, amount) => {
  return {type: CHANGE_AMOUNT, payload: {listID, nameIngredient, amount}}
}

// export const putListIngredient = (changes) => dispatch => {
//   return axios.put(`http://localhost:3001/purchases`, changes)
//     .then(data => {
//       dispatch({type: CHANGE_AMOUNT_INGREDIENT_PURCHASES, payload: data.data})
//     })
// }
export const getListsPurchases = () => dispatch => {
  return axios.get(`http://localhost:3001/purchases`)
    .then(data => {
      dispatch({type: LISTS_PURCHASES, payload: [
          {
            id: "blabla",
            name: "Nombre de lista",
            ingredients: {"pollo": 100, "lechuga": 435}
          },
          {
            id: "terotero",
            name: "Compras",
            ingredients: {"pollo": 100, "lechuga": 435}
          }
        ]})
    })
}



export const setInitialState = () => dispatch => {
  return axios.get(`http://localhost:3001/setInitialState`)
    .then(data => {
      dispatch({type: SET_INITIAL_STATE, payload: data.data})
    })
}
export const getWeek = () => dispatch => {
  return axios.get(`http://localhost:3001/days/week`)
    .then(data => {
      dispatch({type: GET_DAYS, payload: data.data})
    })
}
export const getRecipes = () => dispatch => {
  return axios.get(`http://localhost:3001/recipes`)
    .then(data => {
      dispatch({type: GET_RECIPES, payload: data.data})
    })
}
export const getIngredients = () => dispatch => {
  return axios.get(`http://localhost:3001/ingredients`)
    .then(data => {
      dispatch({type: GET_INGREDIENTS, payload: data.data})
    })
}
export const getObjetives = () => dispatch => {
  return axios.get(`http://localhost:3001/objetives`)
    .then(data => {
      dispatch({type: GET_OBJETIVES, payload: data.data})
    })
}
export const addFoodDay = (postFood) => dispatch => {
  return axios.post(`http://localhost:3001/meal`, postFood)
  .then(data=>{
        dispatch({type: POST_FOOD, payload: data.data})
    })
}
