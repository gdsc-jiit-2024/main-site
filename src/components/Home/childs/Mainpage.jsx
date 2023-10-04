import React from 'react';
import Animation from './Animation';


const Mainpage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="relative mt-12">
        <img src="/images/logo2.svg" alt="Your Image" className="mx-auto" />
      </div>
      <div>
        <img
          src="/images/red.svg"
          alt="red-image"
          className="absolute top-0 left-0"
        />
        <img
          src="/images/blue.svg"
          alt="blue-image"
          className="absolute top-0 right-0"
        />
      </div>
      <div className="text-5xl font-[700] text-center justify-center mt-6">
        <h1>Google Developer Student Club</h1>
      </div>
      <div className="text-3xl font-[#141718] mt-2">
        <h2>Jaypee Institute Of Information Technology 62</h2>
      </div>

      <div className='pt-20 me-auto'>
        <Animation />
      </div>

    </div>
  );
};

export default Mainpage;
