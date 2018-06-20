import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

import Subheader from './components/subheader';
import ServiceList from './components/service-list';
import Icon from './components/icon';

import benefitCostUrl from './assets/img/benefit-cost.svg';
import benefitQualityUrl from './assets/img/benefit-quality.svg';
import benefitExperienceUrl from './assets/img/benefit-experience.svg';

const Button = props => (
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

const Header = props => (
  <h2 className="fontSize-24 fontSize-30-m lineHeight-1d4" {...props} />
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
        <Section className="paddingTop-5 paddingBottom-6" dark>
          <header className="flex flexAlign-center flexJustify-spaceBetween container">
            <svg
              height="22"
              viewBox="0 0 81 22"
              width="81"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m27 6.17886179v9.78894311h-3.6068702v-8.65073173c0-2.63414634-1.408397-4.06504065-3.8129771-4.06504065-2.3358779 0-4.259542 1.43089431-4.259542 4.09756098v8.6182114h-3.6412214v-8.65073173c0-2.60162602-1.4083969-4.09756097-3.81297709-4.09756097-2.33587786.03252032-4.25954198 1.4308943-4.25954198 4.1300813v8.6504065h-3.60687023v-15.6097561h3.57251908v1.88617886c1.30534352-1.78861788 3.36641222-2.27642276 5.04961832-2.27642276 2.5076336 0 4.5343511 1.04065041 5.7022901 2.79674797 1.4083969-2.24390244 3.9503817-2.79674797 6.0114504-2.79674797 3.9160305 0 6.6641221 2.53658537 6.6641221 6.17886179zm19 1.75776275c0 .44443801-.0343348.85713046-.0686695 1.23807733h-12.1545065c.4806867 2.73011923 2.5407726 3.87295983 4.8755365 3.87295983 1.7167382-.0317455 3.3991416-.6028484 4.7381974-1.5872786l1.7854078 2.380918c-1.9914163 1.5872786-4.2575108 2.1586989-6.7639485 2.1586989-4.9098713 0-8.4120172-3.1745573-8.4120172-7.99988432 0-4.7618359 3.3648069-7.99988432 8.1716738-7.99988432 4.6695279-.03174557 7.8283262 3.20630284 7.8283262 7.93639318zm-12.1888412-1.26982291h8.5150215c-.4120172-2.34917238-1.8884121-3.74597758-4.1888412-3.74597758-2.5407726 0-3.9484979 1.52378749-4.3261803 3.74597758zm26.339498-2.53161276c-1.485814-.82703778-3.1697365-1.27236581-4.8866772-1.30417495-1.8820311 0-3.0043159.73161033-3.0043159 1.81312127 0 1.08151093 1.1556331 1.36779324 2.6080989 1.59045726l1.6509044.25447316c3.4338813.47713717 5.481333 1.9085487 5.481333 4.51721669 0 2.9261233-2.6414471 4.9937177-7.1982736 4.9937177-1.6509045 0-4.4904602-.3180915-6.8017264-1.9718489l1.6182166-2.5132406c1.1222848.8585289 2.6414471 1.5589662 5.2165279 1.5589662 2.3442843 0 3.5989717-.7004373 3.5989717-1.8452485 0-.8585288-.8584703-1.4314115-2.7405014-1.68588466l-1.6509045-.19085487c-3.4999174-.47713718-5.3489304-2.03578529-5.3489304-4.45328032 0-3.02186879 2.5093748-4.89860835 6.5379118-4.89860835 2.4763567 0 4.7542747.60437376 6.4051791 1.6222664zm3.8493432 17.86481113v-3h16v3zm8.5001687-22c4.6882477 0 8.4998313 3.58730159 8.4998313 8 0 4.4130159-3.8115836 8-8.4998313 8-4.6885851 0-8.5001687-3.5869841-8.5001687-8 0-4.41269841 3.8115836-8 8.5001687-8zm0 12.8571429c2.8671203 0 5.1608166-2.1587302 5.1608166-4.88888893 0-2.66666667-2.3611579-4.85714286-5.1948848-4.85714286-2.8330522 0-5.1604794 2.19047619-5.1604794 4.88888889 0 2.6669841 2.3274272 4.8571429 5.1945476 4.8571429z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
            <a
              href="mailto:partnerships@meso.health"
              className="fontSize-13 textTransform-uppercase letterSpacing-loose">
              Schedule a demo
            </a>
          </header>
          <div className="container">
            <div className="marginTop-5 marginBottom-4">
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
                  <img src={benefitCostUrl} className="borderRadius-4" />
                </div>
                <h3 className="fontSize-24 marginBottom-1">Reduce cost</h3>
                <p className="column-11 opacity-60p">
                  Increase your operational efficiency by automating tasks and
                  surfacing data to reduce waste and fraud.
                </p>
              </li>
              <li className="column-4-m gutter marginBottom-4">
                <div className="marginBottom-2">
                  <img src={benefitQualityUrl} className="borderRadius-4" />
                </div>
                <h3 className="fontSize-24 marginBottom-1">Increase quality</h3>
                <p className="column-11 opacity-60p">
                  Leverage advanced data analytics to continually improve the
                  system for patients and providers.
                </p>
              </li>
              <li className="column-4-m gutter">
                <div className="marginBottom-2">
                  <img src={benefitExperienceUrl} className="borderRadius-4" />
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
