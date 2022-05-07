import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { _id, name, image, description, price, quantity, supplier } = item;
  const navigate = useNavigate();
  const showInventoryDetails = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className='border border-medium p-2 rounded-md hover:drop-shadow-3xl hover:scale-105 transition-scale duration-300 ease-in-out'>
      <img src={image} alt='' className='rounded-md' />
      <div className='bg-white p-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-base mb-5'>{description}</p>
        <div className='text-sm mb-8'>
          <p>Price: $ {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
        </div>
        <button
          onClick={() => showInventoryDetails(_id)}
          className='w-full h-10 border-2 border-light rounded-md hover:bg-secondary hover:border-secondary hover:text-dark'>
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default Item;
