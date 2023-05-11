import { 
    CREAR_PRODUCTO,
    PRODUCTOS,
    AUMENTAR,
    RESTAR
  } from './actions'
  const initialState = {
    productos: [],
  };
  
  const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case CREAR_PRODUCTO:
        let productosRespuest= [...state.productos, action.payload]
        return {
          ...state,
          productos: productosRespuest       
      }
      case PRODUCTOS:
        if(action.payload.length===0) break
        return {
          ...state,
          productos: [...action.payload],
          
      }
      case AUMENTAR:
        return {
            ...state,
            productos: state.productos.map(p=> {
                if(p.texto===action.payload){
                    p.cantidad++
                    return p
                }
                return p
            })
          
      }
      case RESTAR:
        return {
            ...state,
            productos: state.productos.map(p=> {
                if(p.texto===action.payload && p.cantidad>0){
                    p.cantidad--
                    return p
                }
                return p
            })
          
      }

  default: return state
  };
  };
  
  export default rootReducer;
  
  