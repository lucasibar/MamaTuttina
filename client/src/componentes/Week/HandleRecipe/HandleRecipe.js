import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { putRecipePurchases } from '../../../redux/actions'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function HandleRecipe({meal}) {
    const recipes = useSelector(state=> state.recipes)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
    setOpen(false);
    };

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={handleOpen}>{meal}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 250 }}>
          <h2 id="parent-modal-title">Eleccion de Receta </h2>
          <p id="parent-modal-description">
            Seleccione {meal}
          </p>
          <RecipeSelector recipes={recipes}/>
        </Box>
      </Modal>
    </div>
  );
}













function RecipeSelector( { recipes } ) {
    let dispatch = useDispatch() 

    const [recipeList, setRecipeList] = useState([])
    const [selectedRecipe, setSelectedRecipe]= useState('')

    useEffect(()=>{
        setRecipeList(recipes.map(r=>r.name))
    },[recipes])

    return (
        <>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={selectedRecipe}
        onChange={(event, newValue) => setSelectedRecipe(newValue)}
        options={recipeList}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Recetas" />}
        /> 

        <Button onClick={()=>dispatch(putRecipePurchases(selectedRecipe, ))}>ACEPTAR</Button>
        </>
    );
  }