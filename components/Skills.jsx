import Image from 'next/image'
import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-3xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-2'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/html.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/css.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/javascript.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/react.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/node.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Node</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/tailwind.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/nextjs.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Nextjs</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-lg shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-col-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src='/assets/skills/postgres.50297c6d.png' width='64' height='64' alt='/' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills