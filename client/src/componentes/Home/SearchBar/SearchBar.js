import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function SearchBar({options, handelSelection}) {

  const [inputValue, setInputValue] = React.useState('');



  return (
    <div style={{ marginTop: '90px' }}>
    <Autocomplete
      value={inputValue}
      onChange={(event, newValue) => {
        setInputValue("")
        handelSelection(newValue)
      }}

      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={options}
      sx={{ width: 360 }}
      renderInput={(params) => <TextField {...params} label="Agregar alimento" />}
    />
  </div>

  );
}
