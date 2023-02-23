import React from 'react'
import { FaTwitter, FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsPinterest } from 'react-icons/bs';

function Footer() {
    return (
        <div className='bg-[#8dbbd6] text-teal-700 ' >
            <div>
                <h1 className='text-3xl text-center p-12 font-extrabold'>
                    sunnyside
                </h1>
                <div className='text-center text-lg mx-auto' >
                    <a className='mr-16 hover:text-slate-50' href="#/">About</a>
                    <a className=' hover:text-slate-50' href="#/">Servcies</a>
                    <a className='ml-16 hover:text-slate-50' href="#/">Product</a>
                </div>
                <div className='flex justify-center p-16' >
                    <FaFacebookSquare size='1.3rem' className='mx-6 hover:text-slate-50' />
                    <BsInstagram size='1.3rem' className='mx-6 hover:text-slate-50' />
                    <FaTwitter size='1.3rem' className='mx-6 hover:text-slate-50' />
                    <BsPinterest size='1.3rem' className='mx-6  hover:text-slate-50' />
                </div>
            </div>
        </div>
    )
}
export default Footer