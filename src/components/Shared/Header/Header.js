import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { FaDumbbell, FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    navigate('/signin');
  };
  // Toggle Sidebar State
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <header className='bg-primary text-light'>
      <div className='container flex justify-between items-center h-20'>
        <div className='text-bold text-3xl flex gap-2 items-center'>
          <FaDumbbell className='text-secondary text-5xl' />
          <span className='uppercase'>Gymo</span>
        </div>
        <div
          className='block md:hidden cursor-pointer text-3xl'
          onClick={toggleSidebar}>
          <FaBars />
        </div>
        <nav
          className={`bg-primary gap-5 items-center text-lg flex flex-col md:flex-row justify-start md:justify-evenly w-1/2 md:w-auto fixed md:static top-0 right-0 p-6 md:p-0  md:translate-x-0 z-10 ${
            sidebar ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <span
            className='block md:hidden cursor-pointer text-3xl self-end'
            onClick={toggleSidebar}>
            <ImCross />
          </span>
          <CustomLink onClick={toggleSidebar} to='/'>
            Home
          </CustomLink>
          <CustomLink onClick={toggleSidebar} to='/blogs'>
            Blogs
          </CustomLink>
          <CustomLink onClick={toggleSidebar} to='/inventory'>
            Inventory
          </CustomLink>
          {user?.email && (
            <>
              <CustomLink onClick={toggleSidebar} to='/manage-inventory'>
                Manage Inventory
              </CustomLink>
              <CustomLink onClick={toggleSidebar} to='/add-item'>
                Add Item
              </CustomLink>
              <CustomLink onClick={toggleSidebar} to='/my-items'>
                My Items
              </CustomLink>
            </>
          )}

          <CustomLink onClick={toggleSidebar} to='/contact'>
            Contact
          </CustomLink>
          {user?.email ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <>
              <CustomLink onClick={toggleSidebar} to='/signin'>
                Sign In
              </CustomLink>
              <CustomLink onClick={toggleSidebar} to='/signup'>
                Sign Up
              </CustomLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
