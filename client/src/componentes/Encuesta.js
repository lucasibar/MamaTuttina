import { useState, useEffect } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {crearNuevoProducto, productos} from '../redux/actions'
import './Encuesta.css'

export default function Encuesta(){
  const dispatch = useDispatch()
  let estadoInicial={
      texto: '',
      cantidad: '',
      unidad: 'grs'
    }
  const[productoNuevo, setProductoNuevo]= useState(estadoInicial)

  useEffect(()=>{
    dispatch(productos())
  },[])
  const lista = useSelector(state=> state.productos)

  const handleOnChange = (e)=>{
    setProductoNuevo(state=>({
      ...state,
      [e.target.name]: e.target.value
  }))
  }
  const handleOnSubmit = (e)=>{
    e.preventDefault() 
    dispatch(crearNuevoProducto(productoNuevo))
    setProductoNuevo(estadoInicial)
  }
  return(
    <>

    <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: 700 },
        }}
      >
        <TextField
          id="fullWidth"
          label="Ingrese producto"
          name="texto"
          value= {productoNuevo.texto}
          multiline
          maxRows={4}
          variant="filled"
          onChange={handleOnChange}
        />
        <TextField
          id="fullWidth" 
          label="Cantidad"
          multiline
          maxRows={4}
          variant="filled"
          value= {productoNuevo.cantidad}
          name="cantidad"
          onChange={handleOnChange}
        />
      </Box>
      <Button variant="outlined" onClick={handleOnSubmit}>Subir producto</Button>
    {lista.map((pro, index)=>{
      return(
        <div key={index}>
          <h1>{pro.texto}</h1>
          <h2>{pro.cantidad}</h2>
          <h2>{pro.unidad}</h2>
        </div>
      )
    })}
    
    </>
  )
} 