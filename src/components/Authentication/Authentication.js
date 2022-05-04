import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleLogo from '../../image/logo/google.svg';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';

const Authentication = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  useEffect(() => {
    reset();
  }, [path]);

  const [
    createUserWithEmailAndPassword,
    userFromSignUp,
    loadingFromSignUp,
    errorFromSignUp,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    signInWithEmailAndPassword,
    userFromSignIn,
    loadingFromSignIn,
    errorFromSignIn,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userFromGoogleSignIn, loading, error] =
    useSignInWithGoogle(auth);

  const submitForm = (data) => {
    const { email, password } = data;
    path === '/signup' && createUserWithEmailAndPassword(email, password);
    path === '/signin' && signInWithEmailAndPassword(email, password);

    console.log(userFromSignIn || userFromSignUp);
  };
  const googleSignIn = () => {
    signInWithGoogle();
  };

  if (userFromSignIn || userFromSignUp || userFromGoogleSignIn) {
    navigate(from || '/', { replace: true });
  }

  if (errorFromSignIn?.message) {
    console.log(errorFromSignIn.message);
  }

  if (errorFromSignUp?.message) {
    console.log(errorFromSignUp.message);
  }

  const inputStyle = `block w-full h-12 mb-1 mt-4 px-4 bg-light text-primary text-xl focus:outline-0 rounded-md border-error`;

  // Errors
  let nameFieldErrors = errors.name?.message;
  let emailFieldErrors = errorFromSignIn?.message.includes(
    'auth/user-not-found'
  )
    ? 'No user found with this email'
    : errors.email?.message ||
      errorFromSignIn?.message.includes('auth/email-already-in-use')
    ? 'Email already exist'
    : errors.email?.message;

  let passwordFieldErrors =
    path === '/signin' &&
    errorFromSignIn?.message.includes('auth/wrong-password')
      ? 'Password is incorrect'
      : errors.password?.message;

  let confirmPasswordFieldErrors = errors.confirmPassword?.message;
  return (
    <>
      <div className='container max-w-lg mt-20 mx-auto min-h-[calc(100vh-80px)]'>
        <h2 className='text-bold text-4xl text-center mb-8 uppercase'>
          {path === '/signup' ? 'Sign Up' : from ? 'Sign In First' : 'Sign In'}
        </h2>
        <button
          className='flex justify-center items-center gap-3 w-full h-12 mb-1 mt-4 px-4  text-xl rounded-md border border-light hover:bg-secondary hover:text-primary hover:border-secondary'
          onClick={googleSignIn}>
          <img src={googleLogo} alt='' />
          <span>
            {path === '/signin'
              ? 'Sign in with Google'
              : 'Sign up using Google'}
          </span>
        </button>

        <div className='flex justify-center items-center gap-3 h-5 mt-4 px-3'>
          <div className='w-full h-1 bg-light' style={{ height: '1px' }}></div>
          <p>OR</p>
          <div className='w-full bg-light' style={{ height: '1px' }}></div>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          {path === '/signup' && (
            <>
              <input
                type='text'
                className={`${inputStyle} ${errors.name && 'border'}`}
                {...register('name', {
                  required: 'Enter your name',
                  minLength: {
                    value: 3,
                    message: 'Name should be minimum 3 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Name should be maximum 20 characters',
                  },
                  pattern: {
                    value: /^([^0-9]*)$/,
                    message: 'Name should not contain numbers',
                  },
                })}
                placeholder='Full Name'
              />
              <p className='text-error text-sm'>{nameFieldErrors}</p>
            </>
          )}

          <input
            className={`${inputStyle} ${errors.email && 'border'}`}
            {...register('email', {
              required: 'Enter an email',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
            placeholder='Email'
          />

          <p className='text-error text-sm'>{emailFieldErrors}</p>

          <input
            type='password'
            className={`${inputStyle} ${errors.password && 'border'}`}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: path === '/signup' && 8,
                message: 'Password should be minimum 8 characters',
              },
            })}
            placeholder='Password'
          />
          <p className='text-error text-sm'>{passwordFieldErrors}</p>

          {path === '/signup' && (
            <>
              <input
                type='password'
                className={`${inputStyle} ${
                  errors.confirmPassword && 'border'
                }`}
                {...register('confirmPassword', {
                  required: 'Confirm Password is required.',
                  validate: (v) =>
                    v === watch('password') || 'Password should match',
                })}
                placeholder='Confirm Password'
              />
              <p className='text-error text-sm'>{confirmPasswordFieldErrors}</p>
            </>
          )}

          <button
            className={`${inputStyle} bg-secondary/75 hover:bg-secondary text-light hover:text-primary`}
            type='submit'>
            {path === '/signup' ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <div className='text-center mt-3'>
          <span>
            {path === '/signin' ? 'New to Gymo? ' : 'Already have an account? '}
          </span>
          <Link
            className='text-secondary underline'
            to={path === '/signin' ? '/signup' : '/signin'}>
            {path === '/signin' ? 'Sign Up' : 'Sign-In'}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Authentication;
