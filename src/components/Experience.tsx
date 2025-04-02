import React from 'react';

const experienceData = [
  {
    title: 'Full Stack Engineer',
    company: 'Broadview Technical Solutions',
    location: 'Burlington, NJ',
    dates: 'September 2022 – Present',
    description: [
      'Created a robust and scalable RESTful architecture using Python frameworks aligning with company\'s specific requirements.',
      'Developed webhooks to enable third-party integrations and event-driven architecture, allowing for real-time notifications and updates related to logistics events.',
      'Utilized Windows services to manage webhook subscriptions, ensuring reliable and efficient processing of events such as shipment status changes, inventory updates, and more',
      'Implemented OAuth2 for secure authentication, applying best practices to protect sensitive information related to shipments and customers.',
      "Utilized React's component-based architecture to create modular and reusable UI components, enhancing maintainability and consistency across the application.",
      'Implemented responsive design using frameworks like, ensuring optimal viewing and interaction experience across various devices and screen sizes.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company: 'Data Service Group',
    location: 'Bear, DE',
    dates: 'September 2019 – September 2022',
    description: [
      'Translated business requirements into detailed technical designs, creating blueprints for development and ensuring that all stakeholders had a clear understanding of the proposed solutions.',
      'Designed and implemented an ecosystem that facilitated communication with several third-party APIs, serving different purposes such as payment processing and data analytics.',
      'Ensured secure and scalable integrations, applying best practices for API security and designing the architecture to handle varying loads and demands.',
      'Utilized React, Antd (a UI design language),to create and update dynamic, responsive, and interactive frontend components',
      'Developed and documented automation processes to enable teams to deploy, manage, configure, scale, and monitor their applications using tooling or scripting reducing the time to get features in production.',
      'Provided emergency response by being on an on-call rotation and troubleshooting and/or escalating as needed',
    ],
  },
  {
    title: 'Site Reliability Engineer',
    company: 'Veson Nautical',
    location: 'Boston, MA',
    dates: 'June 2019 – September 2019',
    description: [
      'Extensively performed regression and functional test suites of "Veson IMOS" platform',
      'Developed, tested, and debugged test cases to remove previously known redundancies by 20% and ensure predictable outcomes.',
      'Debugged complex scenarios in a web-based product to resolve flaky tests and uncover intermittent bugs',
      "Extensively built PowerShell scripts, to automate various repetitive developer's tasks",
      'Designed, wrote, and delivered automation tasks to improve the infrastructure\'s availability and scalability',
      'Continuously monitored that the set service level objectives were met',
      'Implemented implementation and design of support and architectural documentation, policies, analysis, and testing.',
    ],
  },
  {
    title: 'Lead Application Developer',
    company: 'Ashmun Express',
    location: 'Oxford, PA',
    dates: 'October 2016 – May 2019',
    description: [
      'Collaborated with other developers to ensure code quality standards are met and followed best practices in software development.',
      'Assisted in testing by providing feedback on usability and functionality as well as identifying any defects that arose within the application prior to release.',
      'Led stand-up meetings, bi-weekly sprint planning meetings, weekly status meetings, and monthly all-hands meetings with the team to stay up-to-date on project progress and roadmaps.',
      'Participated in code reviews and ensured that all code meets our standards before being deployed to production environments.',
      'Developed and maintained the design specifications, development tasks, and testing procedures.',
      'Provided technical support to the research staff regarding app functionality or bugs when needed.',
      'Assisted in testing new features developed by other teams within the company and assisted with debugging issues reported by customers or identified internally during QA testing.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Professional Experience
        </h2>
        <div className="relative max-w-4xl mx-auto space-y-12">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-blue-300 transform md:-translate-x-1/2"></div>

          {experienceData.map((job, index) => (
            <div key={index} className="relative pl-10 md:pl-0">
              <div className="absolute left-4 top-1 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 md:left-1/2 md:transform-none md:-translate-x-1/2"></div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">{job.title}</h3>
                  <p className={`text-lg font-medium text-blue-600 mb-1 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>{job.company} - <span className="text-gray-500 font-normal">{job.location}</span></p>
                  <p className={`text-sm text-gray-500 mb-4 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>{job.dates}</p>
                  <ul className={`list-disc list-inside space-y-2 text-gray-700 ${index % 2 !== 0 ? 'md:text-right md:list-outside' : 'md:text-left'}`}>
                    {job.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 