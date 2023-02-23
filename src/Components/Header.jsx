import React, { useState } from 'react'
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import {  HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from "react-icons/ai";

function Header() {
    let links = [
        { name: 'About', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'Projects', link: '/' },
    ];
   
    const [open, setOpen] = useState(false);
    return (
        <header className='w-full bg-cover bg-bottom h-[40rem] bg-[url(https://res.cloudinary.com/dvklv1cit/image/upload/v1675590004/Sunnyside/image-header_nha4fp.jpg)]'>
            <div className='md:flex items-center justify-between py-5 md:px-10 px-10'>
                <div className='font-bold text-3xl cursor-pointer flex items-center text-white'>
                    sunnyside
                </div>
                <div onClick={()=> setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
                 {open ? <AiOutlineClose /> : <HiMenu/>}
                </div>
                <ul className={`text-center md:flex md:items-center md:pb-0 pb-12 absolute md:static  mx-12 w-3/4 bg-slate-50 md:lg:bg-transparent left-0 md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        links.map((link) => (
                            <li key={link.name} className='md:mr-8 text-md md:my-0 my-7 text-black md:text-white lg:text-white' >
                                <a className='md:mr-4' href={link.link}> {link.name} </a>
                            </li>
                        ))
                    }
                    <Button />
                </ul>
            </div>
            <h1 className='text-white text-5xl text-center font-extrabold mt-16 tracking-widest md:tracking-wider'>
                WE ARE CREATIVES!
            </h1>
            <div className='text-white mx-[49%] mt-[15%] md:lg:mt-[5%]'>
                <FontAwesomeIcon icon={faArrowDownLong}  className='fa-5x' />
            </div>
        </header>
    )
}
export default Header