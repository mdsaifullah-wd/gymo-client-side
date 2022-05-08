import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const thStyle = 'text-base font-medium text-gray-900 px-6 py-4';
  const tdStyle =
    'text-base text-light font-medium px-6 py-4 whitespace-nowrap';
  const deleteItem = (id) => {
    const url = `https://gymowarehouse.herokuapp.com/inventory/${id}`;
    // const url2 = `http://localhost:3001/inventory/${id}`;
    const confirm = window.confirm('Are you sure?');
    if (confirm) {
      console.log({ id });
      axios
        .delete(url, { id })
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount === 1) {
            const rest = items.filter((item) => item._id !== id);
            setItems(rest);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const showInventoryDetails = (id) => {
    navigate(`/inventory/${id}`);
  };

  useEffect(() => {
    axios
      .get(`https://gymowarehouse.herokuapp.com/inventory/?email=${user.email}`)
      .then((res) => setItems(res.data));
  }, []);
  return (
    <div className='min-h-[calc(100vh-80px)] py-20'>
      <h2 className='text-5xl text-center my-16 uppercase'>My Items</h2>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between gap-6'>
          <div>
            <p className='text-xl'>
              User Name:{' '}
              <span className='text-secondary'>{user.displayName}</span>
            </p>
            <p className='text-xl'>
              User Email : <span className='text-secondary'>{user.email}</span>
            </p>
          </div>
          <Link
            to='/add-item'
            className='text-xl px-6 py-4 bg-secondary border border-secondary rounded-md text-primary hover:bg-dark hover:text-light hover:border-light inline-block mb-8'>
            Add New Item
          </Link>
        </div>
        <table className='min-w-full text-center'>
          <thead>
            <tr className='bg-secondary text-primary'>
              <th scope='col' className={thStyle}>
                Product Name
              </th>
              <th className={`hidden md:table-cell ${thStyle}`}>Price</th>
              <th className={`hidden md:table-cell ${thStyle}`}>Quantity</th>
              <th className={`hidden md:table-cell ${thStyle}`}>Sold Items</th>
              <th className={`hidden md:table-cell ${thStyle}`}>Supplier</th>
              <th className={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr
                  className={`border-b ${
                    index % 2 === 1
                      ? 'bg-dark hover:bg-dark/50 border-medium'
                      : 'bg-medium hover:bg-medium/75 border-dark'
                  }`}>
                  <td className={tdStyle}>{item.name}</td>
                  <td className={`hidden md:table-cell ${tdStyle}`}>
                    {item.price}
                  </td>
                  <td className={`hidden md:table-cell ${tdStyle}`}>
                    {item.quantity}
                  </td>
                  <td className={`hidden md:table-cell ${tdStyle}`}>
                    {item.soldItems || '0'}
                  </td>
                  <td className={`hidden md:table-cell ${tdStyle}`}>
                    {item.supplier}
                  </td>
                  <td className={tdStyle}>
                    <button
                      onClick={() => deleteItem(item._id)}
                      className='hover:text-secondary mr-4'>
                      Delete
                    </button>
                    <button
                      onClick={() => showInventoryDetails(item._id)}
                      className='hover:text-secondary'>
                      Update-Stock
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
