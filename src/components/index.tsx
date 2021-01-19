/* eslint-disable react/no-danger */
import { connect, css, Global } from "frontity";
import { Connect } from "frontity/types";
import React from "react";

import { GutenbergStyles } from "../../types";
import gutenbergThemeCSS from "../styles/gutenberg/theme.css";
import gutenbergStyleCSS from "../styles/gutenberg/style.css";
import utilStyle from "../styles/utils.css";
import { fixCss } from '../helpers/css'
const fixedGutenbergThemeCSS = fixCss(gutenbergThemeCSS)
const fixedGutenbergStyleCSS = fixCss(gutenbergStyleCSS)



/**
 * Root component of the Gutenberg package.
 *
 * It imports the Gutenberg Block Styles into the global css
 *
 * @remarks
 * This component is automatically rendered by Frontity and it's not meant to be
 * imported and used anywhere.
 *
 *
 * @returns Root element.
 */
export const Root: React.FC<Connect<GutenbergStyles>> = () => {
  return (
    <>
      <Global styles={css(fixedGutenbergThemeCSS)} />
      <Global styles={css(fixedGutenbergStyleCSS)} />
      {/* <Global styles={css(utilStyle)} /> */}
    </>
  );
};

export default connect(Root);
