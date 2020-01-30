import React from 'react';
import ReactMarkdown from 'react-markdown';

import Menu from '../components/menu';
import Section from '../components/section';
import content from '../content.yml';

function FaqItem ({ question, answer }) {
  // note: there are custom styles applied to <p> and <a> elements within FaqItem specified in base.css
  return (
    <div className="FaqItem marginBottom-3">
      <h3 className="fontWeight-bold marginVertical-2">{question}</h3>
      <ReactMarkdown source={answer} linkTarget="_blank" />
    </div>
  );
}

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
          <FaqItem question={item.question} answer={item.answer} />
        ))}
      </div>
    </Section>
  );
}
