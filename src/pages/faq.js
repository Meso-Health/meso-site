import React from 'react';

import Menu from '../components/menu';
import Section from '../components/section';
import content from '../content.yml';

export default function Faq() {
  return (
    <Section className="position-relative overflow-hidden paddingTop-3 paddingTop-4-m paddingBottom-4">
      <Menu />
      <div className="position-relative container zIndex-3">
        <div className="marginVertical-4">
          <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
            FAQ
          </h1>
        </div>
        {content.faqItems.map(item => (
          <div className="marginBottom-3">
            <h3 className="fontWeight-bold marginVertical-2">{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
