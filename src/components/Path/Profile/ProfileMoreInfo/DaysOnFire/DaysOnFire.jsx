import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';


export default function DaysOnFire(){

  return(
    <Box sx={{ width: 100 }}>
      <Grid container justifyContent="center">
      <Grid item>
        <Tooltip title="Ударный день" placement="bottom">
          <div className='days-on-fire something-important__item something-important__item-inactive'>
            <img className='fire' src="../../../../../../icons/icons8-fire-48.png" alt="Fire icon" />
          </div>
        </Tooltip>
      </Grid>
      </Grid>
    </Box>
  )
}