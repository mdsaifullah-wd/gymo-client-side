import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddItem = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: user.email,
      soldItems: 0,
    },
  });

  const submitForm = (data) => {
    const url = 'https://gymowarehouse.herokuapp.com/inventory';
    const url2 = 'http://localhost:3001/inventory';
    axios.post(url2, data).then((res) => {
      console.log(res.data);
    });
  };
  const inputStyle = `block w-full h-12 mb-1 mt-4 px-4 bg-light text-primary text-xl focus:outline-0 rounded-md border-error`;
  return (
    <div className='container max-w-2xl min-h-[calc(100vh-80px)]'>
      <h2 className='text-3xl text-center'>Add Item</h2>

      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type='text'
          className={`${inputStyle} ${errors.name && 'border'}`}
          {...register('name', {
            required: 'Product Name is required',
          })}
          placeholder='Product Name'
        />
        <p className='text-error text-sm'>{errors.name?.message}</p>

        <textarea
          className={`block w-full h-24 mb-1 mt-4 px-4 bg-light text-primary text-xl focus:outline-0 rounded-md border-error ${
            errors.description && 'border'
          }`}
          {...register('description', {
            required: 'Product Description is required',
            maxLength: {
              value: 150,
              message: 'Description should be maximum 150 characters',
            },
          })}
          placeholder='Product description'
        />

        <p className='text-error text-sm'>{errors.description?.message}</p>

        <input
          type='text'
          className={`${inputStyle} ${errors.image && 'border'}`}
          {...register('image', {
            required: 'Image URL is required',
          })}
          placeholder='Image URL'
        />
        <p className='text-error text-sm'>{errors.image?.message}</p>

        <input
          className={`${inputStyle} ${errors.quantity && 'border'}`}
          type='number'
          {...register('quantity', {
            required: 'Quantity is required',
            valueAsNumber: true,
            min: {
              value: 0,
              message: 'Quantity should be a positive number',
            },
          })}
          placeholder='Quantity'
        />
        <p className='text-error text-sm'>{errors.quantity?.message}</p>

        <input
          className={`${inputStyle} ${errors.price && 'border'}`}
          type='number'
          {...register('price', {
            required: 'Price is required',
            valueAsNumber: true,
            min: {
              value: 0,
              message: 'Price should be a positive number',
            },
          })}
          placeholder='Price'
        />
        <p className='text-error text-sm'>{errors.price?.message}</p>

        <input
          type='text'
          className={`${inputStyle} ${errors.supplier && 'border'}`}
          {...register('supplier', {
            required: 'Supplier Name is required',
          })}
          placeholder='Supplier Name'
        />
        <p className='text-error text-sm'>{errors.supplier?.message}</p>

        <button
          className={`${inputStyle} bg-secondary/75 hover:bg-secondary text-light hover:text-primary`}
          type='submit'>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
