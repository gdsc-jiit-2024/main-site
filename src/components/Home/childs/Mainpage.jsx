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
      <div className="text-3xl text-[#6F6F6F] mt-4">
        <h2>Jaypee Institute Of Information Technology 62</h2>
      </div>
      <div className="text-4xl font-[600] text-center justify-center mt-14">
        <h1>An Electrifying Hub Of Innovation, Created By Students, Fueled</h1>
      </div>
      <div className="text-4xl font-[600] text-center justify-center mt-3">
        <h1>By Students</h1>
      </div>
      <div className="text-4xl font-[600] text-center justify-center mt-3">
        <h1>A Dynamic Developers Community!</h1>
      </div>
      <div className="text-2xl text-[#6F6F6F] mt-12 text-center mx-auto max-w-6xl">
        <h2>
          At GDSC JIIT 62, we aspire to ignite the flames of innovation within
          young developers, guiding them to underneath their hidden talents and
          embark on a transformative journey of{' '}
          <span className="text-black inline-block p-1 border-4 border-blue-500 bg-blue-300 rounded-3xl px-3.5">
            self-discovery
          </span>
        </h2>
      </div>
      <div className='pt-20 me-auto'>
        <Animation />
      </div>
    </div>
  );
};

export default Mainpage;
