import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from 'images/icon.png';
import Page from 'components/Page';

interface Props {
  children: React.ReactNode;
}

const TopLayout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Helmet titleTemplate="NAS Bioscience | %s" defaultTitle="NAS Bioscience | Accelerating Life Sciences Innovation">
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Solving your research needs with customized nucleic acids & peptides." />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        {/*<meta property="og:image" content="https://assets.nas-bio.com/screenshots/homepage.png" />*/}
        <meta property="og:title" content="NAS Bioscience | Accelerating Life Sciences Innovation" />
        <meta
          property="og:description"
          content="Solving your research needs with customized nucleic acids & peptides."
        />
        <meta property="og:url" content="https://nas-bio.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet" />
        <link href="https://use.typekit.net/eqo2ywz.css" rel="stylesheet" />
      </Helmet>

      <Page>
        {children}
      </Page>
    </>
  );
};

export default TopLayout;
