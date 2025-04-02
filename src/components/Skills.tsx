import React from 'react';

const skillsData = {
  Languages: ['JavaScript(ES6+)', 'Python', 'Java', 'HTML5', 'CSS3'],
  'Front-End': ['React', 'Redux', 'Webpack', 'Babel', 'Antd'],
  'Back-End': ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Azure', 'AWS'],
  Testing: ['Selenium', 'Cypress', 'Postman', 'Playwright', 'Pactflow'],
  Tools: ['Git', 'Docker', 'Jenkins', 'Jira', 'Azure DevOps'],
  Certifications: [
    'Microsoft Certified: Azure Administrator Associate',
    'Microsoft Certified: Devops Engineer Expert',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 