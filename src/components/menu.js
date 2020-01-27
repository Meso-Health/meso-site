import React from 'react';
import { Link } from "react-router-dom";

import MesoLogoType from '../components/meso-logo-type';
import MesoLogoMark from '../components/meso-logo-mark';
import content from '../content.yml';
import utils from '../utils';

export default function Menu() {
  return (
    <header className="position-relative flex flexAlign-center flexJustify-spaceBetween container zIndex-2">
      <Link to="/">
        <span className="display-none display-block-m">
          <MesoLogoType />
        </span>
        <span className="display-none-m">
          <MesoLogoMark />
        </span>
      </Link>
      <Link
        to="/product"
        className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade">
        Product
      </Link>
      <Link
        to="/faq"
        className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade">
        FAQ
      </Link>
    </header>
  );
}
