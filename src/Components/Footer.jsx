import React from 'react';
import logo from '../assets/Logo.png';
import { SlSocialFacebook } from 'react-icons/sl';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className='w-full mx-auto bg-[#F5F8FF] flex items-center'>

      <div className='w-[1229px] h-[462px] m-auto'>
        {/* Content */}
        <div className='flex justify-between items-center w-full mt-[90px]'>
          {/* Left */}
          <div className='w-[642px] h-[162px]'>
            <div className='w-[310px] h-[112px]'>
              <img src={logo} alt="" className='mb-4' />
              <p className='text-[#605F5F] font-[400] text-[14px] leading-[22px]'>Phosf luorescently engage worldwide method process shopping.</p>
            </div>
            <div className='mt-6 flex justify-start gap-4'>
              <SlSocialFacebook className='w-9 h-9  rounded-e-full bg-[#FFFFFF]' />
              <FaInstagram className='w-9 h-9  rounded-e-full bg-[#FFFFFF]' />
              <FaTwitter className='w-9 h-9  rounded-e-full bg-[#FFFFFF]' />
              <MdOutlineMail className='w-9 h-9 rounded-e-full bg-[#FFFFFF]' />
            </div>
          </div>
          {/* Columns */}
          <div className='flex justify-center gap-[120px]'>
            {/* Element/Coloumn */}
            <div className='w-[134px] h-[22]'>
              <h1 className='mb-4 font-[700] text-[14px]'>Shop</h1>
              <button className='mb-3 text-[#3E3E59]'>
                My account
              </button><br />
              <button className='mb-3 text-[#3E3E59]'>
                Login
              </button><br />
              <button className='mb-3 text-[#3E3E59]'>
                Wishlist
              </button><br />
              <button className=' text-[#3E3E59]'>
                Cart
              </button>
            </div>
            {/* Element/Coloumn */}
            <div className='w-[134px] h-[22]'>
              <h1 className='mb-4 font-[700] text-[14px]'>Information</h1>
              <button className='mb-3 text-[#3E3E59]'>
                Shipping Policy
              </button><br />
              <button  className='mb-3 text-[#3E3E59]'>
                Returns & Refunds
              </button ><br />
              <button className='mb-3 text-[#3E3E59]'>
                Cookies Policy
              </button><br />
              <button className=' text-[#3E3E59]'>
                Frequently asked
              </button>
            </div>
            {/* Element/Coloumn */}
            <div className='w-[134px] h-[22]'>
              <h1 className='mb-4 font-[700] text-[14px]'>Company</h1>
              <button className='mb-3 text-[#3E3E59]'>
                About us
              </button><br />
              <button className='mb-3 text-[#3E3E59]'>
                Privacy Policy
              </button><br />
              <button className='mb-3 text-[#3E3E59]'>
                Term & Conditions
              </button><br />
              <button className=' text-[#3E3E59]'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className='border-b-4 mt-[72px]'>
        </div>
      </div>
    </div>
  )
}
