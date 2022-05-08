import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { FaDumbbell } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    navigate('/signin');
  };

  return (
    <header className='bg-primary text-light'>
      <div className='container flex justify-between items-center h-20'>
        <div className='text-bold text-3xl flex gap-2 items-center'>
          <FaDumbbell className='text-secondary text-5xl' />
          <span className='uppercase'>Gymo</span>
        </div>
        <nav className=' gap-5 items-center text-lg hidden md:flex'>
          <CustomLink to='/'>Home</CustomLink>
          <CustomLink to='/blogs'>Blogs</CustomLink>
          <CustomLink to='/inventory'>Inventory</CustomLink>
          {user?.email && (
            <>
              <CustomLink to='/manage-inventory'>Manage Inventory</CustomLink>
              <CustomLink to='/add-item'>Add Item</CustomLink>
              <CustomLink to='/my-items'>My Items</CustomLink>
            </>
          )}

          <CustomLink to='/contact'>Contact</CustomLink>
          {user?.email ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <>
              <CustomLink to='/signin'>Sign In</CustomLink>
              <CustomLink to='/signup'>Sign Up</CustomLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
