import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='border-t border-dark'>
      <div className='grid md:grid-cols-3 gap-12 container py-10'>
        <div>
          <h3 className='text-2xl text-bold mb-4 uppercase'>Navigation</h3>
          <div className='grid grid-cols-2 gap-3 items-start'>
            <div>
              <Link
                to='/'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>Home</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link
                to='/blogs'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>Blogs</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link
                to='/manage-inventory'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>Manage Inventory</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link
                to='/add-item'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>Add Item</span>
                <MdKeyboardArrowRight />
              </Link>
            </div>
            <div>
              <Link
                to='/my-items'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>My Items</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link
                to='/signin'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>Sign In</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link
                to='/signup'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>Sign Up</span>
                <MdKeyboardArrowRight />
              </Link>
              <Link
                to='/settings'
                className='flex gap-3 items-center text-secondary mb-3'>
                <span>Settings</span>
                <MdKeyboardArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-2xl text-bold mb-4 uppercase'>Need Help?</h3>
          <p className='text-lg'>Call Us</p>
          <p className='text-sm mb-4 text-secondary'>+880 1712-345678</p>
          <p className='text-lg'>General Inquiries</p>
          <p className='text-sm mb-4 text-secondary'>info@gymowarehouse.com</p>
          <p className='text-lg'>Sales</p>
          <p className='text-sm mb-4 text-secondary'>sales@gymowarehouse.com</p>
        </div>
        <div>
          <h3 className='text-2xl text-bold mb-3 uppercase'>Stay Connected</h3>
          <p className='mb-5'>Get our stock update regularly</p>
          <form className='flex gap-3 mb-8'>
            <input
              type='email'
              placeholder='Email'
              className='h-10 px-3 bg-light text-primary text-lg focus:outline-0 rounded-md'
            />
            <button
              type='submit'
              onClick={(e) => {
                e.preventDefault();
              }}
              className='text-dark bg-secondary px-3 h-10 text-lg rounded-md'>
              Subscribe
            </button>
          </form>
          <div className='flex gap-5'>
            <div className='p-3 border-2 text-xl border-light rounded-full hover:bg-secondary'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.facebook.com'>
                <FaFacebookF />
              </a>
            </div>
            <div className='p-3 border-2 text-xl border-light rounded-full hover:bg-secondary'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.twitter.com'>
                <FaTwitter />
              </a>
            </div>
            <div className='p-3 border-2 text-xl border-light rounded-full hover:bg-secondary'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com'>
                <FaLinkedinIn />
              </a>
            </div>
            <div className='p-3 border-2 text-xl border-light rounded-full hover:bg-secondary'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.youtube.com'>
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center border-t border-b border-dark p-5'>
        <p>&copy; {new Date().getFullYear()}, Gymo Warehouse</p>
      </div>
    </div>
  );
};

export default Footer;
