import React, { useState } from 'react';
import {
  FaStore,
  FaUser,
  FaHeart,
  FaCartPlus,
  FaSearch,
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/images/logo-placeholder.jpg';
import LocationSelection from '../components/LocationSelection';
import StartOrder from '../components/StartOrder';
import NavBarSm from './NavBarSm';
const Header = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const handleShowNav = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <div>
      <LocationSelection show={show} handleShow={handleShow} />
      <StartOrder />
      <NavBarSm handleShowNav={handleShowNav} showNav={showNav} />
      <div className=' flex  items-center justify-around  flex-wrap bg-[#3EC1F9]'>
        <FaBars size={20} className='sm:hidden' onClick={handleShowNav} />
        <img
          src={LogoImage}
          alt='logo'
          className='my-2 md:my-0 h-15 w-24 sm:h-20 sm:w-40 sm:ml-10'
        />

        <div className='flex items-center order-3 sm:order-1 bg-white rounded-3xl p-2 basis-full my-2 sm:my-0 mx-2 sm:mx-0 sm:basis-1/2 md:basis-1/3 '>
          <FaSearch color='#000000DE' className='mx-2' />
          <input
            type='text'
            name='Search'
            placeholder='Search Product'
            className='w-full focus:border-none focus:outline-none pl-3'
          />
        </div>

        <button
          onClick={handleShow}
          className='flex items-center order-2 sm:order-2 bg-white rounded-2xl font-bold p-2 lg:-ml-20 text-sm text-[#3EC1F9]'
        >
          <FaStore />
          <span className='ml-2'> Store Locator</span>
        </button>

        <div className='flex order-1 sm:order-3 items-center divide-x mt-2 md:mt-0'>
          <div className='flex items-center text-white text-sm p-2'>
            <FaUser />
            <button disabled>
              <span className='pl-2'>Sign In</span>
            </button>
          </div>
          <Link to='/favorites'>
            <div className='flex items-center text-white text-sm p-2'>
              <FaHeart />
              <span className='pl-2'>2</span>
            </div>
          </Link>
          <Link to='/cart'>
            <div className='flex items-center text-white text-sm p-2'>
              <FaCartPlus />
              <span className='pl-2'>4</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
