import axios from 'axios'
export const GET_DAYS= "GET_DAY"
export const GET_DAY_RECIPES= "GET_DAY_RECIPES" 

//DAY CRUD
export const getDays = () => dispatch => {
  return axios.get(`http://localhost:3001/days`)
  .then(data => {
    dispatch({type: GET_DAYS, payload: data.data })
  })
}

export const getDayRecipes = (id) => dispatch => {
  return axios.get(`http://localhost:3001/days/${id}`)
  .then(data => {
    dispatch({type: GET_DAY_RECIPES, payload: data.data })
  })
}