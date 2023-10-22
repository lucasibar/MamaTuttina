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






import axios from 'axios'
export const GET_DAYS= "GET_DAY"
export const GET_DAY_RECIPES= "GET_DAY_RECIPES" 
export const GET_INGREDIENTS= "GET_INGREDIENTS"

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


//INGREDIENTS CRUD
export const getIngredients = () => dispatch => {
  return axios.get(`http://localhost:3001/ingredients`)
  .then(data => {
    dispatch({type: GET_INGREDIENTS, payload: data.data })
  })
}
