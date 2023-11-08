import axios from 'axios'
export const GET_PLANIFICATION= "GET_PLANIFICATION"
export const GET_DIARY_DAY= "GET_DIARY_DAY" 
export const GET_INGREDIENTS= "GET_INGREDIENTS"
export const DAY_AFTER= "DAY_AFTER"
export const DAY_BEFORE= "DAY_BEFORE"


const config = {
  headers: {
    Authorization: `Bearer 978a711d-1453-4348-941e-2302bcbaf567`,
  },
};



export const getIngredients = () => dispatch => {
  return axios.get(`http://localhost:3001/ingredients`)
  .then(data => {
    // console.log(data.data)
    dispatch({type: GET_INGREDIENTS, payload: data.data })
  })
}






export const getPlanification = () => dispatch => {
  return axios.get(`http://localhost:3001/planificationDays`, config)
  .then(data => {
    dispatch({type: GET_PLANIFICATION, payload: data.data })
  }
  ) 
}









export const dayAfter = () => dispatch => {
  return dispatch({type: DAY_AFTER})
}
export const dayBefore = () => dispatch => {
    return dispatch({type: DAY_BEFORE})
}

export const getDiaryDay = (date) => dispatch => {
  return axios.get(`http://localhost:3001/diaryDate/${date}`, config)
  .then(data => {
    dispatch({type: GET_DIARY_DAY, payload: data.data })
  })  
  .catch(e=> {
    dispatch({type: GET_DIARY_DAY, payload: e})
  })
}



















//ACA TE MUESTRO UN EJEMPLO DE COMO MANDAR EL TOKEN EN EL HEADER

//import axios from 'axios';

// export const getIngredients = () => (dispatch, getState) => {
//   const token = getState().auth.token; // Asegúrate de ajustar la ruta para obtener tu token desde el estado adecuado.

//   const config = {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       // Otros encabezados si es necesario
//     }
//   };

//   return axios.get('http://localhost:3001/ingredients', config)
//     .then((response) => {
//       dispatch({ type: GET_INGREDIENTS, payload: response.data });
//     })
//     .catch((error) => {
//       // Manejo de errores
//     });
// };
