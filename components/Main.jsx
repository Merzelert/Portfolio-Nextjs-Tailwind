import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm trakc text-gray-600'>Let&apos;s build amazing things</p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I&apos;m <span className='text-[#5651e5]'>Erik</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        A Full-Stack Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&apos;m a Full-Stack Web Developer with the ability to actively participate in work teams, organized, proactive, with excellent performance when learning new technologies like Next.js, Python for backend and Observability with New Relic and always willing to face any problem.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main