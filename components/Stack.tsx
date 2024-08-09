"use client";

import React from 'react'
import { FaAws, FaNodeJs } from 'react-icons/fa6'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Stack = () => {
  return (
    <div className='py-20 pt-20 mb-10' id='stacks'>
         {/* HEADER */}
         <h1 className='heading'>
            My Core <span className='text-purple'>Technologies</span>
        </h1>
        {/* STACK LIST */}
        <div className='grid grid-cols-3 md:grid-cols-9 gap-4 mt-10 place-items-center custom-grid'>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <RiReactjsLine className='text-6xl text-blue-500' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <TbBrandNextjs className='text-6xl text-neutral-200' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <FaNodeJs className='text-6xl text-green-500' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <SiExpress className='text-6xl text-yellow-500' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <SiTypescript className='text-6xl text-blue-500' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <SiMongodb className='text-6xl text-green-500' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <SiRedux className='text-6xl text-purple-500' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <SiTailwindcss className='text-6xl text-indigo-500' />
            </div>
            <div className='w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                <FaAws className='text-6xl text-orange-500' />
            </div>
        </div>
    </div>
  )
}

export default Stack