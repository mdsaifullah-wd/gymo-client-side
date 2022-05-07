import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from './Item/Item';

const InventoryItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('https://gymowarehouse.herokuapp.com/inventory')
      .then((res) => setItems(res.data));
  }, []);
  return (
    <div className='container bg-dark py-9'>
      <h2 className='text-center text-3xl mb-9 uppercase'>Inventory Items</h2>
      <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
