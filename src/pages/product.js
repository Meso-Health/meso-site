import React, { Fragment } from 'react';

import Menu from '../components/menu';
import Section from '../components/section';

export default function Product() {
  return (
    <Fragment>
      <Section dark className="overflow-hidden paddingTop-3 paddingTop-4-m paddingBottom-4">
        <Menu dark />
      </Section>
      <Section className="position-relative overflow-hidden paddingTop-3 paddingTop-4-m paddingBottom-4">
        <div className="container">
          <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25 marginTop-4">
            Product
          </h1>
        </div>
        <div className="position-relative container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </Section>
    </Fragment>
  );
}
