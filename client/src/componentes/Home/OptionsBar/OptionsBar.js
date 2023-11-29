import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';


export default function Options() {
 
 
 

  return (
    <Box sx={{ height: 120, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}>

          <SpeedDialAction key='Copy' icon={<FileCopyIcon /> }tooltipTitle='Nueva receta(cuantas porciones?)'/> 
          <SpeedDialAction key='Save' icon={<SaveIcon />} tooltipTitle='Agragar al diario(almuerzo cena o extra?)'/>
          <SpeedDialAction key='Print' icon={<PrintIcon /> }tooltipTitle='Agregar al programa'/>
          <SpeedDialAction key='Share' icon={<ShareIcon />} tooltipTitle='Share'/>
      </SpeedDial>
      
    </Box>
  );
}
