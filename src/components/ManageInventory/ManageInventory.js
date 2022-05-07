import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
  const [items, setItems] = useState([]);
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

  useEffect(() => {
    axios
      .get('https://gymowarehouse.herokuapp.com/inventory')
      .then((res) => setItems(res.data));
  }, []);
  return (
    <>
      <h2 className='text-3xl text-center my-10'>Manage Inventory</h2>
      <div className='container'>
        <table className='min-w-full text-center'>
          <thead>
            <tr className='bg-secondary text-primary'>
              <th scope='col' className={thStyle}>
                Product Name
              </th>
              <th className={thStyle}>Price</th>
              <th className={thStyle}>Quantity</th>
              <th className={thStyle}>Sold Items</th>
              <th className={thStyle}>Supplier</th>
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
                  <td className={tdStyle}>{item.price}</td>
                  <td className={tdStyle}>{item.quantity}</td>
                  <td className={tdStyle}>{item.soldItems || '0'}</td>
                  <td className={tdStyle}>{item.supplier}</td>
                  <td className={tdStyle}>
                    <button onClick={() => deleteItem(item._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to='/add-item'>Add New Items</Link>
      </div>
    </>
  );
};

export default ManageInventory;
