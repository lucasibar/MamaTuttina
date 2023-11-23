import axios from 'axios'
export const GET_PLANIFICATION= "GET_PLANIFICATION"
export const GET_DIARY_DAY= "GET_DIARY_DAY" 
export const GET_INGREDIENTS= "GET_INGREDIENTS"
export const DAY_AFTER= "DAY_AFTER"
export const DAY_BEFORE= "DAY_BEFORE"
export const CHANGE_PORTION= "CHANGE_PORTION"
export const CHANGE_MEAL= "CHANGE_MEAL"
export const CHANGE_RECIPE_NAME= "CHANGE_RECIPE_NAME"
export const CHANGE_RECIPE_CATEGORY= "CHANGE_RECIPE_CATEGORY"

const config = {
  headers: {
    Authorization: `Bearer f44df144-7c35-4f1d-b833-c2edf53c2cdd`,
  },
};
export const changePortionsRecipe = (portionsParams) => dispatch => {
  return axios.put(`http://localhost:3001/meals`, portionsParams, config)
  .then(() => {
    dispatch({type: CHANGE_PORTION, payload: portionsParams })
  })
}
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
export const changeNameFood = (newName) => dispatch => {
  return axios.put(`http://localhost:3001/diaryDate/changeFoodName`, newName, config)
  .then(data => {
    dispatch({type: CHANGE_RECIPE_NAME, payload: data.data })
  }
  ) 
}
export const changueCategoryRecipe = (newCategory) => dispatch => {

  return axios.put(`http://localhost:3001/diaryDate/changeCategory`, newCategory, config)
  .then(data => {
    dispatch({type: CHANGE_RECIPE_CATEGORY, payload: data.data })
  }
  ) 
}











export const changueFoodMeal = (mealToMeal) => dispatch => {
  return axios.put(`http://localhost:3001/diaryDate/foodMealtoMeal`, mealToMeal, config)
  .then((data) => {
    dispatch({type: CHANGE_MEAL, payload: data.data })
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
