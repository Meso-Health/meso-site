import React from 'react';
import classNames from 'classnames';

import Subheader from './subheader';

const ServiceCard = ({ active, onClick, title, children, ...props }) => (
  <a
    href="#"
    onClick={e => {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
    }}
    className={classNames(
      'ServiceCard display-inlineBlock borderRadius-4 padding-3',
      {
        'ServiceCard--active backgroundColor-blue color-white': active,
        'backgroundColor-white': !active,
      },
    )}>
    <div className={classNames({ 'opacity-50p': !active })}>
      <div className="marginBottom-1">
        <Subheader>{title}</Subheader>
      </div>
      <p>{children}</p>
    </div>
  </a>
);

export default ServiceCard;
