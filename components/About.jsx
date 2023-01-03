import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-3xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>A passionate web developer Full-Stack from Mexico</p>
                    <p className='py-2 text-gray-600 text-justify'>I have experience working with technologies like React, JavaScript, HTML, CSS, Bootstrap, Tailwind, Node, PostgreSQL and Git.</p>
                    <p className='py-2 text-gray-600 text-justify'>During my training process at Henry I worked as a Full-Stack Teaching Assistant for Full-Stack Development students where a group of students was coordinated to achieve integration into the study group, assist in solving exercises and promote group collaboration (Pair Programming), I also developed two fullstack projects with the SCRUM methodology, various static web projects applying my knowledge and currently I continue to deepen in the sector, learning new technologies since I am interested in offering quality in that place where it can add value.</p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                </div>
                <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src="/../public/assets/profile-pic (1).png" width='300' height='300' alt="/" />
                </div>
            </div>
        </div>
    )
}

export default About