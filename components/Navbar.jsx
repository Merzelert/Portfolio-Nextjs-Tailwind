import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {logoImg} from '../public/assets/projects/1280px-ER_logo.svg.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, []);

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16 bg-[#1f2937]'>
                <Link href='/#home' scroll={false}>
                    <Image src='/assets/projects/output-onlinepngtools.png' width={125} height={50} alt='/' />
                </Link>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/#home' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skills' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/#projects' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href='/#contact' scroll={false}>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden cursor-pointer p-3'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f2937] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link onClick={() => setNav(false)} scroll={false} href='/#home'>
                                <Image src='/assets/projects/output-onlinepngtools.png' width={87} height={35} alt='/' />
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gr p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build amazing things</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/#home' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact' scroll={false}>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            {/* <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p> */}
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/erik-retana-webdev/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://github.com/Merzelert" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a href="https://twitter.com/merzelert" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <a onClick={() => window.location = 'mailto:erik.retana.lopez@gmail.com'} target="_blank"><AiOutlineMail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar