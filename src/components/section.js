import React from 'react';
import classNames from 'classnames';

export default function Section({ className, dark, intro, ...props }) {
  return (
    <section
      className={classNames(className, {
        'backgroundColor-black background-blackDot color-white': dark,
        'backgroundColor-lightGray background-whiteDot': !dark,
      })}
      {...props}
    />
  );
}
