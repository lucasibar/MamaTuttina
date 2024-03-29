import * as React from 'react';
import { useDispatch } from 'react-redux';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { changueCategoryRecipe} from '../../../redux/actions'


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };


  const categories = ["None", 'Legumbre', 'Carne', 'Pollo', 'Pasta', 'Pescado', 'Arroz', 'Lacteo', 'Fruta', 'Panificado', 'Permitidos', 'Verdura']




  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Categoria</DialogTitle>
      <List sx={{ pt: 0 }}>
      {categories.map((category, i)=>
        <h1 key ={i} style={{backgroundColor: "blue"}} onClick={() => handleListItemClick(category)}>{category}</h1>
      )}
      </List>
    </Dialog>
  );
}











export default function ChangeMealHandler({recipeCategory, returnToDay, recipeId, mealId}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  
      
      const handleClickOpen = () => {
        setOpen(true);
      };
      
    let dispatch = useDispatch()

    const handleClose = (value) => {

      setOpen(false);
      setSelectedValue(value);
      dispatch(changueCategoryRecipe({ mealId, recipeId, category: value}))
      
  };

  return (
    <div>

      <div className='meal'>
          <p >Categoria</p>
          <p style={{ color: "blue" }} onClick={handleClickOpen} >{recipeCategory}</p>
        </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}