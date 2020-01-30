import React from 'react';
import { Link } from "react-router-dom";

const Button = props => (
  // eslint-disable-next-line
  <Link
    className="Button backgroundColor-blue color-white paddingHorizontal-3 textTransform-uppercase letterSpacing-loose"
    {...props}
  />
);

export default Button;
