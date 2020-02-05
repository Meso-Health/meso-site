import React, { Fragment } from 'react';

import Menu from '../components/menu';
import Section from '../components/section';
import content from '../content.yml';

const Step = ({ caption, src }) => (
  <div className="textAlign-center">
    <img src={src} alt="" className="borderRadius-4" />
    <p className="padding-2">{caption}</p>
  </div>
);

export default function Product() {
  return (
    <Fragment>
      <Section dark className="paddingVertical-3">
        <Menu />
      </Section>
      <Section className="paddingVertical-4">
        <div className="container">
          <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
            {content.productHeadline}
          </h1>
          <h1 className="marginTop-4 fontSize-24 fontWeight-light lineHeight-1d25">
            {content.productSubHeadline}
          </h1>
        </div>
      </Section>
      <Section dark className="paddingVertical-4">
        <div className="container">
          <h4 className="fontSize-13 textTransform-uppercase letterSpacing-loose marginBottom-3">
            {content.claimSubmissionTitle}
          </h4>
          <p>{content.claimSubmissionDescription}</p>
          <div className="flex-m marginTop-3 gutter-adjust">
            <div className="column-4-m gutter marginBottom-4 marginBottom-0-m">
              <Step
                src="https://media1.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp"
                caption={content.claimSubmissionStep1}
              />
            </div>
            <div className="column-4-m gutter marginBottom-4 marginBottom-0-m">
              <Step
                src="https://media1.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp"
                caption={content.claimSubmissionStep2}
              />
            </div>
            <div className="column-4-m gutter marginBottom-4 marginBottom-0-m">
              <Step
                src="https://media.giphy.com/media/STkxzJgXaDpu49RlLi/source.gif"
                caption={content.claimSubmissionStep3}
              />
            </div>
          </div>
        </div>
      </Section>
    </Fragment>
  );
}
