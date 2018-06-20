import React, { Component } from 'react';
import classNames from 'classnames';

import ServiceCard from './service-card';

const services = [
  {
    icon: 'enrollment',
    title: 'Enrollment',
    description:
      'Easily enroll members, collection personal information and biometrics, and issue membership cards.',
    imageUrl: 'https://placekitten.com/900/550',
  },
  {
    icon: 'identification',
    title: 'Identification',
    description:
      'Accurately identify members, edit their personal information, and confirm their eligibility for services.',
    imageUrl: 'https://placekitten.com/g/900/600',
  },
  {
    icon: 'submission',
    title: 'Claims submission',
    description:
      'Efficiently collect claims and any corroborating documents from clinics, pharmacies, and hospitals.',
    imageUrl: 'https://placekitten.com/900/565',
  },
  {
    icon: 'processing',
    title: 'Claims processing',
    description:
      'Thoroughly review and adjudicate claims, and manage the provider reimbursement process.',
    imageUrl: 'https://placekitten.com/g/900/700',
  },
  {
    icon: 'reporting',
    title: 'Reporting',
    description:
      'Intelligently analyze data across the entire system and make any necessary changes.',
    imageUrl: 'https://placekitten.com/900/800',
  },
];

export default class ServicesList extends Component {
  state = {
    activeServiceTitle: services[0].title,
  };

  render() {
    const { activeServiceTitle } = this.state;
    const activeService = services.find(service => service.title === activeServiceTitle);

    return (
      <div className="flex-m gutter-adjust">
        <ul className="column-5-m gutter">
          {services.map((service, index) => (
            <li
              className={classNames({ 'marginTop-2': index !== 0 })}
              key={service.title}>
              <ServiceCard
                title={service.title}
                iconName={service.icon}
                active={activeServiceTitle === service.title}
                onClick={() => this.setState({ activeServiceTitle: service.title })}>
                {service.description}
              </ServiceCard>
            </li>
          ))}
        </ul>
        <div className="display-none display-block-m column-7 gutter">
          <img
            className="borderRadius-4"
            src={activeService.imageUrl}
            alt={activeService.title}
          />
        </div>
      </div>
    );
  }
}
