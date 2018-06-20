import React, { Component } from 'react';
import classNames from 'classnames';
import ServiceCard from './service-card';

const services = [
  {
    title: 'Enrollment',
    description:
      'Easily enroll members, collection personal information and biometrics, and issue membership cards.',
  },
  {
    title: 'Identification',
    description:
      'Accurately identify members, edit their personal information, and confirm their eligibility for services.',
  },
  {
    title: 'Claims submission',
    description:
      'Efficiently collect claims and any corroborating documents from clinics, pharmacies, and hospitals.',
  },
  {
    title: 'Claims processing',
    description:
      'Thoroughly review and adjudicate claims, and manage the provider reimbursement process.',
  },
  {
    title: 'Reporting',
    description:
      'Intelligently analyze data across the entire system and make any necessary changes.',
  },
];

export default class ServicesList extends Component {
  state = {
    activeService: services[0].title,
  };

  render() {
    const { activeService } = this.state;

    return (
      <div className="flex gutter-adjust">
        <ul className="column-5 gutter">
          {services.map((service, index) => (
            <li className={classNames({ 'marginTop-2': index !== 0 })}>
              <ServiceCard
                title={service.title}
                active={activeService === service.title}
                onClick={() => this.setState({ activeService: service.title })}>
                {service.description}
              </ServiceCard>
            </li>
          ))}
        </ul>
        <div className="column-7 gutter">
          <img
            className="borderRadius-4"
            src="https://placekitten.com/900/550"
          />
        </div>
      </div>
    );
  }
}
