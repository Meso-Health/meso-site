import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import Button from '../components/button';
import Header from '../components/header';
import Icon from '../components/icon';
import IntroAnimation from '../components/intro-animation';
import Menu from '../components/menu';
import Section from '../components/section';
import ServiceList from '../components/service-list';
import content from '../content.yml';
import utils from '../utils';

const benefitImages = {
  cost: require('../assets/img/benefit-cost.svg'),
  quality: require('../assets/img/benefit-quality.svg'),
  experience: require('../assets/img/benefit-experience.svg'),
};

const SectionHeader = ({ title, description, ...props }) => (
  <div className="column-10 column-8-m marginBottom-5">
    <h4 className="fontSize-13 textTransform-uppercase letterSpacing-loose marginBottom-3">
      {title}
    </h4>
    <Header>{description}</Header>
    <div className="Stripe backgroundColor-blue marginTop-3" />
  </div>
);

const BenefitItem = ({ imageUrl, title, description }) => (
  <Fragment>
    <div className="marginBottom-2">
      <img src={imageUrl} alt="" className="borderRadius-4" />
    </div>
    <h3 className="fontSize-24 marginBottom-1">{title}</h3>
    <p className="column-11 opacity-60p">{description}</p>
  </Fragment>
);

const FeatureItem = ({ iconName, title, description }) => (
  <div className="flex">
    <div className="marginRight-1 color-blue">
      <Icon name={iconName} size={36} iconSize={30} />
    </div>
    <div>
      <h3 className="marginBottom-1 fontSize-24">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Section
          className="position-relative overflow-hidden paddingTop-3 paddingBottom-6"
          dark
          intro>
          <Menu />
          <div className="position-relative container zIndex-3">
            <div className="marginTop-4 marginTop-6-m marginBottom-4">
              <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
                {content.introHeadline}
              </h1>
            </div>
            <div className="marginBottom-4">
              <h1 className="fontSize-24 fontWeight-light lineHeight-1d25">
                {content.introSubHeadline}
              </h1>
            </div>
            {/*
              Hiding this button until the product page is ready
              <Button to={content.routes.product}>{content.introCallToAction}</Button>
            */}
          </div>
          <div className="position-absolute top-0 left-0 right-0 bottom-0 zIndex-1">
            <IntroAnimation />
          </div>
        </Section>
        <Section id="how-it-works" className="paddingVertical-6">
          <div className="container">
            <SectionHeader
              title="How it works"
              description={content.howItWorksHeadline}
            />
            <ServiceList services={content.howItWorksItems} />
          </div>
        </Section>
        <Section id="benefits" className="paddingVertical-6" dark>
          <div className="container">
            <SectionHeader
              title="Benefits"
              description={content.benefitsHeadline}
            />
            <ul className="flex-m gutter-adjust">
              {content.benefitItems.map((item, index, arr) => (
                <li
                  className={classNames('column-4-m gutter', {
                    'marginBottom-4': index !== arr.length - 1,
                  })}>
                  <BenefitItem
                    imageUrl={benefitImages[item.image]}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Section>
        <Section id="attributes" className="paddingVertical-6">
          <div className="container">
            <SectionHeader
              title="Features"
              description={content.featuresHeadline}
            />
            <ul className="flex-m flexWrap-wrap gutter-adjust">
              {content.featureItems.map(item => (
                <li className="column-4-m gutter marginBottom-3">
                  <FeatureItem
                    iconName={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Section>
        <Section className="paddingTop-5 paddingBottom-6" dark>
          <div className="container marginBottom-4">
            <div className="column-8-m">
              <h4 className="fontSize-13 textTransform-uppercase letterSpacing-loose marginBottom-3">
                {content.learnMore.title}
              </h4>
              <ReactMarkdown className="Markdown">{content.learnMore.seeFaq}</ReactMarkdown>
              <ReactMarkdown className="Markdown marginTop-1">{content.learnMore.sourceCode}</ReactMarkdown>
              <ReactMarkdown className="Markdown marginTop-1">{content.learnMore.contactUs}</ReactMarkdown>
              <div className="Stripe backgroundColor-blue marginTop-4" />
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}
