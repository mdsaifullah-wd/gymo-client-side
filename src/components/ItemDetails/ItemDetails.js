import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [err, setErr] = useState('');
  const {
    _id,
    name,
    image,
    description,
    price,
    quantity,
    soldItems,
    supplier,
  } = item;
  const url = `https://gymowarehouse.herokuapp.com/inventory/${id}`;
  const url2 = `http://localhost:3001/inventory/${id}`;
  console.log(url, url2);
  useEffect(() => {
    axios.get(url).then((res) => {
      setItem(res.data);
      setErr('');
    });
  }, []);

  const reduceQuantity = () => {
    let { quantity, soldItems, ...rest } = item;
    quantity -= 1;
    soldItems += 1;
    axios
      .put(url, { quantity, soldItems })
      .then((res) => {
        if (res.status === 200) {
          rest.quantity = quantity;
          rest.soldItems = soldItems;
          setItem(rest);
        }
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const addQuantity = (data) => {
    let { quantity, ...rest } = item;
    quantity += +data.quantity;
    axios
      .put(url, { quantity })
      .then((res) => {
        if (res.status === 200) {
          rest.quantity = quantity;
          setItem(rest);
        }
      })
      .catch((err) => {
        setErr(err.message);
      });
  };
  return (
    <div className='min-h-[calc(100vh-80px)]'>
      <div className='container grid md:grid-cols-2 gap-8 mt-16 items-center'>
        <img src={image} alt='' className='rounded-md' />
        <div className='p-4'>
          <div className='font-bold text-4xl mb-8'>{name}</div>
          <p className='text-xl mb-8'>{description}</p>
          <div className='text-base mb-8'>
            <p>Price: $ {price}</p>
            <p>Quantity: {quantity === 0 ? 'Stock Out' : quantity}</p>
            <p>Sold Items: {soldItems || '0'}</p>

            <p>Supplier: {supplier}</p>
          </div>
          <p className='text-error text-base mb-3'>{err}</p>
          <button
            onClick={() => reduceQuantity(_id)}
            className='h-10 border-2 px-8 border-light rounded-md hover:bg-secondary hover:border-secondary hover:text-dark'>
            Delivered
          </button>

          <form>
            <input
              className='text-primary bg-light'
              type='number'
              {...register('quantity', {
                required: 'Enter quantity',
                min: {
                  value: 0,
                  message: 'Quantity should be a positive number',
                },
              })}
              placeholder='Quantity'
            />
            <p className='text-error text-sm'>
              {errors.quantity?.message || err}
            </p>
            <button
              onClick={handleSubmit(addQuantity)}
              className='h-10 border-2 px-8 border-light rounded-md hover:bg-secondary hover:border-secondary hover:text-dark'>
              Restock the item
            </button>
          </form>
          <Link to='/manage-inventory'>Manage Inventories</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
