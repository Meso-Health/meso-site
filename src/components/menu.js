import React from 'react';
import { Link } from "react-router-dom";

import MesoLogoType from '../components/meso-logo-type';
import MesoLogoMark from '../components/meso-logo-mark';
import content from '../content.yml';

export default function Menu({ dark }) {
  return (
    <header className="position-relative flex flexAlign-center flexJustify-spaceBetween container zIndex-2">
      <Link to={content.routes.home}>
        <span className="display-none display-block-m">
          <MesoLogoType dark={dark} />
        </span>
        <span className="display-none-m">
          <MesoLogoMark dark={dark} />
        </span>
      </Link>
      <span>
        <Link
          to={content.routes.product}
          className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade">
          Product
        </Link>
        <Link
          to={content.routes.faq}
          className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade marginLeft-4">
          FAQ
        </Link>
      </span>
    </header>
  );
}
