/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import type { GatsbySSR } from 'gatsby';

import TopLayout from './TopLayout';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }): JSX.Element => {
  return <TopLayout>{element}</TopLayout>;
};
