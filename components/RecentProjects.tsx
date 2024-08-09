"use client";

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/PinContainer'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20 md:mt-10 lg:mt-20' id='projects'>
        {/* HEADER */}
        <h1 className='heading'>
            A small selection of {" "}<span className='text-purple'>My recent Projects</span>
        </h1>
        {/* PROJECTS LIST */}
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
            {projects.map(({ id, title, des, img, technologies, link}) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img" />
                            </div>
                            <img src={img} alt={title} className='z-10 absolute bottom-0' />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                        <p className='lg:text-md lg:font-normal font-light text-sm mt-3 text-white-100 line-clamp-3'>{des}</p>
                        <div className='flex flex-wrap -m-2 py-4'>
                            {technologies.map((technology, index) => (
                                <span key={index} className='mr-2 mt-4 rounded text-xs border px-2 py-1 font-medium text-white-100 gap-4'>{technology}</span>
                            ))}
                        </div>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center justify-center gap-2'>
                                <p className='flex lg:text-sl md:text-sx text-sm text-purple'>View Demo</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9' />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects