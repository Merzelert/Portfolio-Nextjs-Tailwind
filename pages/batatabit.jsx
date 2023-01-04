import Image from 'next/image'
import React from 'react'
import batataImg from '../public/assets/projects/batatabit.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const batatabit = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] lg:w-[60vp] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh bg-black/60 z-10'></div>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={batataImg} alt='/'></Image>

                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50px] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Batatabit</h2>
                    <h3>HTML | CSS | Figma</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2 className='pb-3 tracking-widest text-[#5651e5]'>Overview</h2>
                    <p>50% of Internet traffic is carried out from mobile devices, making frontend development for smartphones, tablets and laptops a priority. With the development of this application, we learned what was necessary to create projects that adapt to the different views that users use.
                        <br />
                        Styles were applied with pure CSS that can be reused, media queries to adapt device views and the architecture of the project was analyzed starting from a wireframe thanks to Figma</p>
                    <button className='px-8 py-2 mt-4 mr-8'><a href="https://merzelert.github.io/batata-bit/" target="_blank" rel="noopener noreferrer">Demo</a></button>
                    <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/Merzelert/batata-bit" target="_blank" rel="noopener noreferrer">Code</a></button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Figma</p>
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

export default batatabit