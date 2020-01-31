import React from 'react';
import ReactMarkdown from 'react-markdown';

import Menu from '../components/menu';
import Section from '../components/section';
import content from '../content.yml';
import utils from '../utils';

// NOTE: there are custom styles applied to <p> and <a> elements within FaqItem
//       which can be found in base.css
function FaqItem ({ question, answer }) {
  return (
    <div id={utils.toDomId(question)} className="FaqItem marginBottom-3">
      <h3 className="fontWeight-bold marginBottom-2">{question}</h3>
      <ReactMarkdown source={answer} linkTarget="_blank" />
    </div>
  );
}

export default function Faq() {
  return (
    <Section className="overflow-hidden paddingTop-3 paddingTop-4-m paddingBottom-4">
      <Menu />
      <div className="container marginVertical-4">
        <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
          FAQ
        </h1>
      </div>
      <div className="container">
        <div className="flex-m">
          <div className="column-4-m">
            {content.faqItems.map((item, index) => (
              <h3 key={index} className="marginBottom-2">
                <a className="color-blue" href={`#${utils.toDomId(item.question)}`}>{item.question}</a>
              </h3>
            ))}
          </div>
          <div className="column-7-m columnOffset-1-m">
            {content.faqItems.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
