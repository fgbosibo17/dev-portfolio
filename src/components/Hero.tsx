import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 md:py-40">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Fopefoluwa Gbosibo
        </h1>
        <p className="text-xl md:text-2xl font-light text-indigo-100 mb-8 max-w-2xl mx-auto">
          Innovative Fullstack Engineer & Technical Consultant | Building Responsive & Interactive Web Applications
        </p>
        <div className="flex justify-center space-x-6 text-indigo-200">
          <a href="mailto:fopefoluwa.gbosibo@gmail.com" className="hover:text-white transition duration-300">
            fopefoluwa.gbosibo@gmail.com
          </a>
          <span>•</span>
          <span className="hover:text-white transition duration-300">484-983-5733</span>
          {/* Consider adding LinkedIn/GitHub icons here */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 