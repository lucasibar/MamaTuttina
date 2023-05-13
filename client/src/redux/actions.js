import axios from 'axios'
export const GET_DAYS= "GET_DAYS"

export const getDays = () => dispatch => {
    return axios.get(`http://localhost:3001/days`)
      .then(data => {
        console.log("actions linea 7", data.data)
        dispatch({type: GET_DAYS, payload: data.data})
      })
  }

