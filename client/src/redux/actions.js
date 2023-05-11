import axios from 'axios'
export const CREAR_PRODUCTO= "CREAR_PRODUCTO"
export const PRODUCTOS= "PRODUCTOS"
export const AUMENTAR= "AUMENTAR"
export const RESTAR= "RESTAR"

export const crearNuevoProducto = (producto)=>{
return {type: CREAR_PRODUCTO, payload: producto}
// export const crearNuevoProducto = (producto) => dispatch => {
    // return axios.post(`http://localhost:3001/productos`, producto)
    //     .then(data => {
    //       console.log("tendrian que ser todos los productos ACTIONS 11" , data.data)
    //       dispatch({type: CREAR_PRODUCTO, payload: data.data})
    //     })
  }

  export const productos = () => {
    return {type: PRODUCTOS, payload: [{texto:"Prueba actions.js linea 18", cantidad: 1, unidad: "grs"}]}  
}
// export const productos = () => dispatch => {
//     return axios.get(`http://localhost:3001/productos`)
//     .then(data => {
//       dispatch({type: PRODUCTOS, payload: data.data})
//     })
//   }

export const aumentar = (texto) => {
return {type: AUMENTAR, payload: texto}

  }

export const restar = (texto) => {
    return {type: RESTAR, payload: texto}

  }

// export const crearNuevoProducto = (tarea) => dispatch => {
//     return axios.post(`http://localhost:3001/tareas`, tarea)
//     .then(data => {
//       console.log("actions 20" , data.data)
//       dispatch({type: ADD_TAREA, payload: data.data})
//     })
//   }

//   export const productos = (objetivo) => dispatch => {
//     return axios.get(`http://localhost:3001/tareas/${objetivo}`)
//     .then(data => {
//       dispatch({type: GET_TAREAS, payload: data.data})
//     })
//   }
//   export const aumentar = (objetivo) => dispatch => {
//     return axios.get(`http://localhost:3001/tareas/${objetivo}`)
//     .then(data => {
//       dispatch({type: GET_TAREAS, payload: data.data})
//     })
//   }
//   export const restar = (objetivo) => dispatch => {
//     return axios.get(`http://localhost:3001/tareas/${objetivo}`)
//     .then(data => {
//       dispatch({type: GET_TAREAS, payload: data.data})
//     })
//   }