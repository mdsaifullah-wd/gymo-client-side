import React from 'react';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { MdOutlineHealthAndSafety, MdEventAvailable } from 'react-icons/md';

const About = () => {
  return (
    <div className='container grid md:grid-cols-2 gap-12 py-20'>
      <div className='grid md:grid-cols-2 gap-6 items-center'>
        <div className='grid grid-cols-1 gap-6'>
          <div>
            <img
              src='https://img.freepik.com/free-vector/logistic-workers-carrying-boxes-with-loaders_74855-6541.jpg?w=900&t=st=1652017247~exp=1652017847~hmac=0921de697f2260db79478c03ecee4875b28dabf48685bb10838a9f75dcb9ec76'
              alt=''
            />
          </div>
          <div>
            <img
              src='https://img.freepik.com/free-vector/logistics-concept-illustration_114360-1561.jpg?w=900&t=st=1652017249~exp=1652017849~hmac=c8deffb2d36f90f0fcf4c7930861738cf7ea84bd2b0d819f8333673c4a156f34'
              alt=''
            />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-6'>
          <div>
            <img
              src='https://img.freepik.com/free-photo/interior-new-warehouse_1385-443.jpg?w=900&t=st=1652017250~exp=1652017850~hmac=45dbe5e607e92a298abc8aa4eb5d7d893c90bd5754050596efbd8750f6bd5f41'
              alt=''
            />
          </div>
          <div>
            <img
              src='https://img.freepik.com/free-photo/industrial-park-factory-building-warehouse_1417-1924.jpg?w=900&t=st=1652017259~exp=1652017859~hmac=9cc9f9f1c32ce2d882d7df3a8aa272307f26c9d36b0f2deb4452cd0c3265c1d9'
              alt=''
            />
          </div>
          <div>
            <img
              src='https://img.freepik.com/free-photo/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg?w=900&t=st=1652017254~exp=1652017854~hmac=df1127a4dd7b624e17570f497fa07032350ed896f379e370f3d598afcafd8391'
              alt=''
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className='text-xl'>About Gymo</h3>
        <h2 className='text-5xl mb-6'>Gymo makes your business Easy</h2>

        {/* One */}
        <div className='flex gap-6 bg-light text-primary p-6 rounded-lg shadow-md hover:translate-y-2 transition-transform duration-200 ease-in-out cursor-pointer mb-6'>
          <div className='p-6 rounded-full bg-secondary text-6xl flex justify-center items-center'>
            <VscWorkspaceTrusted />
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>
              Trusted by thousands
            </h3>
            <p>
              Gymo is the largest warehouse for gym equipments supplying quality
              products for years. It became the most trusted organization.
            </p>
          </div>
        </div>
        {/* Two */}
        <div className='flex gap-6 bg-light text-primary p-6 rounded-lg shadow-md hover:translate-y-2 transition-transform duration-200 ease-in-out cursor-pointer mb-6'>
          <div className='p-6 rounded-full bg-secondary text-6xl flex justify-center items-center'>
            <MdOutlineHealthAndSafety />
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>
              Great for healthy life
            </h3>
            <p>
              Gymo gives you the most useful tools for your healthy life. Stay
              with gymo for your healthy life.
            </p>
          </div>
        </div>

        {/* Three */}
        <div className='flex gap-6 bg-light text-primary p-6 rounded-lg shadow-md hover:translate-y-2 transition-transform duration-200 ease-in-out cursor-pointer mb-6'>
          <div className='p-6 rounded-full bg-secondary text-6xl flex justify-center items-center'>
            <MdEventAvailable />
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>
              Available Everything you need
            </h3>
            <p>
              The most nice thing about gymo is that you don't have to search
              your staffs too much here and there. Every thing is available to
              us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
