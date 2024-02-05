import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getListsPurchases, getIngredients } from '../../redux/actions';
import ListIngredients from './ListIngredients/ListIngredients'
import ControlPanelPurchases from './ControlPanelPurchases/ControlPanelPurchases'
import ButtonNewList from './ButtonNewList/ButtonNewList'


export default function Purchase() {
  let dispatch = useDispatch()
  useEffect(()=>{
    console.log("LINEA 16 DE pURCHASE.JS QUIERO VER CUANTAS VECES SE MANDA LA PETICION AL SERVIDOR")
    dispatch(getListsPurchases())
    // dispatch(getIngredients())
  },[dispatch])
  const purchases = useSelector(state=>state.purchases)

  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => setValue(newValue)
  useEffect(()=>{
    if(purchases[0]) setValue(purchases[0].name)},[purchases])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {purchases?.map( list=> <Tab label={list.name} value={list.name} key={list.id}/> ) }
            <Tab label="menu" value="1" sx={{ marginLeft: 'auto' }}/>

          </TabList>
        </Box>
        
        {purchases?.map( list=> 
        <TabPanel value={list.name} key={list.id}>
          <ListIngredients listID={list.id} ingredients={list.Ingredients}/>
        </TabPanel>)
        }
        <TabPanel value="1">
          <ControlPanelPurchases/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

//PURCHASE tendira que devolver algo asi. Y tiene que estar siempre lleno, en su defecto que llene uno con todos los ingredientes de la lista 
// [
//   {
//     id: "blabla",
//     name: "Nombre de lista"
//     ingredients: [{name, amount}, {name, amount} ]
//   },
//   {
//     id: "terotero",
//     name: "Compras"
//     ingredients: [{name, amount}, {name, amount} ]
//   }
// ]