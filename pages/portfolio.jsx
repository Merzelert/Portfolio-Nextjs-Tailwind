import Image from 'next/image'
import React from 'react'
import portfolioImg from '../public/assets/projects/portfolio.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const portfolio = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] lg:w-[60vp] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh bg-black/60 z-10'></div>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg} alt='/'></Image>

                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50px] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Portfolio</h2>
                    <h3>React | Tailwind | NextJS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2 className='pb-3 tracking-widest text-[#5651e5]'>Overview</h2>
                    <p>This app was built with Next.js which gives you the best React.js development experience with all the features needed for production like Client Side Rendering, Server Side Rendering, Static Site Generation (ESG) and was deployed to Production with Vercel. In order to create a portfolio where the user can learn about me, my projects and contact me for future collaborations or new work projects.</p>
                    <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/Merzelert/Portfolio-Nextjs-Tailwind" target="_blank" rel="noopener noreferrer">Code</a></button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>NextJS</p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
}

export default portfolio