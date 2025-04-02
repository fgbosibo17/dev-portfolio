import React from 'react';

// Education data
const educationItems = [
  {
    degree: 'M.S. in Digital Innovation',
    school: 'Bentley University Graduate School of Business, MA',
    year: 'May 2022',
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'Lincoln University of Pennsylvania, PA',
    year: 'May 2020',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Education
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {educationItems.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{edu.degree}</h3>
              <p className="text-lg text-blue-600 mb-1">{edu.school}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 