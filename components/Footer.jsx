import React from 'react';
import Image from 'next/image';
import icon from '@app/assets/icon2.png'
import { Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-white text-white p-8 text-center border-y-2">
      <div className="relative mb-4 flex items-center justify-center">
        <Image
          src={icon}
          alt="Icon"
          width={50}
          height={50} 
          className='mb-[40px]'
        />
        <p className="text-purple-500 text-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-44">
          Ahead
        </p>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <div className="flex items-center">
          <Phone  style={{ color: '#94F0D6' }}/>
          <p className="ml-2 text-black">Phone</p>
        </div>
        <div className="flex items-center">
          <Email  style={{ color: '#94F0D6' }}/>
          <p className="ml-2 text-black">Email</p>
        </div>
      </div>
      <p className="text-sm opacity-60 text-black">Developed by Manan Agrawal&nbsp;❤️</p>
    </footer>
  );
};

export default Footer;
