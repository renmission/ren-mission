"use client";

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <div className='w-full pt-20 pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading'>Let’s Take <span className='text-purple'>Your</span> Project to the Next Level</h1>
            <p className='text-white-200 text-center md:mt-10 my-5'>Reach out today to discuss your goals and see how I can help you. Let’s bring your ideas to life.</p>
            <a href="mailto:missionrenjr@gmail.com">
                <MagicButton
                    title="Get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center space-y-3 md:space-y-0 lg:space-y-0'>
            <p className='md:text-base text-sm md:font-normal font-light text-white-100'>Copyright &copy; {new Date().getFullYear()} Renato Mission</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map(({ id, href, img }) => (
                    <div key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <a href={href} target='_blank'>
                            <img src={img} alt={href} width={20} height={20} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer