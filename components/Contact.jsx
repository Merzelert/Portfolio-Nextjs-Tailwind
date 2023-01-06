import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-3xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-2'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>

                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>

                            <div>
                                <h2 className='py-2 mt-4'>Erik Retana</h2>
                                <p>Full-Stack Web Developer</p>
                                <p>erik.retana.lopez@gmail.com</p>
                                <p className='py-4'>I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://www.linkedin.com/in/erik-retana-webdev/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://github.com/Merzelert" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a onClick={() => window.location = 'mailto:erik.retana.lopez@gmail.com'} target="_blank"><AiOutlineMail /></a>
                                        
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://twitter.com/merzelert" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 lg:p-6'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src='/assets/contact2.jpeg' width='690' height='550' alt='/' />
                        </div>
                        {/* <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="tel" />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='8'></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div> */}
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='#home' scroll={false}>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div>
                <div>
                    <p className='text-sm text-center tracking-widest uppercase text-[#5651e5]'>Created with 💜 in NextJS</p>
                </div>
            </div>
        </div>
    )
}

export default Contact