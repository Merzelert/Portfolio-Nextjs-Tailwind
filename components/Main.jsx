import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm trakc text-gray-600'>Let&apos;s build amazing things</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-[#5651e5]'>Erik Retana</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&apos;m a Full-Stack Web Developer with the ability to actively participate in work teams, organized, proactive, with excellent performance when learning new technologies like Next.js, Python for backend and Observability with New Relic and always willing to face any problem.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href="https://www.linkedin.com/in/erik-retana-webdev/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href="https://github.com/Merzelert" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a onClick={() => window.location = 'mailto:merzelert@gmail.com'} target="_blank"><AiOutlineMail /></a>

                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <a href="https://twitter.com/merzelert" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main