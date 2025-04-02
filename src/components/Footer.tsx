import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Fopefoluwa Gbosibo. All rights reserved.</p>
        {/* Optional: Add links to GitHub/LinkedIn here */}
        {/* <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/fgbosibo17" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a> 
        </div> */}
      </div>
    </footer>
  );
};

export default Footer; 