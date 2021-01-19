import React from "react";
import { Package } from "frontity/types";

/**
 * Imports Gutenberg Styles into Frontity via global css.
 */
export interface GutenbergStyles extends Package {
  /**
   * Package name.
   */
  name: "frontity-gutenberg-styles";

  /**
   * Root elements exposed by this package.
   */
  roots: React.ElementType;
};

