import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { getIngredients } from '../../../redux/actions';
import './ListIngredients.css'
import IngredientItem from './IngredientItem/IngredientItem'



export default function ListIngredients({ingredientsAmountsList, listID}) {

  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getIngredients())
  },[dispatch])

  const ingredients = useSelector(state=> state.ingredients)

  return (
    <div>
        {ingredients?.map((ingredient, index)=>
          <IngredientItem 
          key={index}
          amountIngredient={ingredientsAmountsList.filter(ing=> ing.name=== ingredient.name)[0]} 
          name={ingredient.name}
          ingredientID={ingredient.id}
          listID={listID}
          />
        )}
    </div>

  );
}
