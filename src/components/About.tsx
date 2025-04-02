import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-center text-gray-700 space-y-6 leading-relaxed">
          <p>
            I am an innovative Fullstack Engineer and Technical Consultant with expertise building responsive, interactive, B2B, B2C web applications and softwares. I have many years of experience using JavaScript frameworks and libraries such as React, NodeJs with MongoDb, SQL, and other NoSQL databases.
          </p>
          <p>
            I also have experience working with Golang, building microservice architectures and distributed systems while working with evolving agile software engineering methodologies to increase productivity and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 