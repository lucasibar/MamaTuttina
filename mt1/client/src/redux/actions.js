import axios from 'axios'
export const GET_DAYS= "GET_DAY" 

//DAY CRUD
export const getDays = () => dispatch => {
  return axios.get(`http://localhost:3001/days`)
  .then(data => {
    dispatch({type: GET_DAYS, payload: data.data })
  })
}