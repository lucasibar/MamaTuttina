import axios from 'axios'
export const GET_DAYS= "GET_DAYS"

export const getWeek = () => dispatch => {
    return axios.get(`http://localhost:3001/days/week`)
      .then(data => {
        dispatch({type: GET_DAYS, payload: data.data})
      })
  }

