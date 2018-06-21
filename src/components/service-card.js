import React from 'react';
import classNames from 'classnames';

import Icon from './icon';
import Subheader from './subheader';

const ServiceCard = ({ active, onClick, iconName, title, children, ...props }) => (
  // eslint-disable-next-line
  <a
    href="#"
    onClick={e => {
      e.preventDefault();
      if (onClick) {
        onClick();
      }
    }}
    className={classNames(
      'ServiceCard display-block borderRadius-4 padding-3',
      {
        'ServiceCard--active backgroundColor-blue color-white': active,
        'backgroundColor-white': !active,
      },
    )}>
    <div className={classNames({ 'opacity-50p': !active })}>
      <div className="flex flexAlign-end marginBottom-1">
        <span className="marginRight-1">
          <Icon name={iconName} size={24} iconSize={24} />
        </span>
        <Subheader>{title}</Subheader>
      </div>
      <p>{children}</p>
    </div>
  </a>
);

export default ServiceCard;
