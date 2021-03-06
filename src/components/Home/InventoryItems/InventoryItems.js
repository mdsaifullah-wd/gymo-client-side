import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item/Item';

const InventoryItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = 'https://gymowarehouse.herokuapp.com/home/inventory/';
    // const url2 = 'http://localhost:3001/home/inventory/';
    axios.get(url).then((res) => setItems(res.data));
  }, []);
  return (
    <div className='container bg-dark py-20'>
      <h2 className='text-center text-5xl mb-16 uppercase'>Inventory Items</h2>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className='flex justify-end'>
        <Link
          to='/manage-inventory'
          className='text-xl px-6 py-4 bg-secondary border border-secondary rounded-md text-primary hover:bg-dark hover:text-light hover:border-light inline-block mt-8'>
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default InventoryItems;
