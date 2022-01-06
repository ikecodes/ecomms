import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AddToCart } from './Buttons';
const ProductItem = ({ image, description, price, toCart, availability }) => {
  return (
    <Link to='/productDetails'>
      <div className='w-60'>
        <div className='relative mb-2'>
          <img
            className='object-cover h-full w-full'
            src={image}
            alt='Product'
          />
          <span className='bg-[#3EC1F9] p-2 absolute top-4 rounded-l-full right-0 text-white'>
            Out of stock
          </span>
        </div>
        <div className='font-semibold text-md mb-2.5'>{description}</div>
        <span className='text-[#3EC1F9] font-bold mr-2 p-50'>N{price}</span>
        <span className='text-gray-200 line-through mb-2.5 font-bold text-sm p-50'>
          N9,000
        </span>
        {toCart && (
          <div className='flex items-center  justify-between'>
            <AddToCart />
            {/* <div className='flex bg-[#3EC1F9] rounded-full p-2 mt-5 items-center'>
              <FaCartPlus color='white' />
              <span className=' text-white uppercase px-2 font-semibold'>
                Add to cart
              </span>
            </div> */}
            <BsHeart className='text-[#3EC1F9]' />
          </div>
        )}

        {availability && (
          <p className='mt-2.5 text-[#07B52A] font-semibold'>
            Available in 4 stores
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductItem;