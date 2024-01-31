import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

export default function UserExperience({ experience }){

  return(
    <Box sx={{ width: 100 }}>
      <Grid container justifyContent="center">
      <Grid item>
        <Tooltip title="Очки опыта нужны чтобы продвигаться в вверх по лиге" placement="bottom">
          <div className='diamond something-important__item'>
            <img src="../../../../../icons/icons8-diamond-48.png" alt="Experience icon" />
            <p className='experience'>{experience}</p>
          </div>
        </Tooltip>
      </Grid>
      </Grid>
    </Box>
  )
}