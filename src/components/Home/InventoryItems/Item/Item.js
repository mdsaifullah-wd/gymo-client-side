import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, name, image, description, price, quantity, supplier } = item;
  const navigate = useNavigate();
  const showInventoryDetails = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className='border border-medium p-2 rounded-md hover:drop-shadow-3xl hover:scale-105 transition-scale duration-300 ease-in-out'>
      <img src={image} alt='' className='rounded-md' />
      <div className='bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className=''>
          <div className='text-gray-900 font-bold text-xl mb-2'>{name}</div>
          <p className='text-gray-700 text-base mb-5'>{description}</p>
          <div className='text-sm mb-8'>
            <p>Price: $ {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
          </div>
          <button
            onClick={() => showInventoryDetails(id)}
            className='w-full h-10 border-2 border-light rounded-md hover:bg-secondary hover:border-secondary hover:text-dark'>
            Update Stock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
