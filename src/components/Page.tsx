import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
// import AOS from 'aos';

import getTheme from 'theme';

export const useDarkMode = (): [string, () => void, boolean] => {
  const [themeMode, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: string) => {
    try {
      window.localStorage.setItem('themeMode', mode);
    } catch {
      /* do nothing */
    }

    setTheme(mode);
  };

  const themeToggler = (): void => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    try {
      const localTheme = window.localStorage.getItem('themeMode');
      localTheme ? setTheme(localTheme) : setMode('light');
    } catch {
      setMode('light');
    }

    setMountedComponent(true);
  }, []);

  return [themeMode, themeToggler, mountedComponent];
};

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props): JSX.Element => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // AOS.init({
    //   once: true,
    //   delay: 50,
    //   duration: 500,
    //   easing: 'ease-in-out',
    // });
  }, []);

  const [themeMode, themeToggler] = useDarkMode();

  // useEffect(() => {
  //   AOS.refresh();
  // }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Paper elevation={0}>{children}</Paper>
    </ThemeProvider>
  );
};

export default Page;
