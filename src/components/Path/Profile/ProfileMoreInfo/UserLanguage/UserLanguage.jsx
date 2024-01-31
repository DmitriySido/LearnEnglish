import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

export default function UserLanguage(){
  
  return(
    <Box sx={{ width: 100 }}>
      <Grid container justifyContent="center">
      <Grid item>
        <Tooltip title="Мои курсы" placement="bottom">
          <button className='user-language__button something-important__item'>
            <img src="../../../../../../icons/Language-flags/icons8-USA-48.png" alt="Flag icon" />
          </button>
        </Tooltip>
      </Grid>
      </Grid>
    </Box>
  )
}