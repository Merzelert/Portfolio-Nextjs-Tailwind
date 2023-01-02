import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import countriesImg from '../public/assets/projects/countries.png'
import mangaImg from '../public/assets/projects/mymanga.png'
import portfolioImg from '../public/assets/projects/portfolio.png'
import batataImg from '../public/assets/projects/batatabit.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-3xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>


                    <ProjectItem title='Countries (SPA)' backgroundImg={countriesImg} projectUrl='/countries' tech='React | CSS | Node | PostgreSQL | Sequelize | Redux'/>
                    <ProjectItem title='Mymanga (e-commerce)' backgroundImg={mangaImg} projectUrl='/mymanga' tech='React | Tailwind | Node | PostgreSQL | Firebase | Sequelize | React-Form | Stripe | Redux'/>
                    <ProjectItem title='Portfolio' backgroundImg={portfolioImg} projectUrl='/portfolio' tech='React | NextJS | Tailwind'/>
                    <ProjectItem title='Batatabit' backgroundImg={batataImg} projectUrl='/batatabit' tech='HTML | CSS' />

                </div>
            </div>

        </div>
    )
}

export default Projects