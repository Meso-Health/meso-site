import React from 'react';
import classNames from 'classnames';

const Subheader = ({ className, ...props }) => (
  <h3 className={classNames(className, 'fontSize-24')} {...props} />
);

export default Subheader;
