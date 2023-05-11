import axios from 'axios'
export const GET_DAYS= "GET_DAYS"

export const getDays = () => dispatch => {
    return axios.get(`http://localhost:3001/dias`)
      .then(data => {
        console.log("actions linea 7", data.data)
        dispatch({type: CREAR_PRODUCTO, payload: data.data})
      })
  }

