import React from 'react';

// Accomplishments data
const accomplishmentsList = [
  '2021, 2022 Discover Bentley',
  '2019 Forbes under 30 Scholar', 
  '1st Place winner IDEO CoLabs Hack Diversity De-hackathon at Google Boston',
];

// Affiliations data
const affiliationsList = [
  'Historian/Multimedia Chair Phi Beta Sigma Fraternity Incorporated',
  'Mentor Hack Diversity',
  'Telecommunications Chair National Society of Black Engineers',
];

const Accomplishments: React.FC = () => {
  return (
    <section id="accomplishments" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Accomplishments & Affiliations
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Accomplishments</h3>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8">
            {accomplishmentsList.map((item, index) => (
              <li key={`accomplishment-${index}`}>{item}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Affiliations</h3>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            {affiliationsList.map((item, index) => (
              <li key={`affiliation-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments; 