import React from 'react';
import { Box } from '@mui/material';

import Main from 'layouts/Main';

const IndexView = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        Welcome to NAS Bioscience!
      </Main>
    </Box>
  );
};

export default IndexView;
