import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
// import { putListIngredient } from '../../../../redux/actions';
import './IngredientItem.css'
import { changeAmount } from '../../../../redux/actions';

export default function IngredientItem({ name, ingredientAmount, listID }) {
let dispatch = useDispatch()

let [amount, setAmount] = useState(0)
useEffect(()=>{
    setAmount(ingredientAmount)
},[ingredientAmount])


useEffect(() => {
    return () => {
      dispatch(changeAmount(listID, name, amount));
    };
  }, [dispatch, listID, name, amount]);



const handleDecrement = async (e)=>{
    setAmount(prevAmount => prevAmount - 1);
}
const handleIncrement = async (e)=>{
    setAmount(prevAmount => prevAmount + 1);
}

  return (
<div className='ingredientItem'>
    <ListItemAvatar>

        <Avatar><FolderIcon /></Avatar>
    </ListItemAvatar>

    <ListItemText primary={name} />

   {amount>0? 
        <div className='amountItem'>
            {amount===1 ? <DeleteOutlineIcon fontSize="small" onClick={handleDecrement}/>: <button onClick={handleDecrement}>-</button>}
            <button>{amount}</button>
            <button onClick={handleIncrement}>+</button>
        </div>:

        <ControlPointIcon color='primary' onClick={handleIncrement}/>
    }
    </div>

  );
}


    //[
      //   {
      //     id: "blabla",
      //     name: "Nombre de lista"
      //     ingredients: [{name: "pollo", amount: 250}, {name: "lechuga", amount: 100} ]
      //   },
      //   {
      //     id: "terotero",
      //     name: "Compras"
      //     ingredients:[{name: "cebolla", amount: 1}, {name: "tomate", amount: 2} ]
      //   }
      // ]
