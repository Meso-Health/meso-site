import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import Button from './components/button';
import Header from './components/header';
import Icon from './components/icon';
import IntroAnimation from './components/intro-animation';
import MesoLogoType from './components/meso-logo-type';
import MesoLogoMark from './components/meso-logo-mark';
import ServiceList from './components/service-list';

import benefitCostUrl from './assets/img/benefit-cost.svg';
import benefitQualityUrl from './assets/img/benefit-quality.svg';
import benefitExperienceUrl from './assets/img/benefit-experience.svg';

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
      <img
        src={imageUrl}
        alt=""
        className="borderRadius-4"
      />
    </div>
    <h3 className="fontSize-24 marginBottom-1">{title}</h3>
    <p className="column-11 opacity-60p">
      {description}
    </p>
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
              href="mailto:partnerships@meso.health"
              className="fontSize-13 textTransform-uppercase letterSpacing-loose hover-fade">
              Schedule a demo
            </a>
          </header>
          <div className="position-relative container zIndex-3">
            <div className="marginTop-6 marginBottom-4">
              <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
                Meso is a modern technology platform for health insurance
                administration.
              </h1>
            </div>
            <Button href="mailto:partnerships@meso.health">Contact Us</Button>
          </div>
          <div className="position-absolute top-0 left-0 right-0 bottom-0 zIndex-1">
            <IntroAnimation />
          </div>
        </Section>
        <Section id="how-it-works" className="paddingVertical-6">
          <div className="container">
            <SectionHeader
              title="How it works"
              description="Our suite of mobile and web applications has your health insurance system covered."
            />
            <ServiceList />
          </div>
        </Section>
        <Section id="benefits" className="paddingVertical-6" dark>
          <div className="container">
            <SectionHeader
              title="Benefits"
              description="Our platform helps partners reduce administrative costs and streamlines processes."
            />
            <ul className="flex-m gutter-adjust">
              <li className="column-4-m gutter marginBottom-4">
                <BenefitItem
                  imageUrl={benefitCostUrl}
                  title="Reduce cost"
                  description="Increase your operational efficiency by automating tasks and surfacing data to reduce waste and fraud." />
              </li>
              <li className="column-4-m gutter marginBottom-4">
                <BenefitItem
                  imageUrl={benefitQualityUrl}
                  title="Increase quality"
                  description="Leverage advanced data analytics to continually improve the system for patients and providers." />
              </li>
              <li className="column-4-m gutter">
                <BenefitItem
                  imageUrl={benefitExperienceUrl}
                  title="Improve experience"
                  description="Streamline health insurance administration to save time and improve experience for patients, providers, and staff." />
              </li>
            </ul>
          </div>
        </Section>
        <Section id="attributes" className="paddingVertical-6">
          <div className="container">
            <SectionHeader
              title="Features"
              description="Globally integrated enterprise, built for the world’s fastest-growing health insurance systems."
            />
            <ul className="flex-m flexWrap-wrap gutter-adjust">
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="scalable"
                  title="Scalable"
                  description="Leverages proven technical infrastructure to scale quickly without compromising performance."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="secure"
                  title="Secure"
                  description="Adheres to current international best practices with regard to data privacy and security."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="flexible"
                  title="Flexible"
                  description="Modular and easily adapts to meet the needs of different health insurance systems."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="intuitive"
                  title="Intuitive"
                  description="Built alongside payers, providers, and patients, to improve ease of use and reduce the need for training."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="interoperable"
                  title="Interoperable"
                  description="Architected to integrate with different systems and third-party clients such as EMR’s, HMIS’s, and mobile payments."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="robust"
                  title="Robust"
                  description="Developed for use in any setting, even if there’s limited internet connectivity or intermittent power."
                />
              </li>
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
                <a
                  href="mailto:partnerships@meso.health"
                  className="color-blue hover-blue">
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
