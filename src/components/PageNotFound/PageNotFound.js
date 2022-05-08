import React from 'react';

const PageNotFound = () => {
  return (
    <div className='min-h-[calc(100vh-80px)] bg-dark container py-20 flex justify-center items-center'>
      <div className='grid grid-cols-2 gap-16 items-center uppercase'>
        <div className='text-8xl'>Error |</div>
        <div className='text-4xl grid grid-cols-1 items-center'>
          <div>404</div>
          <div>Not Found</div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
