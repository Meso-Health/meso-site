import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import Button from './components/button';
import Header from './components/header';
import Icon from './components/icon';
import IntroAnimation from './components/intro-animation';
import MesoLogoType from './components/meso-logo-type';
import MesoLogoMark from './components/meso-logo-mark';
import ServiceList from './components/service-list';
import content from './content.yml';

const mailTo = `mailto:${content.email}`;
const benefitImages = {
  cost: require('./assets/img/benefit-cost.svg'),
  quality: require('./assets/img/benefit-quality.svg'),
  experience: require('./assets/img/benefit-experience.svg'),
};

const Section = ({ className, dark, intro, ...props }) => (
  <section
    className={classNames(className, {
      'backgroundColor-black background-blackDot color-white': dark,
      'backgroundColor-lightGray background-whiteDot': !dark,
    })}
    {...props}
  />
);

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

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Section
          className="position-relative overflow-hidden paddingTop-3 paddingTop-4-m paddingBottom-6"
          dark
          intro>
          <header className="position-relative flex flexAlign-center flexJustify-spaceBetween container zIndex-2">
            <a href="/">
              <span className="display-none display-block-m">
                <MesoLogoType />
              </span>
              <span className="display-none-m">
                <MesoLogoMark />
              </span>
            </a>
            <a
              href={mailTo}
              className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade">
              {content.headerCallToAction}
            </a>
          </header>
          <div className="position-relative container zIndex-3">
            <div className="marginTop-6 marginBottom-4">
              <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
                {content.introHeadline}
              </h1>
            </div>
            <Button href={mailTo}>{content.introCallToAction}</Button>
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
              title={content.benefitsTitle}
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
                Contact Us
              </h4>
              <Header>
                To learn more or schedule a demo, email{' '}
                <a href={mailTo} className="color-blue hover-blue">
                  partnerships@meso.health
                </a>
              </Header>
              <div className="Stripe backgroundColor-blue marginTop-4" />
            </div>
          </div>
        </Section>
      </Fragment>
    );
  }
}
