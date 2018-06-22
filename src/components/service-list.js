import React, { Component } from 'react';
import classNames from 'classnames';
import throttle from 'lodash.throttle';

import utils from '../utils';
import ServiceCard from './service-card';

import enrollmentImageUrl from '../assets/img/service-enrollment@2x.jpg';
import identificationImageUrl from '../assets/img/service-identification@2x.jpg';
import submissionImageUrl from '../assets/img/service-submission@2x.jpg';
import processingImageUrl from '../assets/img/service-processing@2x.jpg';
import reportingImageUrl from '../assets/img/service-reporting@2x.jpg';

const services = [
  {
    icon: 'enrollment',
    title: 'Enrollment',
    description:
      'Easily enroll members, collection personal information and biometrics, and issue membership cards.',
    imageUrl: enrollmentImageUrl,
  },
  {
    icon: 'identification',
    title: 'Identification',
    description:
      'Accurately identify members, edit their personal information, and confirm their eligibility for services.',
    imageUrl: identificationImageUrl,
  },
  {
    icon: 'submission',
    title: 'Claims submission',
    description:
      'Efficiently collect claims and any corroborating documents from clinics, pharmacies, and hospitals.',
    imageUrl: submissionImageUrl,
  },
  {
    icon: 'processing',
    title: 'Claims processing',
    description:
      'Thoroughly review and adjudicate claims, and manage the provider reimbursement process.',
    imageUrl: processingImageUrl,
  },
  {
    icon: 'reporting',
    title: 'Reporting',
    description:
      'Intelligently analyze data across the entire system and make any necessary changes.',
    imageUrl: reportingImageUrl,
  },
];

export default class ServicesList extends Component {
  state = {
    activeServiceIndex: 0,
    cardTops: [],
    maxOffset: 0,
    assumedImageSizeMeasured: false,
  };

  parentRef = React.createRef();
  photoRef = React.createRef();
  cardRefs = services.map(() => React.createRef());

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    requestAnimationFrame(() => {
      this.handleResize();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.throttledMeasure();
  };

  handleImageLoad = () => {
    this.measure();
    this.setState({ assumedImageSizeMeasured: true });
  };

  measure = () => {
    if (this.parentRef.current && this.photoRef.current) {
      const parentRect = this.parentRef.current.getBoundingClientRect();
      const parentHeight = parentRect.height;
      const photoHeight = this.photoRef.current.getBoundingClientRect().height;
      const cardTops = services.map((_, index) => {
        const cardRect = this.cardRefs[index].current.getBoundingClientRect();

        return Math.abs(parentRect.top - cardRect.top);
      });

      const maxOffset = parentHeight - photoHeight;

      this.setState({ cardTops, maxOffset });
    }
  };

  throttledMeasure = throttle(this.measure, 100);

  render() {
    const { activeServiceIndex, cardTops, maxOffset } = this.state;
    const activeService = services[activeServiceIndex];

    const top = cardTops[activeServiceIndex];
    const offset = utils.range(top, 0, maxOffset);

    return (
      <div
        className="ServiceList position-relative flex-m gutter-adjust"
        ref={this.parentRef}>
        <ul className="column-5-m gutter">
          {services.map((service, index) => (
            <li
              className={classNames({
                'paddingBottom-2': index !== services.length - 1,
              })}
              ref={this.cardRefs[index]}
              key={service.title}>
              <ServiceCard
                title={service.title}
                iconName={service.icon}
                active={activeServiceIndex === index}
                onClick={() => this.setState({ activeServiceIndex: index })}>
                {service.description}
              </ServiceCard>
              <img
                className={classNames(
                  'display-none-m borderRadius-4 borderTopRadius-0',
                  {
                    'position-absolute visibility-hidden':
                      activeServiceIndex !== index,
                  },
                )}
                src={service.imageUrl}
                alt={activeService.title}
              />
            </li>
          ))}
        </ul>
        <div className="display-none display-block-m column-7 gutter">
          <img
            className="ServiceList-photo position-relative borderRadius-4"
            ref={this.photoRef}
            onLoad={
              this.state.assumedImageSizeMeasured
                ? undefined
                : this.handleImageLoad
            }
            style={{ transform: `translateY(${offset}px)` }}
            width="1200"
            height="951"
            src={activeService.imageUrl}
            alt={activeService.title}
          />
        </div>
      </div>
    );
  }
}
