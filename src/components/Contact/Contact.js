import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';

const Contact = () => {
  const InputStyle = 'h-12 px-4 py-3 text-xl text-dark focus:outline-0';
  return (
    <div className='min-h-[calc(100vh-80px)]'>
      <div className='bg-dark container py-20'>
        <h2 className='text-center text-4xl uppercase mb-4'>Contact Us</h2>
        <p className='text-center text-xl mb-10'>
          Here is how you can reach us
        </p>
        <form>
          <div className='grid md:grid-cols-2 gap-6'>
            <input className={InputStyle} type='text' placeholder='Name' />
            <input
              className={InputStyle}
              type='email'
              placeholder='Email Address'
            />
            <input className={InputStyle} type='text' placeholder='Subject' />
            <input
              className={InputStyle}
              type='text'
              placeholder='Phone Number'
            />
            <textarea
              className='h-20 px-4 py-3 text-xl text-dark focus:outline-0 col-span-2'
              type='text'
              placeholder='Enter Message'
            />
          </div>
          <button
            className='bg-secondary hover:bg-dark px-24 py-3 border border-secondary hover:border-light text-dark hover:text-light mx-auto block mt-8 text-xl'
            onClick={(e) => {
              e.preventDefault();
            }}>
            Submit
          </button>
        </form>
      </div>
      <div className='container bg-primary grid md:grid-cols-3 gap-10 py-10'>
        <div className='text-center border-b border-dark md:border-0 py-4'>
          <div className='text-5xl mb-6'>
            <AiOutlineMail className='block mx-auto' />
          </div>
          <h3 className='text-3xl mb-4'>Email</h3>
          <p className='text-2xl text-secondary'>mdsaifullah.wd@gmail.com</p>
        </div>
        <div className='text-center border-b border-dark md:border-0 py-4'>
          <div className='text-5xl mb-6'>
            <BsTelephoneFill className='block mx-auto' />
          </div>
          <h3 className='text-3xl mb-4'>Phone</h3>
          <p className='text-2xl text-secondary'>+880 01712-345678</p>
        </div>
        <div className='text-center border-b border-dark md:border-0 py-4'>
          <div className='text-5xl mb-6'>
            <FaAddressCard className='block mx-auto' />
          </div>
          <h3 className='text-3xl mb-4'>Address</h3>
          <p className='text-2xl text-secondary'>1113, Ramgarh, Chittagong</p>
        </div>
      </div>
      <div className='container bg-dark py-20 text-center'>
        <p className='text-6xl'>Lets Start Your Business with Us!</p>
      </div>
    </div>
  );
};

export default Contact;
