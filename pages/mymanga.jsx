import Image from 'next/image'
import React from 'react'
import mangaImg from '../public/assets/projects/mymanga.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const mymanga = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] lg:w-[60vp] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh bg-black/60 z-10'></div>
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={mangaImg} alt='/'></Image>

                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50px] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>MyManga E-commerce</h2>
                    <h3>React | CSS | Node | PostgreSQL | Sequelize | Tailwind | Redux | Stripe | Firebase | Formik</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2 className='pb-3 tracking-widest text-[#5651e5]'>Overview</h2>
                    <p>This fullstack app was created with React, it was carried out during the learning process in soyHenry`s bootcamp, it is an E-commerce with a manga theme, which covered all the tech requirements with SCRUM methodology in React, HTML, Node.js , Express, Sequelize,
PostgreSQL, Firebase, Formik, Stripe and JavaScript, the user is able to create their account, log-in, view every detail of the manga, add to the shopping cart, make the payment through Stripe, be notified via email of your purchase and later I was able to make a review of the items you have purchased, it has a dark mode. <br /> As administrator you can create new items for e-commerce, edit existing items, create promotions that will be impacted in a carousel on the main page, delete users, observability was added with New Relic.</p>
                    <button className='px-8 py-2 mt-4 mr-8'><a href="https://mymangastore.netlify.app" target="_blank" rel="noopener noreferrer">Demo</a></button>
                    <button className='px-8 py-2 mt-4 mr-8'><a href="https://github.com/IvanaSDW/pf_with_vite" target="_blank" rel="noopener noreferrer">Code</a></button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Node</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Sequelize</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Redux</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>PosgreSQL</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Stripe</p>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Formik</p>
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

export default mymanga