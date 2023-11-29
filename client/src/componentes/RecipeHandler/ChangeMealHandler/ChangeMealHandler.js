import * as React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { changueFoodMeal} from '../../../redux/actions'


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };


  const [mealsIdName, setMealsIdName] = useState([])
  const dayMealsDiary = useSelector(state=> state.dayMealsDiary)

  useEffect(()=>{
      const idName = dayMealsDiary.map(meal=> {
      return {mealId:meal.id, mealName:meal.mealName}})
      setMealsIdName(idName)
  },[dayMealsDiary])


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Comidas</DialogTitle>
      <List sx={{ pt: 0 }}>
      {mealsIdName.map((meal, i)=>
        <h1 key ={i} style={{backgroundColor: "blue"}} onClick={() => handleListItemClick(meal)}>{meal.mealName}</h1>
      )}
        {/* {mealsNameId?.map((meal) => (
          <ListItem disableGutters key={meal.id}>
            <ListItemButton onClick={() => handleListItemClick(meal)}>
              <ListItemText primary={meal.name} />
            </ListItemButton>
          </ListItem>
        ))} */}

      </List>
    </Dialog>
  );
}











export default function ChangeMealHandler({returnToDay, recipeID, mealId}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState({});
      
      const handleClickOpen = () => {
        setOpen(true);
      };
      
    let dispatch = useDispatch()
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
      dispatch(changueFoodMeal({
                                recipeId: recipeID,
                                mealId: mealId,
                                chosenMeal: value.mealId   
                                  }))
      
  };

  return (
    <div>

      <div className='meal'>
          <p >Comida</p>
          <p style={{ color: "blue" }} onClick={handleClickOpen} >{"Almuerzo"}</p>
        </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}