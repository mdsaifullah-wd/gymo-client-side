import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/Home/InventoryItems/Item/Item';

const InventoryItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = 'https://gymowarehouse.herokuapp.com/inventory';
    // const url2 = 'http://localhost:3001/inventory';
    axios.get(url).then((res) => setItems(res.data));
  }, []);
  return (
    <div className='container py-20 bg-dark min-h-[calc(100vh-80px)]'>
      <h2 className='text-center text-5xl mb-16 uppercase'>
        All Inventory Items
      </h2>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
