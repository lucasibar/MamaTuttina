import axios from 'axios'
export const GET_DAYS= "GET_DAYS"
export const GET_RECIPES= "GET_RECIPES" 
export const GET_INGREDIENTS= "GET_INGREDIENTS" 
export const GET_OBJETIVES= "GET_OBJETIVES" 

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
