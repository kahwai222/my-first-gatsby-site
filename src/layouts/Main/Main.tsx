import React from 'react';
import {
  AppBar,
  Box, Button,
  // Button,
  // Tab,
  // Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import PersonIcon from '@mui/icons-material/Person';

import logo from 'assets/logo.svg';

interface Props {
  children: React.ReactNode;
  bgcolor?: string;
}

const Main = ({
  children,
  bgcolor = 'transparent',
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Toolbar variant={isMd ? 'regular' : 'dense'}>
          <Button>
            <img src={logo} style={{ width: isLg ? '12rem' : isMd ? '9rem' : '8rem' }} alt="website logo" />
          </Button>
          {/*<Tabs value={0}>*/}
          {/*  {['PRODUCTS', 'RESOURCES', 'COMPANY', 'NEWS'].map(page => (*/}
          {/*    <Tab label={<Typography variant="h2">{page}</Typography>} key={page} />*/}
          {/*  ))}*/}
          {/*</Tabs>*/}
          {isMd ? (
            ['PRODUCTS', 'RESOURCES', 'COMPANY', 'NEWS'].map(page => (
              <Typography variant={isLg ? 'h2' : 'h3'} key={page} margin={isLg ? '0 2rem' : '0 1rem'}>
                {page}
              </Typography>
            ))
          ) : null}

          {/*<IconButton size="small" edge="start" aria-label="open drawer">*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          {/*<IconButton size="small" edge="end" aria-label="open drawer">*/}
          {/*  <PersonIcon />*/}
          {/*</IconButton>*/}
        </Toolbar>
      </AppBar>

      <main>
        {children}
      </main>
    </Box>
  );
};

export default Main;
