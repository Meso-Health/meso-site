import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import Menu from '../components/menu';
import Section from '../components/section';
import content from '../content.yml';
import utils from '../utils';

function FaqItem ({ question, answer }) {
  return (
    <div id={utils.toDomId(question)} className="marginBottom-3">
      <h3 className="fontWeight-bold marginBottom-2">{question}</h3>
      <ReactMarkdown className="Markdown" source={answer} linkTarget="_blank" />
    </div>
  );
}

export default function Faq() {
  return (
    <Fragment>
      <Section dark className="paddingVertical-3">
        <Menu />
      </Section>
      <Section className="paddingTop-3 paddingTop-4-m paddingBottom-4">
        <div className="container">
          <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
            FAQ
          </h1>
        </div>
        <div className="container marginTop-4">
          <div className="flex-m">
            <div className="column-4-m marginBottom-4">
              {content.faqItems.map((item, index) => (
                <h4 key={index} className="marginBottom-2">
                  <a className="color-blue" href={`#${utils.toDomId(item.question)}`}>{item.question}</a>
                </h4>
              ))}
            </div>
            <div className="column-9-m columnOffset-1-m">
              {content.faqItems.map((item, index) => (
                <FaqItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Fragment>
  );
}
