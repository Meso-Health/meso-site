/* eslint jsx-a11y/alt-text: 0 */

import React, { Component } from 'react';
import classNames from 'classnames';
import throttle from 'lodash.throttle';

import utils from '../utils';
import ServiceCard from './service-card';

const images = {
  enrollment: {
    normal: require('../assets/img/service-enrollment@1x.jpg'),
    retina: require('../assets/img/service-enrollment@2x.jpg'),
  },
  identification: {
    normal: require('../assets/img/service-identification@1x.jpg'),
    retina: require('../assets/img/service-identification@2x.jpg'),
  },
  submission: {
    normal: require('../assets/img/service-submission@1x.jpg'),
    retina: require('../assets/img/service-submission@2x.jpg'),
  },
  processing: {
    normal: require('../assets/img/service-processing@1x.jpg'),
    retina: require('../assets/img/service-processing@2x.jpg'),
  },
  reporting: {
    normal: require('../assets/img/service-reporting@1x.jpg'),
    retina: require('../assets/img/service-reporting@2x.jpg'),
  },
};

const getImageProps = service => ({
  src: images[service.id].normal,
  srcSet: `${images[service.id].normal}, ${images[service.id].retina} 2x`,
  alt: service.title,
  width: 1200,
  height: 951,
});

export default class ServicesList extends Component {
  state = {
    activeServiceIndex: 0,
    cardTops: [],
    maxOffset: 0,
    assumedImageSizeMeasured: false,
  };

  constructor(props) {
    super();
    this.parentRef = React.createRef();
    this.photoRef = React.createRef();
    this.cardRefs = props.services.map(() => React.createRef());
  }

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

  handleCardClick = index => () => {
    this.setState({ activeServiceIndex: index }, () => {
      const el = this.cardRefs[index].current;
      const top = el.getBoundingClientRect().top;
      const offset = 25;

      if (window.innerWidth < 768 && top < offset) {
        document.scrollingElement.scrollTop -= Math.abs(top - offset);
      }
    });
  };

  measure = () => {
    if (this.parentRef.current && this.photoRef.current) {
      const parentRect = this.parentRef.current.getBoundingClientRect();
      const parentHeight = parentRect.height;
      const photoHeight = this.photoRef.current.getBoundingClientRect().height;
      const cardTops = this.props.services.map((_, index) => {
        const cardRect = this.cardRefs[index].current.getBoundingClientRect();

        return Math.abs(parentRect.top - cardRect.top);
      });

      const maxOffset = parentHeight - photoHeight;

      this.setState({ cardTops, maxOffset });
    }
  };

  throttledMeasure = throttle(this.measure, 100);

  render() {
    const { services } = this.props;
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
                iconName={service.id}
                active={activeServiceIndex === index}
                onClick={this.handleCardClick(index)}>
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
                {...getImageProps(service)}
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
            {...getImageProps(activeService)}
          />
        </div>
      </div>
    );
  }
}
