import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import Header from './components/header';
import MesoLogoType from './components/meso-logo-type';
import MesoLogoMark from './components/meso-logo-mark';
import Icon from './components/icon';
import ServiceList from './components/service-list';

import benefitCostUrl from './assets/img/benefit-cost.svg';
import benefitQualityUrl from './assets/img/benefit-quality.svg';
import benefitExperienceUrl from './assets/img/benefit-experience.svg';

const Button = props => (
  // eslint-disable-next-line
  <a
    className="Button backgroundColor-blue color-white paddingHorizontal-3 textTransform-uppercase letterSpacing-loose"
    {...props}
  />
);

const Section = ({ className, dark, ...props }) => (
  <section
    className={classNames(className, {
      'backgroundColor-black color-white': dark,
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
        <Section className="paddingTop-3 paddingTop-4-m paddingBottom-6" dark>
          <header className="flex flexAlign-center flexJustify-spaceBetween container">
            <div className="display-none display-block-m">
              <MesoLogoType />
            </div>
            <div className="display-none-m">
              <MesoLogoMark />
            </div>
            <a
              href="mailto:partnerships@meso.health"
              className="fontSize-13 textTransform-uppercase letterSpacing-loose">
              Schedule a demo
            </a>
          </header>
          <div className="container">
            <div className="marginTop-6 marginBottom-4">
              <h1 className="fontSize-36 fontSize-48-m fontWeight-light lineHeight-1d25">
                Meso is a modern technology platform for health insurance
                administration.
              </h1>
            </div>
            <Button href="mailto:partnerships@meso.health">Contact Us</Button>
          </div>
        </Section>
        <section
          id="how-it-works"
          className="backgroundColor-lightGray background-dot paddingVertical-6">
          <div className="container">
            <SectionHeader
              title="How it works"
              description="Our suite of mobile and web applications has your health insurance system covered."
            />
            <ServiceList />
          </div>
        </section>
        <section
          id="benefits"
          className="backgroundColor-black color-white paddingVertical-6">
          <div className="container">
            <SectionHeader
              title="Benefits"
              description="Our platform helps partners reduce administrative costs and streamlines processes."
            />
            <ul className="flex-m gutter-adjust">
              <li className="column-4-m gutter marginBottom-4">
                <div className="marginBottom-2">
                  <img src={benefitCostUrl} alt="" className="borderRadius-4" />
                </div>
                <h3 className="fontSize-24 marginBottom-1">Reduce cost</h3>
                <p className="column-11 opacity-60p">
                  Increase your operational efficiency by automating tasks and
                  surfacing data to reduce waste and fraud.
                </p>
              </li>
              <li className="column-4-m gutter marginBottom-4">
                <div className="marginBottom-2">
                  <img
                    src={benefitQualityUrl}
                    alt=""
                    className="borderRadius-4"
                  />
                </div>
                <h3 className="fontSize-24 marginBottom-1">Increase quality</h3>
                <p className="column-11 opacity-60p">
                  Leverage advanced data analytics to continually improve the
                  system for patients and providers.
                </p>
              </li>
              <li className="column-4-m gutter">
                <div className="marginBottom-2">
                  <img
                    src={benefitExperienceUrl}
                    alt=""
                    className="borderRadius-4"
                  />
                </div>
                <h3 className="fontSize-24 marginBottom-1">
                  Improve experience
                </h3>
                <p className="column-11 opacity-60p">
                  Streamline health insurance administration to save time and
                  improve experience for patients, providers, and staff.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="attributes"
          className="backgroundColor-lightGray background-dot paddingVertical-6">
          <div className="container">
            <SectionHeader
              title="Features"
              description="Globally integrated enterprise, built for the world’s fastest-growing health insurance systems."
            />
            <ul className="flex-m flexWrap-wrap gutter-adjust">
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="enrollment"
                  title="Scalable"
                  description="Leverages proven technical infrastructure to scale quickly without compromising performance."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="enrollment"
                  title="Secure"
                  description="Adheres to current international best practices with regard to data privacy and security."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="enrollment"
                  title="Flexible"
                  description="Modular and easily adapts to meet the needs of different health insurance systems."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="enrollment"
                  title="Inuitive"
                  description="Built alongside payers, providers, and patients, to improve ease of use and reduce the need for training."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="enrollment"
                  title="Interoperable"
                  description="Architected to integrate with different systems and third-party clients such as EMR’s, HMIS’s, and mobile payments."
                />
              </li>
              <li className="column-4-m gutter marginBottom-3">
                <FeatureItem
                  iconName="enrollment"
                  title="Robust"
                  description="Developed for use in any setting, even if there’s limited internet connectivity or intermittent power."
                />
              </li>
            </ul>
          </div>
        </section>
        <section className="backgroundColor-black color-white paddingTop-5 paddingBottom-6">
          <div className="container marginBottom-4">
            <div className="column-8-m">
              <h4 className="fontSize-13 textTransform-uppercase letterSpacing-loose marginBottom-3">
                Contact Us
              </h4>
              <Header>
                To learn more or schedule a demo, email{' '}
                <a
                  href="mailto:partnerships@meso.health"
                  className="color-blue">
                  partnerships@meso.health
                </a>
              </Header>
              <div className="Stripe backgroundColor-blue marginTop-4" />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
