import React from 'react';
import { Link } from "react-router-dom";

import MesoLogoType from '../components/meso-logo-type';
import MesoLogoMark from '../components/meso-logo-mark';
import content from '../content.yml';

export default function Menu() {
  return (
    <header className="position-relative flex flexAlign-center flexJustify-spaceBetween container zIndex-2">
      <Link to={content.routes.home}>
        <span className="display-none display-block-m">
          <MesoLogoType />
        </span>
        <span className="display-none-m">
          <MesoLogoMark />
        </span>
      </Link>
      <span>
        {/*
          Hide product page until we finish content
          <Link
            to={content.routes.product}
            className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade">
            Product
          </Link>
        */}
        <Link
          to={content.routes.faq}
          className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade marginLeft-3 marginLeft-4-m">
          FAQ
        </Link>
        <a
          href={content.routes.documentation}
          className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade marginLeft-3 marginLeft-4-m">
          Documentation
        </a>
        <a
          href={content.routes.github}
          className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade marginLeft-3 marginLeft-4-m">
          Github
        </a>
      </span>
    </header>
  );
}
