import React from 'react';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className='container py-20 bg-dark text-center'>
      <div className='max-w-2xl mx-auto'>
        <h3 className='text-xl mb-3'>Ready to Get Started</h3>
        <h2 className='text-4xl md:text-6xl mb-8'>
          We are ready to give you the best service
        </h2>
        <div className='flex gap-6 justify-center'>
          <Link
            to='/inventory'
            className='text-xl px-6 py-4 bg-secondary border border-secondary rounded-md text-primary hover:bg-dark hover:text-light hover:border-light'>
            Get Started
          </Link>
          <Link
            to='/contact'
            className='text-xl px-6 py-4 bg-dark border border-light rounded-md hover:bg-secondary hover:text-dark hover:border-secondary'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
