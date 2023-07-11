import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getListsPurchases } from '../../redux/actions';
import ListIngredients from './ListIngredients/ListIngredients'
import ButtonNewList from './ButtonNewList/ButtonNewList'


export default function Purchase() {
  let dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getListsPurchases())
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
            <Tab label="Nueva Lista" value="1" />
            <ButtonNewList />
          </TabList>
        </Box>
        
        {purchases? purchases.map( list=> 
        <TabPanel value={list.name} key={list.id}>
          <ListIngredients ingredientsAmountsList={list.Ingredients} listID={list.id}/>
        </TabPanel>):
        <TabPanel value="1">
          <ListIngredients ingredientsAmountsList={[]} listID="nueva lista"/>
        </TabPanel>
        }
      </TabContext>
    </Box>
  );
}
